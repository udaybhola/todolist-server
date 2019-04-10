const db = require('../_helpers/db');
const TodoItem = db.TodoItem;

module.exports = {
    async getItemById(id) {
        return await TodoItem.findById(id);
    },
    async getAllItems() {
        return await TodoItem.find();
    },
    async addItem(item) {
        var newItem = new TodoItem(item);
        return await newItem.save();
    },
    async updateItem(id, item) {
        return await TodoItem.findOneAndUpdate(
            { _id: id },
            item,
            { new: true }
        );
    },
    async deleteItem(id) {
        return await TodoItem.findByIdAndRemove(id);
    }
}