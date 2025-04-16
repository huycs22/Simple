const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/mydatabase', {
   
})

const Schema = mongoose.Schema
const AccountSchema = new Schema({
    username: String,
    password: String
}, {
    collection: 'account'
})

const accountModel = mongoose.model('account', AccountSchema)

module.exports = accountModel