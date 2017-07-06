var mongoose = require('mongoose')

var restaurantSchema = new mongoose.Schema({
  name : {
    type : String,
    required : true
  },
  owner : {
    type : String,
    required : true
  },
  address : {
    type : String,
    required : true
  }
}, {
  timestamps : true
})

var restaurantModel = mongoose.model('Restaurants', restaurantSchema)

module.exports = restaurantModel;
