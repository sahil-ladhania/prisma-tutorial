const service = require('../services/category13_aggregations_joins');

// Cross-Table Analytics (APIs 161-168)
exports.getUserTotalSpending = async (req, res) => {
    try {
        const data = await service.getUserTotalSpendingService(parseInt(req.params.id));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getUserOrderCountWithDetails = async (req, res) => {
    try {
        const data = await service.getUserOrderCountWithDetailsService(parseInt(req.params.id));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getRestaurantTotalRevenue = async (req, res) => {
    try {
        const data = await service.getRestaurantTotalRevenueService(parseInt(req.params.id));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getRestaurantAvgOrderValue = async (req, res) => {
    try {
        const data = await service.getRestaurantAvgOrderValueService(parseInt(req.params.id));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getRestaurantMenuStats = async (req, res) => {
    try {
        const data = await service.getRestaurantMenuStatsService(parseInt(req.params.id));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getMenuItemOrderCount = async (req, res) => {
    try {
        const data = await service.getMenuItemOrderCountService(parseInt(req.params.id));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getMenuItemTotalRevenue = async (req, res) => {
    try {
        const data = await service.getMenuItemTotalRevenueService(parseInt(req.params.id));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getDeliveryPartnerStats = async (req, res) => {
    try {
        const data = await service.getDeliveryPartnerStatsService(parseInt(req.params.id));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};