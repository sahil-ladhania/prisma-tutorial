const service = require('../services/category11_distinct');

// Unique Value Queries (APIs 147-153)
exports.getUniqueCities = async (req, res) => {
    try {
        const data = await service.getUniqueCitiesService();
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getUniqueCuisines = async (req, res) => {
    try {
        const data = await service.getUniqueCuisinesService();
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getUniqueFoodTypes = async (req, res) => {
    try {
        const data = await service.getUniqueFoodTypesService();
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getUniquePaymentMethods = async (req, res) => {
    try {
        const data = await service.getUniquePaymentMethodsService();
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getUniqueOrderStatuses = async (req, res) => {
    try {
        const data = await service.getUniqueOrderStatusesService();
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getRestaurantUniqueCustomers = async (req, res) => {
    try {
        const data = await service.getRestaurantUniqueCustomersService(parseInt(req.params.id));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getUserUniqueRestaurants = async (req, res) => {
    try {
        const data = await service.getUserUniqueRestaurantsService(parseInt(req.params.id));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};