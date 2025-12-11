const service = require('../services/category12_complex_filtering_joins');

// Advanced Search with Relationships (APIs 154-160)
exports.searchRestaurantsByMenuItem = async (req, res) => {
    try {
        const { itemName } = req.query;
        const data = await service.searchRestaurantsByMenuItemService(itemName);
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.searchRestaurantsByOwner = async (req, res) => {
    try {
        const { ownerName } = req.query;
        const data = await service.searchRestaurantsByOwnerService(ownerName);
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getUsersByCity = async (req, res) => {
    try {
        const { city } = req.query;
        const data = await service.getUsersByCityService(city);
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.searchOrdersByMenuItem = async (req, res) => {
    try {
        const { itemName } = req.query;
        const data = await service.searchOrdersByMenuItemService(itemName);
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getHighRatedRestaurantsInCity = async (req, res) => {
    try {
        const { city, minRating } = req.query;
        const data = await service.getHighRatedRestaurantsInCityService(city, parseFloat(minRating));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getUsersWhoOrderedFrom = async (req, res) => {
    try {
        const { restaurantId } = req.query;
        const data = await service.getUsersWhoOrderedFromService(parseInt(restaurantId));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getMenuItemsByRestaurantCity = async (req, res) => {
    try {
        const { city } = req.query;
        const data = await service.getMenuItemsByRestaurantCityService(city);
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};