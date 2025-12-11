const service = require('../services/category2_complex_where');

// Advanced Restaurant Search (APIs 25-28)
exports.filterRestaurants = async (req, res) => {
    try {
        const filters = req.query;
        const restaurants = await service.filterRestaurantsService(filters);
        res.json({ success: true, data: restaurants });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getRestaurantsByPriceRange = async (req, res) => {
    try {
        const { minCost, maxCost } = req.query;
        const restaurants = await service.getRestaurantsByPriceRangeService(parseFloat(minCost), parseFloat(maxCost));
        res.json({ success: true, data: restaurants });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getOpenRestaurants = async (req, res) => {
    try {
        const { currentTime } = req.query;
        const restaurants = await service.getOpenRestaurantsService(currentTime);
        res.json({ success: true, data: restaurants });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getRestaurantsByDeliveryTime = async (req, res) => {
    try {
        const { maxTime } = req.query;
        const restaurants = await service.getRestaurantsByDeliveryTimeService(parseInt(maxTime));
        res.json({ success: true, data: restaurants });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Advanced Menu Item Search (APIs 29-32)
exports.getMenuItemsByPriceRange = async (req, res) => {
    try {
        const { minPrice, maxPrice } = req.query;
        const menuItems = await service.getMenuItemsByPriceRangeService(parseFloat(minPrice), parseFloat(maxPrice));
        res.json({ success: true, data: menuItems });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.filterMenuItems = async (req, res) => {
    try {
        const filters = req.query;
        const menuItems = await service.filterMenuItemsService(filters);
        res.json({ success: true, data: menuItems });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getDiscountedMenuItems = async (req, res) => {
    try {
        const menuItems = await service.getDiscountedMenuItemsService();
        res.json({ success: true, data: menuItems });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getLowCalorieMenuItems = async (req, res) => {
    try {
        const { maxCalories } = req.query;
        const menuItems = await service.getLowCalorieMenuItemsService(parseInt(maxCalories));
        res.json({ success: true, data: menuItems });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Advanced Order Filters (APIs 33-36)
exports.getOrdersByDateRange = async (req, res) => {
    try {
        const { startDate, endDate } = req.query;
        const orders = await service.getOrdersByDateRangeService(startDate, endDate);
        res.json({ success: true, data: orders });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getUserOrdersByStatus = async (req, res) => {
    try {
        const { userId, status } = req.query;
        const orders = await service.getUserOrdersByStatusService(parseInt(userId), status);
        res.json({ success: true, data: orders });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getOrdersByAmountRange = async (req, res) => {
    try {
        const { minAmount, maxAmount } = req.query;
        const orders = await service.getOrdersByAmountRangeService(parseFloat(minAmount), parseFloat(maxAmount));
        res.json({ success: true, data: orders });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getOrdersByPaymentMethod = async (req, res) => {
    try {
        const { method } = req.query;
        const orders = await service.getOrdersByPaymentMethodService(method);
        res.json({ success: true, data: orders });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};