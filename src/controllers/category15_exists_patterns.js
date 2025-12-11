const service = require('../services/category15_exists_patterns');

// Existence Checks (APIs 175-180)
exports.getUsersWhoHaveOrdered = async (req, res) => {
    try {
        const data = await service.getUsersWhoHaveOrderedService();
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getUsersWhoHaventOrdered = async (req, res) => {
    try {
        const data = await service.getUsersWhoHaventOrderedService();
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getRestaurantsWithOrders = async (req, res) => {
    try {
        const data = await service.getRestaurantsWithOrdersService();
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getRestaurantsWithoutOrders = async (req, res) => {
    try {
        const data = await service.getRestaurantsWithoutOrdersService();
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getMenuItemsNeverOrdered = async (req, res) => {
    try {
        const data = await service.getMenuItemsNeverOrderedService();
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getUsersWhoReviewed = async (req, res) => {
    try {
        const data = await service.getUsersWhoReviewedService();
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};