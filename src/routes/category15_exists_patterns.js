const express = require('express');
const router = express.Router();
const controller = require('../controllers/category15_exists_patterns');

// Existence Checks Routes (APIs 175-180)
router.get('/data/users/with-orders', controller.getUsersWhoHaveOrdered);
router.get('/data/users/without-orders', controller.getUsersWhoHaventOrdered);
router.get('/data/restaurants/with-orders', controller.getRestaurantsWithOrders);
router.get('/data/restaurants/without-orders', controller.getRestaurantsWithoutOrders);
router.get('/data/menu-items/never-ordered', controller.getMenuItemsNeverOrdered);
router.get('/data/users/with-reviews', controller.getUsersWhoReviewed);

module.exports = router;