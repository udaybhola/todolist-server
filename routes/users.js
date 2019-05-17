var express = require('express');
var router = express.Router();
const userController = require('../controller/user.controller');

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  userController.getAllUsers(req, res, next);
});

router.get('/:id', function(req, res, next){
  userController.getUserById(req, res, next);
})

router.post('/authenticate', (req, res, next) => {
  userController.authenticate(req, res, next);
})

router.post('/register', (req, res, next) => {
  userController.register(req, res, next);
});

router.put('/:id', (req, res, next) => {
  userController.updateUser(req, res, next);
})

router.delete('/:id', (req, res, next) => {
  userController.deleteUser(req, res, next);
})

module.exports = router;
