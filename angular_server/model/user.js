var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
  name: {type : String, required: true} ,
  email: {type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
});

var User = mongoose.model('user', userSchema);

module.exports = User;