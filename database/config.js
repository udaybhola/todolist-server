var mongoose = require('mongoose');

var mongoDB = 'mongodb://127.0.0.1/TodoList';

mongoose.connect(mongoDB, {useNewUrlParser: true});

var db = mongoose.connection;

db.on('error',console.error.bind(console,'MongoDB connection error'));
db.once('open', function() {
    console.log("database connected");
  })
module.exports = mongoose