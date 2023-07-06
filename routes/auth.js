const checkLog = require('../controllers/auth/login')

const route = require('express').Router()


route.post('/', (req, res) => {
    checkLog(req, res)
})


module.exports = route