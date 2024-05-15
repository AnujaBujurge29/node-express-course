require('dotenv').config()
// Asyanc Errors
require('express-async-errors')

const express = require('express')
const app = express()

const connectDB = require('./db/connect')
const productRouter = require('./routes/products')

const errorMiddleware = require('./middleware/error-handler')
const notFound = require('./middleware/not-found')

//middleware
app.use(express.json())

//Routes
app.get('./', (req, res) => {
    res.send('<h1>Store API</h1><a href="/api/v1/products" >Products Route</a > ')
})

app.use('/api/v1/products', productRouter)
// Products Route

//

app.use(notFound)
app.use(errorMiddleware)

const PORT = process.env.PORT || 3000
const start = async () => {
    try {
        // connect db
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, console.log(`Server listining to PORT ${PORT}...`))
    } catch (error) {
        console.log(error);
    }
}

start()