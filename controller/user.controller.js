const userService = require('../services/user.service');

module.exports = {
    authenticate(req, res, next){
        userService.authenticate(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({message: "Invalid username or password"}))
        .catch(err => next(err));
    },
    register(req, res, next){
        userService.create(req.body)
        .then(() => res.json({}))
        .catch(err => {
            console.log("In register catch block")
            next(err);
        });
    },
    getUserById(req, res, next){
        userService.getUserById(req.params.id)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err))
    },
    getAllUsers(req, res, next){
        userService.getAllUsers()
        .then(users => res.json(users))
        .catch(err => next(err));
    },
    updateUser(req, res, next){
        userService.updateUser(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
    },
    deleteUser(req, res, next){
        userService.deleteUser(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
    }
}