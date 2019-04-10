const mongoose = require('mongoose');
const config = require('../config.json');

mongoose.connect(process.env.MONGODB_URI || config.connectionString, { useCreateIndex: true, useNewUrlParser: true });

module.exports = {
    TodoItem: require('../models/todoitem.model'),
    User: require('../models/user.model')
}