var mongoose = require('mongoose')

var foodSchema = new mongoose.Schema({
  name : {
    type : String,
    required : true
  },
  price : {
    type : Number,
    required : true
  }
}, {
  timestamps : true
})

var foodModel = mongoose.model('Foods', foodSchema)

module.exports = foodModel;
