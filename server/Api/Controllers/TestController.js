const fs = require('fs')
module.exports = {

    test(req, res) {
        res.send({hello: "Worked"})
        consola.info({
            message: "Inside Testcontroller"
        })
    },

    secondTest(req, res){
        consola.info("Its:" + req.body)
        res.send("its: " + req.body.Fock)
    },

    createFile(req, res){
        fs.appendFile('testData.json', JSON.stringify(req.body), function err(params) {
            consola.info("Consola works" + JSON.stringify(req.body.UserName))
            res.send(JSON.stringify(req.body))
        })
        
    }

    

}