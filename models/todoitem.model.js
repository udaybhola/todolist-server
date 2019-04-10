const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TodoItemSchema = new Schema({
    userId: Number,
    title: String,
    completed: Boolean
});

module.exports = mongoose.model('TodoItem', TodoItemSchema);