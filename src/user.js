const mongoose = require('mongoose')

const Schema = mongoose.Schema
mongoose.Promise = global.Promise

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
  createdAt: Date,
  updatedAt: Date
})

userSchema.pre('save', next => {
  const currentDate = new Date()

  this.updatedAt = currentDate

  if (!this.createdAt) {
    this.createdAt = currentDate
  }

  next()
})

const User = mongoose.model('User', userSchema)

module.exports = User
