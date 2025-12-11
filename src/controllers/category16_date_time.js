const service = require('../services/category16_date_time');

// Time-Based Queries (APIs 181-187)
exports.getTodayOrders = async (req, res) => {
    try {
        const data = await service.getTodayOrdersService();
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getThisWeekOrders = async (req, res) => {
    try {
        const data = await service.getThisWeekOrdersService();
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getThisMonthOrders = async (req, res) => {
    try {
        const data = await service.getThisMonthOrdersService();
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getOrdersLast30Days = async (req, res) => {
    try {
        const data = await service.getOrdersLast30DaysService();
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getRecentRegistrations = async (req, res) => {
    try {
        const { days } = req.query;
        const data = await service.getRecentRegistrationsService(parseInt(days));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getOrdersHourlyDistribution = async (req, res) => {
    try {
        const { date } = req.query;
        const data = await service.getOrdersHourlyDistributionService(date);
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getMonthlyOrderTrend = async (req, res) => {
    try {
        const { year } = req.query;
        const data = await service.getMonthlyOrderTrendService(parseInt(year));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};