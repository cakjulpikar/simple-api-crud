var express = require('express');
var router = express.Router();
var foodControllers = require('../controllers/foodControllers')

router.post('/', foodControllers.createFood)
router.get('/', foodControllers.getAll)
router.get('/:id', foodControllers.getOne)
router.patch('/:id', foodControllers.updateFood)
router.delete('/:id', foodControllers.deleteOne)

module.exports = router;
