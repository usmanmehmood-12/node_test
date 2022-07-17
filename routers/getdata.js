const Test = require('../modules/test.controller')
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    console.log('inside get')
    const result = Test.solution()
    res.status(200).json(result)
})

module.exports = router