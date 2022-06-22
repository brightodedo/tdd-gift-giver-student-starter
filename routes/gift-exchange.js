const { json } = require('express');
const express = require('express');
const GiftExchange = require('../models/gift-exchange');
const { BadRequestError } = require('../utils/errors');
const router = express.Router()

router.use(express.json())
var bodyParser = require('body-parser')
router.use(bodyParser.json({ type: 'application/*+json' }))
router.post('/pairs', (req, res) => {
    try{
        let names = req.body.names;
       if (!Array.isArray(names)) {next(new BadRequestError("names must be an array"));}
       let pairs = GiftExchange.pairs(names)
       res.status(200).send(pairs)
    }catch(err){
        res.status(400)
        throw new BadRequestError("object does not contain names key")
    }
})

router.post("/traditional", async (req, res, next) => {
    try{
        let names = req.body.names;
       if (!Array.isArray(names)) {next(new BadRequestError("names must be an array"));}
       let traditional = GiftExchange.traditional(names)
       res.status(200).send(traditional)
    }catch(err){
        res.status(400)
        throw new BadRequestError("object does not contain names key")
    }
})

module.exports = router