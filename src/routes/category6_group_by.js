const express = require('express');
const router = express.Router();
const controller = require('../controllers/category6_group_by');

// Grouped User Analytics Routes (APIs 78-80)
router.get('/analytics/users/group-by-role', controller.getUsersGroupedByRole);
router.get('/analytics/users/group-by-status', controller.getUsersGroupedByStatus);
router.get('/analytics/users/registrations-by-date', controller.getUserRegistrationsByDate);

// Grouped Restaurant Analytics Routes (APIs 81-85)
router.get('/analytics/restaurants/group-by-city', controller.getRestaurantsGroupedByCity);
router.get('/analytics/restaurants/group-by-cuisine', controller.getRestaurantsGroupedByCuisine);
router.get('/analytics/restaurants/group-by-status', controller.getRestaurantsGroupedByStatus);
router.get('/analytics/restaurants/avg-rating-by-city', controller.getAvgRatingByCity);
router.get('/analytics/restaurants/avg-price-by-cuisine', controller.getAvgPriceByCuisine);

// Grouped Menu Item Analytics Routes (APIs 86-89)
router.get('/analytics/menu-items/group-by-category', controller.getMenuItemsGroupedByCategory);
router.get('/analytics/menu-items/group-by-food-type', controller.getMenuItemsGroupedByFoodType);
router.get('/analytics/menu-items/avg-price-by-category', controller.getAvgPriceByCategory);
router.get('/analytics/menu-items/restaurant/:id/group-by-category', controller.getRestaurantMenuGrouped);

// Grouped Order Analytics Routes (APIs 90-96)
router.get('/analytics/orders/group-by-status', controller.getOrdersGroupedByStatus);
router.get('/analytics/orders/group-by-payment-method', controller.getOrdersGroupedByPaymentMethod);
router.get('/analytics/orders/daily-orders', controller.getDailyOrders);
router.get('/analytics/orders/daily-revenue', controller.getDailyRevenue);
router.get('/analytics/orders/restaurant-wise-orders', controller.getRestaurantWiseOrderCount);
router.get('/analytics/orders/restaurant-wise-revenue', controller.getRestaurantWiseRevenue);
router.get('/analytics/orders/user-wise-spending', controller.getUserWiseSpending);

// Grouped Review Analytics Routes (APIs 97-99)
router.get('/analytics/reviews/group-by-rating', controller.getReviewsGroupedByRating);
router.get('/analytics/reviews/restaurant-wise', controller.getRestaurantWiseReviews);
router.get('/analytics/reviews/group-by-type', controller.getReviewsGroupedByType);

module.exports = router;