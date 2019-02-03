module.exports = {
    createAccount(req, res){
        let Accounts = {
            "User":{
                _oid
            }
            
        }

        Account.UserName = req.body.credentials.UserName;
        Account.Password = req.body.credentials.Password;

        const fs = require('fs');
        fs.appendFile("Accounts.json", JSON.stringify(Account), () => {
            console.log("Da tut sich was.")
            res.send(JSON.stringify(Account))
        })

    }
}