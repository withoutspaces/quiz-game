const mongoose = require('../database')

const questionsSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
    unique: true
  },
  correct_awnser: {
    type: String,
    required: true
  },
  incorrect_awnsers: [String],
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const Questions = mongoose.model('Questions', questionsSchema)

module.exports = Questions
