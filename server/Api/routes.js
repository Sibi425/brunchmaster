const TestController = require('./Controllers/TestController')
const AccountController = require('./Controllers/AccountController')


module.exports = (app) => {
    app.get('/api/testValue', TestController.createFile)
    app.post('/api/test', TestController.secondTest)
    app.post('/api/testValue', TestController.createFile)
    app.post('/api/createAccount', AccountController.createAccount)
}