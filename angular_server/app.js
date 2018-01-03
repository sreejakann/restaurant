var express = require('express'),
app = express();
var mongoose = require('mongoose');
const config = require('./config/database');

//var router = express.Router();

// Connect to mongoDB
mongoose.connect(config.database, { useMongoClient: true });
mongoose.connection.on('connected', function(req,res) {
  console.log('connected to mongodb ' + config.database);
});

//signup
const userController = require('./controller/user_controller');
console.log('TSt!');
const bp = require('body-parser');
app.use(bp.json());

console.log('TStttt!');

app.use('/users', userController);

console.log('TStttt!');


app.listen(3000, function(){
  console.log('App is now listening');
});
module.exports = app;



