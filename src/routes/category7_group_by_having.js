const express = require('express');
const router = express.Router();
const controller = require('../controllers/category7_group_by_having');

// Filtered Group Analytics Routes (APIs 100-110)
router.get('/analytics/restaurants/popular-by-city', controller.getPopularRestaurantsByCity);
router.get('/analytics/restaurants/high-rated-cities', controller.getHighRatedCities);
router.get('/analytics/restaurants/cuisines-by-popularity', controller.getPopularCuisines);
router.get('/analytics/users/active-users-by-role', controller.getActiveUsersByRole);
router.get('/analytics/orders/frequent-customers', controller.getFrequentCustomers);
router.get('/analytics/orders/high-value-customers', controller.getHighValueCustomers);
router.get('/analytics/orders/top-restaurants', controller.getTopRestaurantsByOrders);
router.get('/analytics/orders/high-revenue-restaurants', controller.getHighRevenueRestaurants);
router.get('/analytics/menu-items/popular-categories', controller.getPopularCategories);
router.get('/analytics/reviews/restaurants-with-min-reviews', controller.getRestaurantsWithMinReviews);
router.get('/analytics/reviews/highly-reviewed-restaurants', controller.getHighlyReviewedRestaurants);

module.exports = router;