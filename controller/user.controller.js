const userService = require('../services/user.service');

module.exports = {
    register(req, res, next){
        userService.create(req.body)
        .then(user => user ? res.json({}) : res.sendStatus(404))
        .catch(err => {
            console.log("In register catch block")
            next(err);
        });
    },
    getAllUsers(req, res, next){
        userService.getAllUsers()
        .then(users => users ? res.json(users) : res.sendStatus(404))
        .catch(err => next(err));
    },
    updateUser(req, res, next){
        userService.updateUser(req.params.id, req.body)
        .then(user => user ? res.json({}) : res.sendStatus(404))
        .catch(err => next(err));
    }
}