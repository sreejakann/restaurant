const express = require('express');
var router = express.Router();

console.log('test in controller');
var Signup = require('../routes/signup');
router.post('/signup', Signup.postUser);

module.exports = router;