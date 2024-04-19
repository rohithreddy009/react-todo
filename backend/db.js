const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://mongodbpractice:jaiBALAYYA@cluster0.pvtjavj.mongodb.net/todo-app")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}