const service = require('../services/category20_bulk_operations');

// Batch Operations (APIs 221-225)
exports.bulkCreateMenuItems = async (req, res) => {
    try {
        const data = await service.bulkCreateMenuItemsService(req.body);
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.bulkUpdateRestaurantMenu = async (req, res) => {
    try {
        const data = await service.bulkUpdateRestaurantMenuService(parseInt(req.params.id), req.body);
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.bulkDeleteOrders = async (req, res) => {
    try {
        const { orderIds } = req.body;
        const data = await service.bulkDeleteOrdersService(orderIds);
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.bulkUpdateRestaurantStatus = async (req, res) => {
    try {
        const { restaurantIds, status } = req.body;
        const data = await service.bulkUpdateRestaurantStatusService(restaurantIds, status);
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.bulkCreateAddresses = async (req, res) => {
    try {
        const data = await service.bulkCreateAddressesService(req.body);
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};