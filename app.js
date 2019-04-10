var createError = require('http-errors');
// var cors = require('cors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();
const port = process.env.PORT || '3000';
const errorHandler = require('./_helpers/error-handler');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
// app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With,X-Powered-By,Content-Type");
  if (req.method === 'OPTIONS') {
      res.status(200).end();
  } else {
      next();
  }
});

app.use('/todoItems', require('./routes/todoItem'));
app.use('/users', require('./routes/users'));
app.use(errorHandler);

app.listen(port,() => {
  console.log("Server Running on port ",port);
})

module.exports = app;
