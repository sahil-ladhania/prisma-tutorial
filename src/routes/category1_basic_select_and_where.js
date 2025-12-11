const express = require('express');
const router = express.Router();
const controller = require('../controllers/category1_basic_select_and_where');

// User Management Routes (APIs 1-6)
router.get('/users', controller.getAllUsers);
router.get('/users/:id', controller.getUserById);
router.get('/users/email/:email', controller.getUserByEmail);
router.get('/users/phone/:phone', controller.getUserByPhone);
router.get('/users/role/:role', controller.getUsersByRole);
router.get('/users/status/:status', controller.getUsersByStatus);

// Restaurant Queries Routes (APIs 7-13)
router.get('/restaurants', controller.getAllRestaurants);
router.get('/restaurants/:id', controller.getRestaurantById);
router.get('/restaurants/owner/:ownerId', controller.getRestaurantsByOwner);
router.get('/restaurants/city/:city', controller.getRestaurantsByCity);
router.get('/restaurants/cuisine/:cuisine', controller.getRestaurantsByCuisine);
router.get('/restaurants/status/:status', controller.getRestaurantsByStatus);
router.get('/restaurants/pure-veg', controller.getPureVegRestaurants);

// Menu Item Queries Routes (APIs 14-19)
router.get('/menu-items', controller.getAllMenuItems);
router.get('/menu-items/:id', controller.getMenuItemById);
router.get('/menu-items/restaurant/:restaurantId', controller.getMenuItemsByRestaurant);
router.get('/menu-items/category/:categoryId', controller.getMenuItemsByCategory);
router.get('/menu-items/available', controller.getAvailableMenuItems);
router.get('/menu-items/food-type/:type', controller.getMenuItemsByFoodType);

// Order Queries Routes (APIs 20-24)
router.get('/orders/:id', controller.getOrderById);
router.get('/orders/user/:userId', controller.getOrdersByUser);
router.get('/orders/restaurant/:restaurantId', controller.getOrdersByRestaurant);
router.get('/orders/status/:status', controller.getOrdersByStatus);
router.get('/orders/payment-status/:status', controller.getOrdersByPaymentStatus);

module.exports = router;