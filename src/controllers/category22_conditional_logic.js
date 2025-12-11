const service = require('../services/category22_conditional_logic');

// Conditional Calculations (APIs 231-234)
exports.getRestaurantsByPriceCategory = async (req, res) => {
    try {
        const data = await service.getRestaurantsByPriceCategoryService();
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getDeliveryPerformance = async (req, res) => {
    try {
        const data = await service.getDeliveryPerformanceService();
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getMenuItemsByPopularity = async (req, res) => {
    try {
        const data = await service.getMenuItemsByPopularityService();
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getUsersBySpendingTier = async (req, res) => {
    try {
        const data = await service.getUsersBySpendingTierService();
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};