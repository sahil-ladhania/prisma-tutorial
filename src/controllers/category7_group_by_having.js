const service = require('../services/category7_group_by_having');

// Filtered Group Analytics (APIs 100-110)
exports.getPopularRestaurantsByCity = async (req, res) => {
    try {
        const { minCount } = req.query;
        const data = await service.getPopularRestaurantsByCityService(parseInt(minCount));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getHighRatedCities = async (req, res) => {
    try {
        const { minAvgRating } = req.query;
        const data = await service.getHighRatedCitiesService(parseFloat(minAvgRating));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getPopularCuisines = async (req, res) => {
    try {
        const { minRestaurantCount } = req.query;
        const data = await service.getPopularCuisinesService(parseInt(minRestaurantCount));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getActiveUsersByRole = async (req, res) => {
    try {
        const { minOrderCount } = req.query;
        const data = await service.getActiveUsersByRoleService(parseInt(minOrderCount));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getFrequentCustomers = async (req, res) => {
    try {
        const { minOrders } = req.query;
        const data = await service.getFrequentCustomersService(parseInt(minOrders));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getHighValueCustomers = async (req, res) => {
    try {
        const { minSpending } = req.query;
        const data = await service.getHighValueCustomersService(parseFloat(minSpending));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getTopRestaurantsByOrders = async (req, res) => {
    try {
        const { minOrders } = req.query;
        const data = await service.getTopRestaurantsByOrdersService(parseInt(minOrders));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getHighRevenueRestaurants = async (req, res) => {
    try {
        const { minRevenue } = req.query;
        const data = await service.getHighRevenueRestaurantsService(parseFloat(minRevenue));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getPopularCategories = async (req, res) => {
    try {
        const { minItems } = req.query;
        const data = await service.getPopularCategoriesService(parseInt(minItems));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getRestaurantsWithMinReviews = async (req, res) => {
    try {
        const { minReviews } = req.query;
        const data = await service.getRestaurantsWithMinReviewsService(parseInt(minReviews));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getHighlyReviewedRestaurants = async (req, res) => {
    try {
        const { minReviews, minAvgRating } = req.query;
        const data = await service.getHighlyReviewedRestaurantsService(parseInt(minReviews), parseFloat(minAvgRating));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};