const express = require('express')
const router = express.Router()
const { getAllTasks, createTask, getTask, updateTask, deleteTask } = require('../controllers/tasks')

// Get all the tasks
router.route('/').get(getAllTasks)
// Create a new Task
router.route('/').post(createTask)
// Atternate Method
// router.route('/').get(getAllTasks).post(createTask)

// Get Single task
router.route('/:id').get(getTask)
// Update Task
router.route('/:id').patch(updateTask)
//delete Taks
router.route('/:id').delete(deleteTask)
// Atternate Method
// router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)
module.exports = router