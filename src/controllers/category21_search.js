const service = require('../services/category21_search');

// Search Operations (APIs 226-230)
exports.searchRestaurants = async (req, res) => {
    try {
        const { query } = req.query;
        const data = await service.searchRestaurantsService(query);
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.searchMenuItems = async (req, res) => {
    try {
        const { query } = req.query;
        const data = await service.searchMenuItemsService(query);
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.searchUsers = async (req, res) => {
    try {
        const { query } = req.query;
        const data = await service.searchUsersService(query);
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.searchRestaurantsStartsWith = async (req, res) => {
    try {
        const { prefix } = req.query;
        const data = await service.searchRestaurantsStartsWithService(prefix);
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.searchMenuItemsContains = async (req, res) => {
    try {
        const { keyword } = req.query;
        const data = await service.searchMenuItemsContainsService(keyword);
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};