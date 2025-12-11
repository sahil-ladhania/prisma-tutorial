const express = require('express');
const router = express.Router();
const controller = require('../controllers/category14_subqueries');

// Comparative Queries Routes (APIs 169-174)
router.get('/analytics/restaurants/above-avg-rating', controller.getRestaurantsAboveAvgRating);
router.get('/analytics/menu-items/above-avg-price', controller.getMenuItemsAboveAvgPrice);
router.get('/analytics/orders/above-avg-value', controller.getOrdersAboveAvgValue);
router.get('/analytics/users/top-spenders', controller.getTopSpenders);
router.get('/analytics/restaurants/most-ordered', controller.getMostOrderedRestaurants);
router.get('/analytics/menu-items/most-popular', controller.getMostPopularMenuItems);

module.exports = router;