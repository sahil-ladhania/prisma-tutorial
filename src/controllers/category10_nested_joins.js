const service = require('../services/category10_nested_joins');

// Deep Relationship Queries (APIs 143-146)
exports.getOrdersCompleteChain = async (req, res) => {
    try {
        const data = await service.getOrdersCompleteChainService();
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getRestaurantOrdersFullChain = async (req, res) => {
    try {
        const data = await service.getRestaurantOrdersFullChainService(parseInt(req.params.restaurantId));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getUserActivityFullChain = async (req, res) => {
    try {
        const data = await service.getUserActivityFullChainService(parseInt(req.params.userId));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getReviewsCompleteContext = async (req, res) => {
    try {
        const data = await service.getReviewsCompleteContextService();
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};