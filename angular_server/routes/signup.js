var UserUtil = require('../data/users');
var User = require('../model/user');
const jwt = require('jsonwebtoken');

module.exports.postUser = function(req, res){
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
    });
    UserUtil.addUser(newUser, function(err, user) {
        if (err) {
            res.status(400);
            res.json({success: false, msg: 'Failed to add user, user already exists'});
        } else {
            res.status(200);
            res.json({
              success: true,
              user: {
                id: user._id,
                name: user.name,
                username: user.username,
                email: user.email,
              }
            });
        }
    });
};