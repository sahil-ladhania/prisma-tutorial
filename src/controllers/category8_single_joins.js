const service = require('../services/category8_single_joins');

// User with Related Data (APIs 111-114)
exports.getUserWithAddresses = async (req, res) => {
    try {
        const data = await service.getUserWithAddressesService(parseInt(req.params.id));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getUserWithOrders = async (req, res) => {
    try {
        const data = await service.getUserWithOrdersService(parseInt(req.params.id));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getUserWithReviews = async (req, res) => {
    try {
        const data = await service.getUserWithReviewsService(parseInt(req.params.id));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getUserWithFavoriteRestaurants = async (req, res) => {
    try {
        const data = await service.getUserWithFavoriteRestaurantsService(parseInt(req.params.id));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Restaurant with Related Data (APIs 115-118)
exports.getRestaurantWithMenu = async (req, res) => {
    try {
        const data = await service.getRestaurantWithMenuService(parseInt(req.params.id));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getRestaurantWithOrders = async (req, res) => {
    try {
        const data = await service.getRestaurantWithOrdersService(parseInt(req.params.id));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getRestaurantWithReviews = async (req, res) => {
    try {
        const data = await service.getRestaurantWithReviewsService(parseInt(req.params.id));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getRestaurantWithOwner = async (req, res) => {
    try {
        const data = await service.getRestaurantWithOwnerService(parseInt(req.params.id));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Order with Related Data (APIs 119-123)
exports.getOrderWithItems = async (req, res) => {
    try {
        const data = await service.getOrderWithItemsService(parseInt(req.params.id));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getOrderWithCustomer = async (req, res) => {
    try {
        const data = await service.getOrderWithCustomerService(parseInt(req.params.id));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getOrderWithRestaurant = async (req, res) => {
    try {
        const data = await service.getOrderWithRestaurantService(parseInt(req.params.id));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getOrderWithDeliveryPartner = async (req, res) => {
    try {
        const data = await service.getOrderWithDeliveryPartnerService(parseInt(req.params.id));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getOrderWithAddress = async (req, res) => {
    try {
        const data = await service.getOrderWithAddressService(parseInt(req.params.id));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Menu Item with Related Data (APIs 124-126)
exports.getMenuItemWithRestaurant = async (req, res) => {
    try {
        const data = await service.getMenuItemWithRestaurantService(parseInt(req.params.id));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getMenuItemWithCategory = async (req, res) => {
    try {
        const data = await service.getMenuItemWithCategoryService(parseInt(req.params.id));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getMenuItemWithReviews = async (req, res) => {
    try {
        const data = await service.getMenuItemWithReviewsService(parseInt(req.params.id));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Review with Related Data (APIs 127-129)
exports.getReviewWithUser = async (req, res) => {
    try {
        const data = await service.getReviewWithUserService(parseInt(req.params.id));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getReviewWithRestaurant = async (req, res) => {
    try {
        const data = await service.getReviewWithRestaurantService(parseInt(req.params.id));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getReviewWithOrder = async (req, res) => {
    try {
        const data = await service.getReviewWithOrderService(parseInt(req.params.id));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};