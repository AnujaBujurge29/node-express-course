const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    Name: String,
    Completed: Boolean
})

module.exports = mongoose.model('Task', TaskSchema)