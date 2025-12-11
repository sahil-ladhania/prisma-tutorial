const express = require('express');
const router = express.Router();
const controller = require('../controllers/category23_business_logic');

// Advanced Business Queries Routes (APIs 235-242)
router.get('/recommendations/restaurants', controller.getRestaurantRecommendations);
router.get('/recommendations/menu-items/:restaurantId', controller.getMenuItemRecommendations);
router.get('/analytics/restaurants/performance-score', controller.getRestaurantPerformanceScore);
router.get('/analytics/peak-hours', controller.getPeakOrderHours);
router.get('/analytics/customer-lifetime-value', controller.getCustomerLifetimeValue);
router.get('/analytics/churn-risk-users', controller.getChurnRiskUsers);
router.get('/analytics/repeat-customers', controller.getRepeatCustomers);
router.get('/analytics/restaurants/competitor-analysis', controller.getCompetitorAnalysis);

module.exports = router;