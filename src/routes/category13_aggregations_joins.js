const express = require('express');
const router = express.Router();
const controller = require('../controllers/category13_aggregations_joins');

// Cross-Table Analytics Routes (APIs 161-168)
router.get('/analytics/users/:id/total-spending', controller.getUserTotalSpending);
router.get('/analytics/users/:id/order-count', controller.getUserOrderCountWithDetails);
router.get('/analytics/restaurants/:id/total-revenue', controller.getRestaurantTotalRevenue);
router.get('/analytics/restaurants/:id/avg-order-value', controller.getRestaurantAvgOrderValue);
router.get('/analytics/restaurants/:id/menu-stats', controller.getRestaurantMenuStats);
router.get('/analytics/menu-items/:id/order-count', controller.getMenuItemOrderCount);
router.get('/analytics/menu-items/:id/total-revenue', controller.getMenuItemTotalRevenue);
router.get('/analytics/delivery-partners/:id/stats', controller.getDeliveryPartnerStats);

module.exports = router;