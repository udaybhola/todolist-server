const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TodoItemSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User'},
    title: { type: String, required: true},
    completed: { type: boolean, default: false}
});

module.exports = mongoose.model('TodoItem', TodoItemSchema);