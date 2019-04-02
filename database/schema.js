var mongoose = require('./config');

var Schema = mongoose.Schema;

var TodoItemSchema = new Schema({
    userId: Number,
    title: String,
    completed: Boolean
});

var TodoItem = mongoose.model('TodoItem', TodoItemSchema); 
// var item1 = new TodoItem({ name: 'Introduction to Mongoose', price: 10, quantity: 25 });
 
// // save model to database
// item1.save(function (err, book) {
//   if (err) return console.error(err);
//   console.log(book.name + " saved to bookstore collection.");
// });

module.exports = TodoItem