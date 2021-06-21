const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const shcema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    unique: true,
    minlength: 5
  },
  phone: {
    phone: String,
    minlength: 5
  },
  street: {
    type: String,
    require: true,
    minlength: 5
  },
  city: {
    type: String,
    require: true,
    minlength: 3
  }
})

shcema.plugin(uniqueValidator)
module.exports = mongoose.model('Person', this.schema)