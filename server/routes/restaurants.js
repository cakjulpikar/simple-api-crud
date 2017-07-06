var express = require('express');
var router = express.Router();
var restaurantControllers = require('../controllers/restaurantControllers')

router.post('/', restaurantControllers.createRestaurant)
router.get('/', restaurantControllers.getAll)
router.get('/:id', restaurantControllers.getOne)
router.patch('/:id', restaurantControllers.updateRestaurant)
router.delete('/:id', restaurantControllers.deleteOne)

module.exports = router;
