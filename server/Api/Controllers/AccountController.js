const path = require('path')
const User = require(path.join(__dirname + '../../../../models/User.js'))

module.exports = {
    createAccount(req, res) {
        User.findOne()
            .sort('_oid')
            .exec(function(err, post) {
                const Accounts = new User({
                    _oid: User.findOne()
                        .sort('_oid')
                        .exec(function(err, post) {
                            return post._oid
                        }),
                    name: req.body.name
                })

                console.log(Accounts)
                Accounts.save()
                    .then(data => {
                        res.send(data)
                    })
                    .catch(err => {
                        res.status(500).send({
                            message:
                                err.message ||
                                'An error occurred while creating the Account.'
                        })
                    })
            })
    }
}
