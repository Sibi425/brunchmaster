const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        _oid: Number,
        name: String
    },
    { collection: 'users' }
)

module.exports = mongoose.model('Users', userSchema)
