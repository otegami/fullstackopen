const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const schema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    unique: true,
    minLength: 5
  },
  phone: {
    type: String,
    minLength: 5
  },
  street: {
    type: String,
    require: true,
    minLength: 5
  },
  city: {
    type: String,
    require: true,
    minLength: 3
  }
})

schema.plugin(uniqueValidator)
module.exports = mongoose.model('Person', schema)
