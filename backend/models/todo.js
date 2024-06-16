const mongoose = require('mongoose');

const todoschema = new mongoose.Schema({name : String});

module.exports = mongoose.model('todo', todoschema);