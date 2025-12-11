const express = require('express');
const router = express.Router();
const controller = require('../controllers/category3_sorting');

// Sorted Restaurant Lists Routes (APIs 37-40)
router.get('/restaurants/sorted-by-rating', controller.getRestaurantsSortedByRating);
router.get('/restaurants/sorted-by-price', controller.getRestaurantsSortedByPrice);
router.get('/restaurants/sorted-by-reviews', controller.getRestaurantsSortedByReviewCount);
router.get('/restaurants/sorted-by-delivery-time', controller.getRestaurantsSortedByDeliveryTime);

// Sorted Menu Items Routes (APIs 41-43)
router.get('/menu-items/sorted-by-price', controller.getMenuItemsSortedByPrice);
router.get('/menu-items/sorted-by-name', controller.getMenuItemsSortedByName);
router.get('/menu-items/restaurant/:restaurantId/sorted', controller.getRestaurantMenuSorted);

// Sorted Orders Routes (APIs 44-45)
router.get('/orders/sorted-by-date', controller.getOrdersSortedByDate);
router.get('/orders/sorted-by-amount', controller.getOrdersSortedByAmount);

module.exports = router;