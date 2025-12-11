const express = require('express');
const router = express.Router();
const controller = require('../controllers/category8_single_joins');

// User with Related Data Routes (APIs 111-114)
router.get('/users/:id/with-addresses', controller.getUserWithAddresses);
router.get('/users/:id/with-orders', controller.getUserWithOrders);
router.get('/users/:id/with-reviews', controller.getUserWithReviews);
router.get('/users/:id/with-favorites', controller.getUserWithFavoriteRestaurants);

// Restaurant with Related Data Routes (APIs 115-118)
router.get('/restaurants/:id/with-menu', controller.getRestaurantWithMenu);
router.get('/restaurants/:id/with-orders', controller.getRestaurantWithOrders);
router.get('/restaurants/:id/with-reviews', controller.getRestaurantWithReviews);
router.get('/restaurants/:id/with-owner', controller.getRestaurantWithOwner);

// Order with Related Data Routes (APIs 119-123)
router.get('/orders/:id/with-items', controller.getOrderWithItems);
router.get('/orders/:id/with-customer', controller.getOrderWithCustomer);
router.get('/orders/:id/with-restaurant', controller.getOrderWithRestaurant);
router.get('/orders/:id/with-delivery-partner', controller.getOrderWithDeliveryPartner);
router.get('/orders/:id/with-address', controller.getOrderWithAddress);

// Menu Item with Related Data Routes (APIs 124-126)
router.get('/menu-items/:id/with-restaurant', controller.getMenuItemWithRestaurant);
router.get('/menu-items/:id/with-category', controller.getMenuItemWithCategory);
router.get('/menu-items/:id/with-reviews', controller.getMenuItemWithReviews);

// Review with Related Data Routes (APIs 127-129)
router.get('/reviews/:id/with-user', controller.getReviewWithUser);
router.get('/reviews/:id/with-restaurant', controller.getReviewWithRestaurant);
router.get('/reviews/:id/with-order', controller.getReviewWithOrder);

module.exports = router;