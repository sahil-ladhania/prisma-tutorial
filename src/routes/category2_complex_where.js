const express = require('express');
const router = express.Router();
const controller = require('../controllers/category2_complex_where');

// Advanced Restaurant Search Routes (APIs 25-28)
router.get('/restaurants/filter', controller.filterRestaurants);
router.get('/restaurants/price-range', controller.getRestaurantsByPriceRange);
router.get('/restaurants/open-now', controller.getOpenRestaurants);
router.get('/restaurants/delivery-time', controller.getRestaurantsByDeliveryTime);

// Advanced Menu Item Search Routes (APIs 29-32)
router.get('/menu-items/price-range', controller.getMenuItemsByPriceRange);
router.get('/menu-items/filter', controller.filterMenuItems);
router.get('/menu-items/discounted', controller.getDiscountedMenuItems);
router.get('/menu-items/low-calorie', controller.getLowCalorieMenuItems);

// Advanced Order Filters Routes (APIs 33-36)
router.get('/orders/date-range', controller.getOrdersByDateRange);
router.get('/orders/user-status', controller.getUserOrdersByStatus);
router.get('/orders/amount-range', controller.getOrdersByAmountRange);
router.get('/orders/payment-method', controller.getOrdersByPaymentMethod);

module.exports = router;