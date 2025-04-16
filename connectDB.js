const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/Shop')

const Schema = mongoose.Schema
const account = new Schema({
    name: String,
    password: String
}, {
    collection: 'Account'
})

const accountModel = mongoose.model('account', account)

accountModel.find({
    name: 'skibidi'
})
.then(function(data){
    console.log('data', data)
})
.catch(function(err){
    console.log('err', err)
})