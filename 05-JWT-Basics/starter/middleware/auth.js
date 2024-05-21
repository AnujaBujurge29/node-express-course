const jwt = require('jsonwebtoken')

// const CustomAPIError = require('../errors/custom-error')
const { UnAuthenticatedError } = require('../errors')
const authenticationMiddleware = async (req, res, next) => {
    // console.log(req.headers);
    const authHeader = req.headers.authorization
    // console.log(authHeader);
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new UnAuthenticatedError('No Token Provided')
    }
    const token = authHeader.split(' ')[1]
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const { id, username } = decoded
        req.user = { id, username }
        next()
        // console.log(decoded);
        // const luckyNumber = Math.floor(Math.random() * 100)
        // res.status(200).json({ msg: `Hello, ${decoded.username}`, secret: `Here us your data, your lucky number: ${luckyNumber}` })
    } catch (error) {
        throw new UnAuthenticatedError('Not authorised to access this route')
    }

}


module.exports = authenticationMiddleware
