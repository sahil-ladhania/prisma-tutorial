const service = require('../services/category18_crud');

// Create Operations (APIs 194-201)
exports.createUser = async (req, res) => {
    try {
        const data = await service.createUserService(req.body);
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.createRestaurant = async (req, res) => {
    try {
        const data = await service.createRestaurantService(req.body);
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.createMenuItem = async (req, res) => {
    try {
        const data = await service.createMenuItemService(req.body);
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.createOrder = async (req, res) => {
    try {
        const data = await service.createOrderService(req.body);
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.createOrderItem = async (req, res) => {
    try {
        const data = await service.createOrderItemService(req.body);
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.createAddress = async (req, res) => {
    try {
        const data = await service.createAddressService(req.body);
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.createReview = async (req, res) => {
    try {
        const data = await service.createReviewService(req.body);
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.addFavoriteRestaurant = async (req, res) => {
    try {
        const { userId, restaurantId } = req.body;
        const data = await service.addFavoriteRestaurantService(parseInt(userId), parseInt(restaurantId));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Update Operations (APIs 202-208)
exports.updateUser = async (req, res) => {
    try {
        const data = await service.updateUserService(parseInt(req.params.id), req.body);
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.updateRestaurant = async (req, res) => {
    try {
        const data = await service.updateRestaurantService(parseInt(req.params.id), req.body);
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.updateMenuItem = async (req, res) => {
    try {
        const data = await service.updateMenuItemService(parseInt(req.params.id), req.body);
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.updateOrderStatus = async (req, res) => {
    try {
        const { newStatus } = req.body;
        const data = await service.updateOrderStatusService(parseInt(req.params.id), newStatus);
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.assignDeliveryPartner = async (req, res) => {
    try {
        const { partnerId } = req.body;
        const data = await service.assignDeliveryPartnerService(parseInt(req.params.id), parseInt(partnerId));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.updateRestaurantRating = async (req, res) => {
    try {
        const data = await service.updateRestaurantRatingService(parseInt(req.params.id));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.toggleMenuItemAvailability = async (req, res) => {
    try {
        const data = await service.toggleMenuItemAvailabilityService(parseInt(req.params.id));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Delete Operations (APIs 209-215)
exports.deleteUser = async (req, res) => {
    try {
        const data = await service.deleteUserService(parseInt(req.params.id));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.deleteRestaurant = async (req, res) => {
    try {
        const data = await service.deleteRestaurantService(parseInt(req.params.id));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.deleteMenuItem = async (req, res) => {
    try {
        const data = await service.deleteMenuItemService(parseInt(req.params.id));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.deleteOrder = async (req, res) => {
    try {
        const data = await service.deleteOrderService(parseInt(req.params.id));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.deleteAddress = async (req, res) => {
    try {
        const data = await service.deleteAddressService(parseInt(req.params.id));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.deleteReview = async (req, res) => {
    try {
        const data = await service.deleteReviewService(parseInt(req.params.id));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.removeFavoriteRestaurant = async (req, res) => {
    try {
        const { userId, restaurantId } = req.body;
        const data = await service.removeFavoriteRestaurantService(parseInt(userId), parseInt(restaurantId));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};