const express = require('express');
const router = express.Router();
const controller = require('../controllers/category19_transactions');

// Complex Operations Requiring Transactions Routes (APIs 216-220)
router.post('/orders/place-order', controller.placeOrderTransaction);
router.delete('/restaurants/:id/cascade', controller.deleteRestaurantCascade);
router.put('/orders/:id/cancel', controller.cancelOrderTransaction);
router.post('/users/register', controller.registerUserTransaction);
router.put('/orders/:id/complete', controller.completeOrderTransaction);

module.exports = router;