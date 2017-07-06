var foodModel = require('../models/foods')
var ObjectId = require('mongodb').ObjectId

var createFood = function (req,res) {
  foodModel.create({
    name : req.body.name,
    price : req.body.price
  }, function (err,result) {
    if (err) {
      res.status(500).send(err)
    } else {
      res.send(result)
    }
  })
}

var getAll = function (req,res) {
  foodModel.find({}, function (err,result) {
    if (err) {
      res.status(500).send(err)
    } else {
      res.send(result)
    }
  })
}

var getOne = function (req,res) {
  foodModel.findOne({
    _id : ObjectId(req.params.id)
  }, function (err, result) {
    if (err) {
      res.status(500).send(err)
    } else {
      res.send(result)
    }
  })
}

var updateFood = function (req,res) {
  foodModel.findOne({
    _id : ObjectId(req.params.id)
  }, function (err,resultFind) {
    if (err) {
      res.status(500).send(err)
    } else {
      resultFind.name = req.body.name || resultFind.name
      resultFind.price = req.body.price || resultFind.price
      resultFind.save(function (err) {
        if (err) {
          res.status(500).send(err)
        } else {
          res.send({msg : `Food with id ${req.params.id} updated`})
        }
      })
    }
  })
}

var deleteOne = function (req,res) {
  foodModel.deleteOne({
    _id : ObjectId(req.params.id)
  }, function (err) {
    if (err) {
      res.status(500).send(err)
    } else {
      res.send({msg: `Food with id ${req.params.id} deleted`})
    }
  })
}

module.exports = {
  createFood,
  getAll,
  getOne,
  updateFood,
  deleteOne
};
