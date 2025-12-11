const service = require('../services/category6_group_by');

// Grouped User Analytics (APIs 78-80)
exports.getUsersGroupedByRole = async (req, res) => {
    try {
        const data = await service.getUsersGroupedByRoleService();
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getUsersGroupedByStatus = async (req, res) => {
    try {
        const data = await service.getUsersGroupedByStatusService();
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getUserRegistrationsByDate = async (req, res) => {
    try {
        const data = await service.getUserRegistrationsByDateService();
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Grouped Restaurant Analytics (APIs 81-85)
exports.getRestaurantsGroupedByCity = async (req, res) => {
    try {
        const data = await service.getRestaurantsGroupedByCityService();
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getRestaurantsGroupedByCuisine = async (req, res) => {
    try {
        const data = await service.getRestaurantsGroupedByCuisineService();
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getRestaurantsGroupedByStatus = async (req, res) => {
    try {
        const data = await service.getRestaurantsGroupedByStatusService();
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getAvgRatingByCity = async (req, res) => {
    try {
        const data = await service.getAvgRatingByCityService();
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getAvgPriceByCuisine = async (req, res) => {
    try {
        const data = await service.getAvgPriceByCuisineService();
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Grouped Menu Item Analytics (APIs 86-89)
exports.getMenuItemsGroupedByCategory = async (req, res) => {
    try {
        const data = await service.getMenuItemsGroupedByCategoryService();
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getMenuItemsGroupedByFoodType = async (req, res) => {
    try {
        const data = await service.getMenuItemsGroupedByFoodTypeService();
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getAvgPriceByCategory = async (req, res) => {
    try {
        const data = await service.getAvgPriceByCategoryService();
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getRestaurantMenuGrouped = async (req, res) => {
    try {
        const data = await service.getRestaurantMenuGroupedService(parseInt(req.params.id));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Grouped Order Analytics (APIs 90-96)
exports.getOrdersGroupedByStatus = async (req, res) => {
    try {
        const data = await service.getOrdersGroupedByStatusService();
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getOrdersGroupedByPaymentMethod = async (req, res) => {
    try {
        const data = await service.getOrdersGroupedByPaymentMethodService();
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getDailyOrders = async (req, res) => {
    try {
        const data = await service.getDailyOrdersService();
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getDailyRevenue = async (req, res) => {
    try {
        const data = await service.getDailyRevenueService();
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getRestaurantWiseOrderCount = async (req, res) => {
    try {
        const data = await service.getRestaurantWiseOrderCountService();
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getRestaurantWiseRevenue = async (req, res) => {
    try {
        const data = await service.getRestaurantWiseRevenueService();
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getUserWiseSpending = async (req, res) => {
    try {
        const data = await service.getUserWiseSpendingService();
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};