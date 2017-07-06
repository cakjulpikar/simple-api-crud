var restaurantModel = require('../models/restaurants')
var ObjectId = require('mongodb').ObjectId

var createRestaurant = function (req,res) {
  restaurantModel.create({
    name : req.body.name,
    owner : req.body.owner,
    address : req.body.address
  }, function (err,result) {
    if (err) {
      res.status(500).send(err)
    } else {
      res.send(result)
    }
  })
}

var getAll = function (req,res) {
  restaurantModel.find({}, function (err,result) {
    if (err) {
      res.status(500).send(err)
    } else {
      res.send(result)
    }
  })
}

var getOne = function (req,res) {
  restaurantModel.findOne({
    _id : ObjectId(req.params.id)
  }, function (err, result) {
    if (err) {
      res.status(500).send(err)
    } else {
      res.send(result)
    }
  })
}

var updateRestaurant = function (req,res) {
  restaurantModel.findOne({
    _id : ObjectId(req.params.id)
  }, function (err,resultFind) {
    if (err) {
      res.status(500).send(err)
    } else {
      resultFind.name = req.body.name || resultFind.name
      resultFind.owner = req.body.owner || resultFind.owner
      resultFind.address = req.body.address || resultFind.address
      resultFind.save(function (err) {
        if (err) {
          res.status(500).send(err)
        } else {
          res.send({msg : `Restaurant with id ${req.params.id} updated`})
        }
      })
    }
  })
}

var deleteOne = function (req,res) {
  restaurantModel.deleteOne({
    _id : ObjectId(req.params.id)
  }, function (err) {
    if (err) {
      res.status(500).send(err)
    } else {
      res.send({msg: `Restaurant with id ${req.params.id} deleted`})
    }
  })
}

module.exports = {
  createRestaurant,
  getAll,
  getOne,
  deleteOne,
  updateRestaurant
};
