const service = require('../services/category9_multiple_joins');

// Complex User Queries (APIs 130-132)
exports.getUserCompleteProfile = async (req, res) => {
    try {
        const data = await service.getUserCompleteProfileService(parseInt(req.params.id));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getUserOrderHistoryDetailed = async (req, res) => {
    try {
        const data = await service.getUserOrderHistoryDetailedService(parseInt(req.params.id));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getUserReviewHistoryDetailed = async (req, res) => {
    try {
        const data = await service.getUserReviewHistoryDetailedService(parseInt(req.params.id));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Complex Restaurant Queries (APIs 133-136)
exports.getRestaurantFullDetails = async (req, res) => {
    try {
        const data = await service.getRestaurantFullDetailsService(parseInt(req.params.id));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getRestaurantMenuWithCategories = async (req, res) => {
    try {
        const data = await service.getRestaurantMenuWithCategoriesService(parseInt(req.params.id));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getRestaurantOrdersWithCustomers = async (req, res) => {
    try {
        const data = await service.getRestaurantOrdersWithCustomersService(parseInt(req.params.id));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getRestaurantReviewsWithUsers = async (req, res) => {
    try {
        const data = await service.getRestaurantReviewsWithUsersService(parseInt(req.params.id));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Complex Order Queries (APIs 137-140)
exports.getOrderCompleteDetails = async (req, res) => {
    try {
        const data = await service.getOrderCompleteDetailsService(parseInt(req.params.id));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getOrderItemsWithMenuDetails = async (req, res) => {
    try {
        const data = await service.getOrderItemsWithMenuDetailsService(parseInt(req.params.id));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getUserOrdersWithRestaurants = async (req, res) => {
    try {
        const data = await service.getUserOrdersWithRestaurantsService(parseInt(req.params.userId));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getRestaurantOrdersComplete = async (req, res) => {
    try {
        const data = await service.getRestaurantOrdersCompleteService(parseInt(req.params.id));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Menu Item Complex Queries (APIs 141-142)
exports.getMenuItemCompleteDetails = async (req, res) => {
    try {
        const data = await service.getMenuItemCompleteDetailsService(parseInt(req.params.id));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getRestaurantMenuComplete = async (req, res) => {
    try {
        const data = await service.getRestaurantMenuCompleteService(parseInt(req.params.id));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};