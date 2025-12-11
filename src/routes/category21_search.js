const express = require('express');
const router = express.Router();
const controller = require('../controllers/category21_search');

// Search Operations Routes (APIs 226-230)
router.get('/search/restaurants', controller.searchRestaurants);
router.get('/search/menu-items', controller.searchMenuItems);
router.get('/search/users', controller.searchUsers);
router.get('/search/restaurants/starts-with', controller.searchRestaurantsStartsWith);
router.get('/search/menu-items/contains', controller.searchMenuItemsContains);

module.exports = router;