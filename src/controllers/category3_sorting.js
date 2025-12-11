const service = require('../services/category3_sorting');

// Sorted Restaurant Lists (APIs 37-40)
exports.getRestaurantsSortedByRating = async (req, res) => {
    try {
        const { order } = req.query;
        const restaurants = await service.getRestaurantsSortedByRatingService(order);
        res.json({ success: true, data: restaurants });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getRestaurantsSortedByPrice = async (req, res) => {
    try {
        const { order } = req.query;
        const restaurants = await service.getRestaurantsSortedByPriceService(order);
        res.json({ success: true, data: restaurants });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getRestaurantsSortedByReviewCount = async (req, res) => {
    try {
        const { order } = req.query;
        const restaurants = await service.getRestaurantsSortedByReviewCountService(order);
        res.json({ success: true, data: restaurants });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getRestaurantsSortedByDeliveryTime = async (req, res) => {
    try {
        const { order } = req.query;
        const restaurants = await service.getRestaurantsSortedByDeliveryTimeService(order);
        res.json({ success: true, data: restaurants });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Sorted Menu Items (APIs 41-43)
exports.getMenuItemsSortedByPrice = async (req, res) => {
    try {
        const { order } = req.query;
        const menuItems = await service.getMenuItemsSortedByPriceService(order);
        res.json({ success: true, data: menuItems });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getMenuItemsSortedByName = async (req, res) => {
    try {
        const { order } = req.query;
        const menuItems = await service.getMenuItemsSortedByNameService(order);
        res.json({ success: true, data: menuItems });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getRestaurantMenuSorted = async (req, res) => {
    try {
        const { sortBy } = req.query;
        const menuItems = await service.getRestaurantMenuSortedService(parseInt(req.params.restaurantId), sortBy);
        res.json({ success: true, data: menuItems });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Sorted Orders (APIs 44-45)
exports.getOrdersSortedByDate = async (req, res) => {
    try {
        const { order } = req.query;
        const orders = await service.getOrdersSortedByDateService(order);
        res.json({ success: true, data: orders });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getOrdersSortedByAmount = async (req, res) => {
    try {
        const { order } = req.query;
        const orders = await service.getOrdersSortedByAmountService(order);
        res.json({ success: true, data: orders });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};