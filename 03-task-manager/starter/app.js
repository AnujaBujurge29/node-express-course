const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
const notFound = require('./middleware/not-found')
const errorHandleMiddleware = require('./middleware/error-handler')
require('dotenv').config()
const port = process.env.PORT || 3000

//Middleware
app.use(express.static('./public'))
app.use(express.json())

// Routes
app.use('/api/v1/tasks', tasks)

app.use(notFound)
app.use(errorHandleMiddleware)

// app.get('/api/v1/tasks')
// app.post('/api/v1/tasks')
// app.get('/api/v1/tasks/:id')
// app.patch('/api/v1/tasks/:id')
// app.delete('/api/v1/tasks/:id')

const start = async () => {
    try {
        await connectDB(process.env.Mongo_URL)
        app.listen(port, console.log(`Server is listening at port ${port}`))
    }
    catch (err) { console.log(err); }
}

start()