const Test = require('../modules/test.controller')
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    console.log('inside get')
    const result = Test.solution()
    res.status(200).json(result)
})
router.get('/test', (req, res) => {
    console.log('inside get')
    res.send('It worked!')
})

module.exports = router
