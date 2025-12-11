const service = require('../services/category23_business_logic');

// Advanced Business Queries (APIs 235-242)
exports.getRestaurantRecommendations = async (req, res) => {
    try {
        const { userId } = req.query;
        const data = await service.getRestaurantRecommendationsService(parseInt(userId));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getMenuItemRecommendations = async (req, res) => {
    try {
        const { userId } = req.query;
        const data = await service.getMenuItemRecommendationsService(parseInt(userId), parseInt(req.params.restaurantId));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getRestaurantPerformanceScore = async (req, res) => {
    try {
        const { restaurantId } = req.query;
        const data = await service.getRestaurantPerformanceScoreService(parseInt(restaurantId));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getPeakOrderHours = async (req, res) => {
    try {
        const data = await service.getPeakOrderHoursService();
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getCustomerLifetimeValue = async (req, res) => {
    try {
        const { userId } = req.query;
        const data = await service.getCustomerLifetimeValueService(parseInt(userId));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getChurnRiskUsers = async (req, res) => {
    try {
        const data = await service.getChurnRiskUsersService();
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getRepeatCustomers = async (req, res) => {
    try {
        const { restaurantId } = req.query;
        const data = await service.getRepeatCustomersService(parseInt(restaurantId));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getCompetitorAnalysis = async (req, res) => {
    try {
        const { restaurantId } = req.query;
        const data = await service.getCompetitorAnalysisService(parseInt(restaurantId));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};