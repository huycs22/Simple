const express = require('express')
const router = express.Router()
const accountModel = require('../models/account')
const checkLogin = (req, res, next) => {
    const dangnhap = false
    if (dangnhap){
        next()
    } else {
        res.json('NOT LOGIN')
    }
}

router.get('/', (req, res) => {
    accountModel.find({})
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.status(500).json("ERROR IN GET ACCOUNT")
    })
})

router.post('/', (req, res) => {
    var username = req.body.username
    var password = req.body.password
    accountModel.create({
        username: username,
        password: password
    })
    .then(data => {
        res.json("CREATE NEW ACCOUNT")
    })
    .catch(err => {
        res.status(500).json("ERROR IN POST ACCOUNT")
    })
})

router.put('/:id', (req, res) => {
    var id = req.params.id
    var newPassword = req.body.newPassword
    accountModel.findByIdAndUpdate(id, {
        password: newPassword
    })
    .then(data => {
        res.json("UPDATE SUCCESFULLY")
    })
    .catch(err => {
        res.status(500).json("ERROR IN PUT ACCOUNT")
    })
})

router.delete('/:id', (req, res) => {
    var id = req.params.id
    accountModel.deleteOne({
        _id: id
    })
    .then(data => {
        res.json("DELETE SUCCESSFULLY")
    })
    .catch(err => {
        res.status(500).json("ERROR IN DELETE ACCOUNT")
    })
})

router.post('/register', (req, res) => {
    var username = req.body.username
    var password = req.body.password

    accountModel.findOne({
        username: username
    })
    .then(data => {
        if (data){
            res.json("ALREADY EXISTED")
        } else {
            accountModel.create({
                username: username,
                password: password
            })
            .then(data => {
                res.json('SUCCESS')
            })
        }
    })
    .catch(data => {
        res.status(500).json('FAILED')
    })
    console.log(username, password)
})

router.post('/login', (req, res) => {
    var username = req.body.username
    var password = req.body.password

    accountModel.findOne({
        username: username,
        password: password
    })
    .then(data => {
        if (data) {
            console.log(data)
            res.json("LOGIN SUCCESS")
        } else {
            res.json("ACCOUNT NOT FOUND")
        }
    })
    .catch(data => {
        res.status(500).json("FAILED")
    })
})

module.exports = router