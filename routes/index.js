var express = require('express');
var router = express.Router();
var cors = require('cors');
var todoItemController = require('../controller/todoItemController');
/* GET home page. */




router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/todoItem/:id',(req,res) => {
  todoItemController.getItem(req,res);
})

router.get('/todoItem',(req, res) => {
  todoItemController.getAllItem(req, res);
})

router.post('/todoItem', (req,res) => {
  todoItemController.addItem(req,res);
})

router.put('/todoItem/:id', (req,res) => {
  todoItemController.updateItem(req,res);
})

router.delete('/todoItem/:id',(req,res,next) => {
  todoItemController.deleteItem(req,res);
})

module.exports = router;
