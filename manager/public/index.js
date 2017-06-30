const express = require('express');
const mongoose = require('mongoose');


var router = express.Router();

router.use('/user', require('./user'));

module.exports = router;
