const express = require('express');
const router = express.Router();
const controller = require('../controllers/category4_pagination');

// Paginated Lists Routes (APIs 46-50)
router.get('/restaurants/paginated', controller.getPaginatedRestaurants);
router.get('/menu-items/paginated', controller.getPaginatedMenuItems);
router.get('/orders/paginated', controller.getPaginatedOrders);
router.get('/users/paginated', controller.getPaginatedUsers);
router.get('/reviews/paginated', controller.getPaginatedReviews);

module.exports = router;