const service = require('../services/category1_basic_select_and_where');

// User Management (APIs 1-6)
exports.getAllUsers = async (req, res) => {
    try {
        const users = await service.getAllUsersService();
        res.json({ success: true, data: users });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getUserById = async (req, res) => {
    try {
        const user = await service.getUserByIdService(parseInt(req.params.id));
        res.json({ success: true, data: user });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getUserByEmail = async (req, res) => {
    try {
        const user = await service.getUserByEmailService(req.params.email);
        res.json({ success: true, data: user });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getUserByPhone = async (req, res) => {
    try {
        const user = await service.getUserByPhoneService(req.params.phone);
        res.json({ success: true, data: user });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getUsersByRole = async (req, res) => {
    try {
        const users = await service.getUsersByRoleService(req.params.role);
        res.json({ success: true, data: users });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getUsersByStatus = async (req, res) => {
    try {
        const users = await service.getUsersByStatusService(req.params.status);
        res.json({ success: true, data: users });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Restaurant Queries (APIs 7-13)
exports.getAllRestaurants = async (req, res) => {
    try {
        const restaurants = await service.getAllRestaurantsService();
        res.json({ success: true, data: restaurants });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getRestaurantById = async (req, res) => {
    try {
        const restaurant = await service.getRestaurantByIdService(parseInt(req.params.id));
        res.json({ success: true, data: restaurant });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getRestaurantsByOwner = async (req, res) => {
    try {
        const restaurants = await service.getRestaurantsByOwnerService(parseInt(req.params.ownerId));
        res.json({ success: true, data: restaurants });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getRestaurantsByCity = async (req, res) => {
    try {
        const restaurants = await service.getRestaurantsByCityService(req.params.city);
        res.json({ success: true, data: restaurants });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getRestaurantsByCuisine = async (req, res) => {
    try {
        const restaurants = await service.getRestaurantsByCuisineService(req.params.cuisine);
        res.json({ success: true, data: restaurants });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getRestaurantsByStatus = async (req, res) => {
    try {
        const restaurants = await service.getRestaurantsByStatusService(req.params.status);
        res.json({ success: true, data: restaurants });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getPureVegRestaurants = async (req, res) => {
    try {
        const restaurants = await service.getPureVegRestaurantsService();
        res.json({ success: true, data: restaurants });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Menu Item Queries (APIs 14-19)
exports.getAllMenuItems = async (req, res) => {
    try {
        const menuItems = await service.getAllMenuItemsService();
        res.json({ success: true, data: menuItems });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getMenuItemById = async (req, res) => {
    try {
        const menuItem = await service.getMenuItemByIdService(parseInt(req.params.id));
        res.json({ success: true, data: menuItem });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getMenuItemsByRestaurant = async (req, res) => {
    try {
        const menuItems = await service.getMenuItemsByRestaurantService(parseInt(req.params.restaurantId));
        res.json({ success: true, data: menuItems });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getMenuItemsByCategory = async (req, res) => {
    try {
        const menuItems = await service.getMenuItemsByCategoryService(parseInt(req.params.categoryId));
        res.json({ success: true, data: menuItems });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getAvailableMenuItems = async (req, res) => {
    try {
        const menuItems = await service.getAvailableMenuItemsService();
        res.json({ success: true, data: menuItems });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getMenuItemsByFoodType = async (req, res) => {
    try {
        const menuItems = await service.getMenuItemsByFoodTypeService(req.params.type);
        res.json({ success: true, data: menuItems });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Order Queries (APIs 20-24)
exports.getOrderById = async (req, res) => {
    try {
        const order = await service.getOrderByIdService(parseInt(req.params.id));
        res.json({ success: true, data: order });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getOrdersByUser = async (req, res) => {
    try {
        const orders = await service.getOrdersByUserService(parseInt(req.params.userId));
        res.json({ success: true, data: orders });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getOrdersByRestaurant = async (req, res) => {
    try {
        const orders = await service.getOrdersByRestaurantService(parseInt(req.params.restaurantId));
        res.json({ success: true, data: orders });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getOrdersByStatus = async (req, res) => {
    try {
        const orders = await service.getOrdersByStatusService(req.params.status);
        res.json({ success: true, data: orders });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getOrdersByPaymentStatus = async (req, res) => {
    try {
        const orders = await service.getOrdersByPaymentStatusService(req.params.status);
        res.json({ success: true, data: orders });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};