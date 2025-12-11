const express = require('express');
const router = express.Router();
const controller = require('../controllers/category16_date_time');

// Time-Based Queries Routes (APIs 181-187)
router.get('/orders/today', controller.getTodayOrders);
router.get('/orders/this-week', controller.getThisWeekOrders);
router.get('/orders/this-month', controller.getThisMonthOrders);
router.get('/orders/last-30-days', controller.getOrdersLast30Days);
router.get('/users/recent-registrations', controller.getRecentRegistrations);
router.get('/analytics/orders/hourly-distribution', controller.getOrdersHourlyDistribution);
router.get('/analytics/orders/monthly-trend', controller.getMonthlyOrderTrend);

module.exports = router;