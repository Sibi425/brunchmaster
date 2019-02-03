const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

app.use(bodyParser.json()) // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })) // support encoded bodies

require('./Api/routes')(app)
// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
    const dbName = 'mdbw18'
    const mdbPort = 27017
    const url = 'mongodb://localhost:' + mdbPort + '/' + dbName

    mongoose.Promise = global.Promise

    mongoose
        .connect(url)
        .then(() => {
            console.log('Successfully connected to the database.')
        })
        .catch(err => {
            console.log("Couldn't connect to the database. Exiting now...")
            process.exit()
        })
    // Init Nuxt.js
    const nuxt = new Nuxt(config)

    const {
        host = process.env.HOST || '127.0.0.1',
        port = process.env.PORT || 3000
    } = nuxt.options.server

    // Build only in dev mode
    if (config.dev) {
        const builder = new Builder(nuxt)
        await builder.build()
    }

    // Give nuxt middleware to express
    app.use(nuxt.render)

    app.listen(port, host)

    // Listen the server
    consola.ready({
        message: `Server listening on http://${host}:${port}`,
        badge: true
    })
}
start()
