const service = require('../services/category4_pagination');

// Paginated Lists (APIs 46-50)
exports.getPaginatedRestaurants = async (req, res) => {
    try {
        const { page, limit } = req.query;
        const restaurants = await service.getPaginatedRestaurantsService(parseInt(page), parseInt(limit));
        res.json({ success: true, data: restaurants });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getPaginatedMenuItems = async (req, res) => {
    try {
        const { page, limit } = req.query;
        const menuItems = await service.getPaginatedMenuItemsService(parseInt(page), parseInt(limit));
        res.json({ success: true, data: menuItems });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getPaginatedOrders = async (req, res) => {
    try {
        const { page, limit } = req.query;
        const orders = await service.getPaginatedOrdersService(parseInt(page), parseInt(limit));
        res.json({ success: true, data: orders });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getPaginatedUsers = async (req, res) => {
    try {
        const { page, limit } = req.query;
        const users = await service.getPaginatedUsersService(parseInt(page), parseInt(limit));
        res.json({ success: true, data: users });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getPaginatedReviews = async (req, res) => {
    try {
        const { page, limit } = req.query;
        const reviews = await service.getPaginatedReviewsService(parseInt(page), parseInt(limit));
        res.json({ success: true, data: reviews });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};