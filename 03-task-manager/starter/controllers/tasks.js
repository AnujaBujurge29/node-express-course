const Task = require('../models/tasks')
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')

// Get all the tasks
const getAllTasks = asyncWrapper(async (req, res) => {

    const tasks = await Task.find({})
    res.status(200).json({ tasks })
    // res.status(500).json({ msg: error })
})
// Create a new Task
const createTask = asyncWrapper(async (req, res) => {

    const task = await Task.create(req.body)
    res.status(201).json({ task })


})
// Get Single task
const getTask = asyncWrapper(async (req, res, next) => {

    const { id: tasksID } = req.params
    const task = await Task.findOne({ _id: tasksID })
    if (!task) {
        return next(createCustomError(`No Taks found with id: ${tasksID}`, 404))

    }
    res.status(200).json({ task })

})
// Update Task
const updateTask = asyncWrapper(async (req, res) => {

    const { id: tasksID } = req.params
    const task = await Task.findOneAndUpdate({ _id: tasksID }, req.body, {
        new: true,
        runValidators: true
    })
    if (!task) {
        return next(createCustomError(`No Taks found with id: ${tasksID}`, 404))
    }
    res.status(200).json({ task })


})
//delete Tasks
const deleteTask = asyncWrapper(async (req, res) => {

    const { id: tasksID } = req.params
    const task = await Task.findOneAndDelete({ _id: tasksID })
    if (!task) {
        return next(createCustomError(`No Taks found with id: ${tasksID}`, 404))
    }
    res.status(200).json({ task })

})
module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}