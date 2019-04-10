var express = require('express');
var router = express.Router();
var todoItemController = require('../controller/todoitem.controller');
/* GET home page. */

router.get('/:id',(req,res) => {
  todoItemController.getItemById(req,res);
})

router.get('/',(req, res) => {
  todoItemController.getAllItems(req, res);
})

router.post('/', (req,res) => {
  todoItemController.addItem(req,res);
})

router.put('/:id', (req,res) => {
  todoItemController.updateItem(req,res);
})

router.delete('/:id',(req,res,next) => {
  todoItemController.deleteItem(req,res);
})

module.exports = router;
