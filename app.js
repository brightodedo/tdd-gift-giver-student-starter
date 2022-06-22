const express = require("express")
const app = express()

//get the router app from routes folder at 'routes/gift-exchange.js
const router = require('./routes/gift-exchange')

var morgan = require('morgan')
app.use(morgan('tiny'))


app.use('/gift-exchange', router)
var bodyParser = require('body-parser')
const { NotFoundError } = require("./utils/errors")
// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))

//const cors = require("cors")
app.use(express.json())
//app.use(express.urlencoded({extended: true}))
//app.use(cors())

app.get('/', (req, res) => {
    res.status(200).send({ "ping": "pong" })
})

app.use((req, res, next) => {
    next(new NotFoundError("Page not Found"));
  })

app.use( (err, req, res, next) =>{
    let status = err.status ? err.status : 500
    let message = err.message ? err.message : "Something wen't wrong in the application"
    res.status(status).send({"error" : {"status" : status, "message" : message}})
})


module.exports = app