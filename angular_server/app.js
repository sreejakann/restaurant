var express = require('express'),
app = express();
var mongoose = require('mongoose');
const config = require('./config/database');

// Connect to mongoDB
mongoose.connect(config.database, { useMongoClient: true });
mongoose.connection.on('connected', function(req,res) {
  console.log('connected to mongodb ' + config.database);
});

app.listen(3000, function(){
  console.log('App is now listening');
});
module.exports = app;



