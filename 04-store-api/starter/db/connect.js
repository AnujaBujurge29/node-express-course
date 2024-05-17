const mongoose = require('mongoose')

const connectDB = (MongoURL) => {
  return mongoose.connect(MongoURL)
}

module.exports = connectDB
