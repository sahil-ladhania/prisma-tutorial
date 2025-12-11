const express = require('express');
const router = express.Router();
const controller = require('../controllers/category22_conditional_logic');

// Conditional Calculations Routes (APIs 231-234)
router.get('/analytics/restaurants/price-category', controller.getRestaurantsByPriceCategory);
router.get('/analytics/orders/delivery-performance', controller.getDeliveryPerformance);
router.get('/analytics/menu-items/popularity-tier', controller.getMenuItemsByPopularity);
router.get('/analytics/users/customer-tier', controller.getUsersBySpendingTier);

module.exports = router;