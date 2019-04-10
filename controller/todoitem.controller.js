const todoService = require('../services/todoitem.service');

module.exports = {
    getItemById(req, res, next) {
        todoService.getItemById(req.params.id)
            .then(item => item ? res.json(item) : res.sendStatus(404))
            .catch(err => next(err));
    },
    getAllItems(req, res, next) {
        todoService.getAllItems()
            .then(items => items ? res.json(items) : res.sendStatus(404))
            .catch(err => next(err));
    },
    addItem(req, res, next) {
        todoService.addItem(req.body)
            .then(item => item ? res.json(item) : res.sendStatus(404))
            .catch(err => next(err));
    },
    updateItem(req, res, next) {
        todoService.updateItem(req.params.id, req.body)
            .then(item => item ? res.json(item) : res.sendStatus(404))
            .catch(err => next(err));
    },
    deleteItem(req, res, next) {
        todoService.deleteItem(req.params.id)
            .then(item => item ? res.json(item) : res.sendStatus(404))
            .catch(err => next(err));
    }
 };