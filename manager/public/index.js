const express = require('express');
const mongoose = require('mongoose');


var router = express.Router();

router.use('/user', require('./user'));

router.use('/currency', require('./currency'));

module.exports = router;
