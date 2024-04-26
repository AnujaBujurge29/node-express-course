const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()
const port = 3000

//Middleware
app.use(express.json())

// Routes
app.get('/hello', (req, res) => {
    res.send('Task Manager App')
})

app.use('/api/v1/tasks', tasks)


// Get all the tasks
// app.get('/api/v1/tasks')

// Create a new Task
// app.post('/api/v1/tasks')

// Get Single task
// app.get('/api/v1/tasks/:id')

// Update Task
// app.patch('/api/v1/tasks/:id')

//delete Taks
// app.delete('/api/v1/tasks/:id')

const start = async () => {
    try {
        await connectDB(process.env.Mongo_URL)
        app.listen(port, console.log(`Server is listening at port ${port}`))
    }
    catch (err) { console.log(err); }
}

start()