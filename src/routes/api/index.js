const express = require('express')
const router = express.Router()

const user = require('./user.route')
router.use('/', user)

module.exports = router
