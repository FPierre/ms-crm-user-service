const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    maxLength: 255,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    maxLength: 255,
    trim: true
  },
  password: {
    type: String,
    maxLength: 255,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
})

const User = mongoose.model('User', userSchema)

module.exports = User
