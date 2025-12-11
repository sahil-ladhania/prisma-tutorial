const service = require('../services/category14_subqueries');

// Comparative Queries (APIs 169-174)
exports.getRestaurantsAboveAvgRating = async (req, res) => {
    try {
        const data = await service.getRestaurantsAboveAvgRatingService();
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getMenuItemsAboveAvgPrice = async (req, res) => {
    try {
        const data = await service.getMenuItemsAboveAvgPriceService();
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getOrdersAboveAvgValue = async (req, res) => {
    try {
        const data = await service.getOrdersAboveAvgValueService();
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getTopSpenders = async (req, res) => {
    try {
        const { limit } = req.query;
        const data = await service.getTopSpendersService(parseInt(limit));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getMostOrderedRestaurants = async (req, res) => {
    try {
        const { limit } = req.query;
        const data = await service.getMostOrderedRestaurantsService(parseInt(limit));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getMostPopularMenuItems = async (req, res) => {
    try {
        const { limit } = req.query;
        const data = await service.getMostPopularMenuItemsService(parseInt(limit));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};