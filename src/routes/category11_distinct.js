const express = require('express');
const router = express.Router();
const controller = require('../controllers/category11_distinct');

// Unique Value Queries Routes (APIs 147-153)
router.get('/data/unique-cities', controller.getUniqueCities);
router.get('/data/unique-cuisines', controller.getUniqueCuisines);
router.get('/data/unique-food-types', controller.getUniqueFoodTypes);
router.get('/data/unique-payment-methods', controller.getUniquePaymentMethods);
router.get('/data/unique-order-statuses', controller.getUniqueOrderStatuses);
router.get('/data/restaurant/:id/unique-customers', controller.getRestaurantUniqueCustomers);
router.get('/data/user/:id/unique-restaurants', controller.getUserUniqueRestaurants);

module.exports = router;