const express = require('express');
const router = express.Router();
const controller = require('../controllers/category10_nested_joins');

// Deep Relationship Queries Routes (APIs 143-146)
router.get('/analytics/orders/complete-chain', controller.getOrdersCompleteChain);
router.get('/analytics/restaurants/orders-full-chain', controller.getRestaurantOrdersFullChain);
router.get('/analytics/users/activity-full-chain', controller.getUserActivityFullChain);
router.get('/analytics/reviews/complete-context', controller.getReviewsCompleteContext);

module.exports = router;