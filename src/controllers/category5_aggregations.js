const service = require('../services/category5_aggregations');

// User Statistics (APIs 51-53)
exports.getTotalUsersCount = async (req, res) => {
    try {
        const count = await service.getTotalUsersCountService();
        res.json({ success: true, data: count });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getUserCountByRole = async (req, res) => {
    try {
        const { role } = req.query;
        const count = await service.getUserCountByRoleService(role);
        res.json({ success: true, data: count });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getUserCountByStatus = async (req, res) => {
    try {
        const { status } = req.query;
        const count = await service.getUserCountByStatusService(status);
        res.json({ success: true, data: count });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Restaurant Statistics (APIs 54-59)
exports.getTotalRestaurantsCount = async (req, res) => {
    try {
        const count = await service.getTotalRestaurantsCountService();
        res.json({ success: true, data: count });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getRestaurantCountByCity = async (req, res) => {
    try {
        const { city } = req.query;
        const count = await service.getRestaurantCountByCityService(city);
        res.json({ success: true, data: count });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getAverageRestaurantRating = async (req, res) => {
    try {
        const avgRating = await service.getAverageRestaurantRatingService();
        res.json({ success: true, data: avgRating });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getRestaurantAverageRating = async (req, res) => {
    try {
        const avgRating = await service.getRestaurantAverageRatingService(parseInt(req.params.id));
        res.json({ success: true, data: avgRating });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getMaxRestaurantPrice = async (req, res) => {
    try {
        const maxPrice = await service.getMaxRestaurantPriceService();
        res.json({ success: true, data: maxPrice });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getMinRestaurantPrice = async (req, res) => {
    try {
        const minPrice = await service.getMinRestaurantPriceService();
        res.json({ success: true, data: minPrice });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Menu Item Statistics (APIs 60-65)
exports.getTotalMenuItemsCount = async (req, res) => {
    try {
        const count = await service.getTotalMenuItemsCountService();
        res.json({ success: true, data: count });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getRestaurantMenuItemCount = async (req, res) => {
    try {
        const count = await service.getRestaurantMenuItemCountService(parseInt(req.params.id));
        res.json({ success: true, data: count });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getAverageMenuItemPrice = async (req, res) => {
    try {
        const avgPrice = await service.getAverageMenuItemPriceService();
        res.json({ success: true, data: avgPrice });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getRestaurantAvgMenuPrice = async (req, res) => {
    try {
        const avgPrice = await service.getRestaurantAvgMenuPriceService(parseInt(req.params.id));
        res.json({ success: true, data: avgPrice });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getMaxMenuItemPrice = async (req, res) => {
    try {
        const maxPrice = await service.getMaxMenuItemPriceService();
        res.json({ success: true, data: maxPrice });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getMinMenuItemPrice = async (req, res) => {
    try {
        const minPrice = await service.getMinMenuItemPriceService();
        res.json({ success: true, data: minPrice });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Order Statistics (APIs 66-74)
exports.getTotalOrdersCount = async (req, res) => {
    try {
        const count = await service.getTotalOrdersCountService();
        res.json({ success: true, data: count });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getUserOrderCount = async (req, res) => {
    try {
        const count = await service.getUserOrderCountService(parseInt(req.params.userId));
        res.json({ success: true, data: count });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getRestaurantOrderCount = async (req, res) => {
    try {
        const count = await service.getRestaurantOrderCountService(parseInt(req.params.id));
        res.json({ success: true, data: count });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getTotalRevenue = async (req, res) => {
    try {
        const revenue = await service.getTotalRevenueService();
        res.json({ success: true, data: revenue });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getRestaurantRevenue = async (req, res) => {
    try {
        const revenue = await service.getRestaurantRevenueService(parseInt(req.params.id));
        res.json({ success: true, data: revenue });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getAverageOrderValue = async (req, res) => {
    try {
        const avgValue = await service.getAverageOrderValueService();
        res.json({ success: true, data: avgValue });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getUserAvgOrderValue = async (req, res) => {
    try {
        const avgValue = await service.getUserAvgOrderValueService(parseInt(req.params.userId));
        res.json({ success: true, data: avgValue });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getMaxOrderValue = async (req, res) => {
    try {
        const maxValue = await service.getMaxOrderValueService();
        res.json({ success: true, data: maxValue });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getMinOrderValue = async (req, res) => {
    try {
        const minValue = await service.getMinOrderValueService();
        res.json({ success: true, data: minValue });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};