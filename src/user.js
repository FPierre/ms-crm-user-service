const mongoose = require('mongoose')
// https://docs.mongodb.com/manual/reference/method/cursor.skip/
const mongoosePaginate = require('mongoose-paginate')

const userSchema = new mongoose.Schema({
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
  email: {
    type: String,
    required: true,
    unique: true,
    maxlength: 255,
    trim: true
  },
  password: {
    type: String,
    maxLength: 255,
    required: true
  },
  access: {
    type: String,
    required: true,
    enum: ['guest', 'advisor', 'commercial', 'administrator'],
    default: 'guest'
  },
  crmStatus: {
    type: String,
    required: true,
    enum: ['pending', 'inactive', 'active'],
    default: 'pending'
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

userSchema.plugin(mongoosePaginate)

const User = mongoose.model('User', userSchema)

module.exports = User
