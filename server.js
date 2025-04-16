const express = require('express')
const path = require('path')
const app = express()
const port = 3000
const registerRouter = require('./routers/account.js')
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/public', express.static(path.join(__dirname, '/public')))

app.use('/api/account', registerRouter)
app.get('/', (req, res) => {
    var filePath = path.join(__dirname, 'index.html')
    res.sendFile(filePath)
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})