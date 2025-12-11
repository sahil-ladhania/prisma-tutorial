const express = require('express');
const router = express.Router();
const controller = require('../controllers/category18_crud');

// Create Operations Routes (APIs 194-201)
router.post('/users', controller.createUser);
router.post('/restaurants', controller.createRestaurant);
router.post('/menu-items', controller.createMenuItem);
router.post('/orders', controller.createOrder);
router.post('/order-items', controller.createOrderItem);
router.post('/addresses', controller.createAddress);
router.post('/reviews', controller.createReview);
router.post('/favorites', controller.addFavoriteRestaurant);

// Update Operations Routes (APIs 202-208)
router.put('/users/:id', controller.updateUser);
router.put('/restaurants/:id', controller.updateRestaurant);
router.put('/menu-items/:id', controller.updateMenuItem);
router.put('/orders/:id/status', controller.updateOrderStatus);
router.put('/orders/:id/assign-delivery', controller.assignDeliveryPartner);
router.put('/restaurants/:id/rating', controller.updateRestaurantRating);
router.put('/menu-items/:id/availability', controller.toggleMenuItemAvailability);

// Delete Operations Routes (APIs 209-215)
router.delete('/users/:id', controller.deleteUser);
router.delete('/restaurants/:id', controller.deleteRestaurant);
router.delete('/menu-items/:id', controller.deleteMenuItem);
router.delete('/orders/:id', controller.deleteOrder);
router.delete('/addresses/:id', controller.deleteAddress);
router.delete('/reviews/:id', controller.deleteReview);
router.delete('/favorites', controller.removeFavoriteRestaurant);

module.exports = router;