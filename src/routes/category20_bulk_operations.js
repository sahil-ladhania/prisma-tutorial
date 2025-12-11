const express = require('express');
const router = express.Router();
const controller = require('../controllers/category20_bulk_operations');

// Batch Operations Routes (APIs 221-225)
router.post('/menu-items/bulk', controller.bulkCreateMenuItems);
router.put('/menu-items/restaurant/:id/bulk-update', controller.bulkUpdateRestaurantMenu);
router.delete('/orders/bulk', controller.bulkDeleteOrders);
router.put('/restaurants/bulk-status-update', controller.bulkUpdateRestaurantStatus);
router.post('/addresses/bulk', controller.bulkCreateAddresses);

module.exports = router;