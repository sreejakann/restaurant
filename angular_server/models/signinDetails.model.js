var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var SigninDetails = new Schema({
  username: {
    type: string,
    trim: true,
    required: true
  },
  password: {
    type: string,
    trim: true,
    required: true
  },
  firstname: {
    type: string,
    trim: true,
    required: true
  },
  lastname: {
    type: string,
    trim: true,
    required: true
  }
});

SigninDetails.index({ username: 1, firstname: 1, lastname: 1 }, { unique: true });

mongoose.model('signinDetails', SigninDetails);
