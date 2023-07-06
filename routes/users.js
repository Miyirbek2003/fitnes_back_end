const addUser = require('../controllers/addUser')
const deleteUser = require('../controllers/deleteUser')
const editUser = require('../controllers/editUser')
const getOnlyUser = require('../controllers/getOnlyUser')
const getUsers = require('../controllers/getUsers')
const getReport = require('../controllers/report')
const route = require('express').Router()

route.post('/adduser', (req, res) => {
    addUser(req, res)
})

route.get('/', (req, res) => {
    getUsers(req, res)
})

route.post('/report', (req, res) => {
    getReport(req, res)
})

route.delete('/deleteuser/:id', (req, res) => {
    deleteUser(req, res)
})

route.put('/edituser/:id', (req, res) => {
    editUser(req, res)
})

route.get('/getonlyuser/:id', (req, res) => {
    getOnlyUser(req, res)
})
module.exports = route