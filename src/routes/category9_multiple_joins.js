const express = require('express');
const router = express.Router();
const controller = require('../controllers/category9_multiple_joins');

// Complex User Queries Routes (APIs 130-132)
router.get('/users/:id/complete-profile', controller.getUserCompleteProfile);
router.get('/users/:id/order-history-detailed', controller.getUserOrderHistoryDetailed);
router.get('/users/:id/review-history-detailed', controller.getUserReviewHistoryDetailed);

// Complex Restaurant Queries Routes (APIs 133-136)
router.get('/restaurants/:id/full-details', controller.getRestaurantFullDetails);
router.get('/restaurants/:id/menu-with-categories', controller.getRestaurantMenuWithCategories);
router.get('/restaurants/:id/orders-with-customers', controller.getRestaurantOrdersWithCustomers);
router.get('/restaurants/:id/reviews-with-users', controller.getRestaurantReviewsWithUsers);

// Complex Order Queries Routes (APIs 137-140)
router.get('/orders/:id/complete-details', controller.getOrderCompleteDetails);
router.get('/orders/:id/items-with-menu-details', controller.getOrderItemsWithMenuDetails);
router.get('/orders/user/:userId/with-restaurants', controller.getUserOrdersWithRestaurants);
router.get('/orders/restaurant/:id/with-customers-and-items', controller.getRestaurantOrdersComplete);

// Menu Item Complex Queries Routes (APIs 141-142)
router.get('/menu-items/:id/complete-details', controller.getMenuItemCompleteDetails);
router.get('/menu-items/restaurant/:id/with-all-details', controller.getRestaurantMenuComplete);

module.exports = router;