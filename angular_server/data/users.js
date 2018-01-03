var mongoose = require('mongoose');
var User = require('../model/user');
const bcrypt = require('bcryptjs');


module.exports = {
    
    addUser : function(newUser, callback){
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) throw err;
            newUser.password = hash;
            newUser.save(callback);
          });
        });
    }
}