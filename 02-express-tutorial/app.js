const express = require('express');
const app = express();

const peopleRouter = require('./routes/people')
const productRouter = require('./routes/products')
const authRouter = require('./routes/auth')
// Set up the port to listen on
const PORT = process.env.PORT || 3000;
console.log('Express Tutorial')

// Middleware function to log method, url, and current time


const logger = (req, res, next) => {
    const method = req.method
    const url = req.url
    const timeYear = new Date().getFullYear()
    const timeMonth = new Date().getMonth()
    console.log(`Method: ${method},\nUrl: ${url},\nYear: ${timeYear},\nMonth: ${timeMonth}`)
    next()
}
// static files from the 'public' directory
app.use(express.static('./methods-public'));

// Middleware
app.use(express.urlencoded({ extended: false }));

//Parse request body into JSON
app.use(express.json());


// Logging middleware called via app.use() statement for all paths
app.use(logger);

// Endpoint to return all products

app.use('/api/v1/people', peopleRouter)
app.use('/api/v1/products', productRouter)
app.use('/login', authRouter)



// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});