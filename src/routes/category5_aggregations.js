const express = require('express');
const router = express.Router();
const controller = require('../controllers/category5_aggregations');

// User Statistics Routes (APIs 51-53)
router.get('/stats/users/count', controller.getTotalUsersCount);
router.get('/stats/users/count-by-role', controller.getUserCountByRole);
router.get('/stats/users/count-by-status', controller.getUserCountByStatus);

// Restaurant Statistics Routes (APIs 54-59)
router.get('/stats/restaurants/count', controller.getTotalRestaurantsCount);
router.get('/stats/restaurants/count-by-city', controller.getRestaurantCountByCity);
router.get('/stats/restaurants/avg-rating', controller.getAverageRestaurantRating);
router.get('/stats/restaurants/:id/avg-rating', controller.getRestaurantAverageRating);
router.get('/stats/restaurants/max-price', controller.getMaxRestaurantPrice);
router.get('/stats/restaurants/min-price', controller.getMinRestaurantPrice);

// Menu Item Statistics Routes (APIs 60-65)
router.get('/stats/menu-items/count', controller.getTotalMenuItemsCount);
router.get('/stats/menu-items/restaurant/:id/count', controller.getRestaurantMenuItemCount);
router.get('/stats/menu-items/avg-price', controller.getAverageMenuItemPrice);
router.get('/stats/menu-items/restaurant/:id/avg-price', controller.getRestaurantAvgMenuPrice);
router.get('/stats/menu-items/max-price', controller.getMaxMenuItemPrice);
router.get('/stats/menu-items/min-price', controller.getMinMenuItemPrice);

// Order Statistics Routes (APIs 66-74)
router.get('/stats/orders/count', controller.getTotalOrdersCount);
router.get('/stats/orders/user/:userId/count', controller.getUserOrderCount);
router.get('/stats/orders/restaurant/:id/count', controller.getRestaurantOrderCount);
router.get('/stats/orders/total-revenue', controller.getTotalRevenue);
router.get('/stats/orders/restaurant/:id/revenue', controller.getRestaurantRevenue);
router.get('/stats/orders/avg-order-value', controller.getAverageOrderValue);
router.get('/stats/orders/user/:userId/avg-order', controller.getUserAvgOrderValue);
router.get('/stats/orders/max-order', controller.getMaxOrderValue);
router.get('/stats/orders/min-order', controller.getMinOrderValue);

// Review Statistics Routes (APIs 75-77)
router.get('/stats/reviews/count', controller.getTotalReviewsCount);
router.get('/stats/reviews/restaurant/:id/count', controller.getRestaurantReviewCount);
router.get('/stats/reviews/avg-rating', controller.getOverallAverageRating);

module.exports = router;