const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  password: { type: String, required: true },
  created_at: Date,
  updated_at: Date
})

userSchema.pre('save', next => {
  const currentDate = new Date()

  this.updated_at = currentDate

  if (!this.created_at) {
    this.created_at = currentDate
  }

  next()
})

const User = mongoose.model('User', userSchema)

module.exports = User
