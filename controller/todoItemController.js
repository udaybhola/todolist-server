var mongoose = require("mongoose");
var TodoItem = require('../database/schema')


getItem = (req, res) => {
    TodoItem.findById(req.params.id, (error, item) => {
        if (error) res.send(error);
        res.json(item);
    })
}

getAllItem = (req, res) => {
    TodoItem.find({}, (error, item) => {
        if (error) res.send(error);
        res.json(item);
    });
}

addItem = (req, res) => {
    var newItem = new TodoItem(req.body);
    newItem.save((error, item) => {
        if (error) res.send(error);
        res.json(item);
    });
}

updateItem = (req, res) => {
    console.log("@@@@@@@@@@@@@@@",req.body);
    console.log("@@@@@@@@@@@@@@@",req.params.id);
    TodoItem.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true },
        (error, item) => {
            if (error) res.send(error)
            res.json(item);
        }
    )
}

deleteItem = (req, res) => {
    TodoItem.findByIdAndRemove(req.params.id,
        (error, item) => {
            if (error) res.send(error)
            else {
                res.json({ message: "Item deleted successfully" });
            }

        }
    )
}

module.exports = {
    getItem,
    getAllItem,
    addItem,
    updateItem,
    deleteItem
}