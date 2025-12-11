const express = require('express');
const router = express.Router();
const controller = require('../controllers/category12_complex_filtering_joins');

// Advanced Search with Relationships Routes (APIs 154-160)
router.get('/search/restaurants/by-menu-item', controller.searchRestaurantsByMenuItem);
router.get('/search/restaurants/by-owner-name', controller.searchRestaurantsByOwner);
router.get('/search/users/by-city', controller.getUsersByCity);
router.get('/search/orders/by-menu-item', controller.searchOrdersByMenuItem);
router.get('/search/restaurants/high-rated-in-city', controller.getHighRatedRestaurantsInCity);
router.get('/search/users/ordered-from-restaurant', controller.getUsersWhoOrderedFrom);
router.get('/search/menu-items/by-restaurant-city', controller.getMenuItemsByRestaurantCity);

module.exports = router;