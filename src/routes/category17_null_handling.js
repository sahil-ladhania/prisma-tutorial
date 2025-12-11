const express = require('express');
const router = express.Router();
const controller = require('../controllers/category17_null_handling');

// NULL Checks Routes (APIs 188-193)
router.get('/menu-items/without-discount', controller.getMenuItemsWithoutDiscount);
router.get('/menu-items/with-discount', controller.getMenuItemsWithDiscount);
router.get('/orders/without-delivery-partner', controller.getOrdersWithoutDeliveryPartner);
router.get('/orders/pending-delivery-assignment', controller.getOrdersPendingDelivery);
router.get('/addresses/default', controller.getDefaultAddresses);
router.get('/reviews/without-comment', controller.getReviewsWithoutComment);

module.exports = router;