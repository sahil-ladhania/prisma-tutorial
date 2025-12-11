const prisma = require('../config/prisma');

// User with Related Data Services (APIs 111-114)
exports.getUserWithAddressesService = async (userId) => {
    // TODO: Write Prisma query using include to get user with addresses
};

exports.getUserWithOrdersService = async (userId) => {
    // TODO: Write Prisma query using include to get user with orders
};

exports.getUserWithReviewsService = async (userId) => {
    // TODO: Write Prisma query using include to get user with reviews
};

exports.getUserWithFavoriteRestaurantsService = async (userId) => {
    // TODO: Write Prisma query using include to get user with favorite restaurants (through junction)
};

// Restaurant with Related Data Services (APIs 115-118)
exports.getRestaurantWithMenuService = async (restaurantId) => {
    // TODO: Write Prisma query using include to get restaurant with menu items
};

exports.getRestaurantWithOrdersService = async (restaurantId) => {
    // TODO: Write Prisma query using include to get restaurant with orders
};

exports.getRestaurantWithReviewsService = async (restaurantId) => {
    // TODO: Write Prisma query using include to get restaurant with reviews
};

exports.getRestaurantWithOwnerService = async (restaurantId) => {
    // TODO: Write Prisma query using include to get restaurant with owner details
};

// Order with Related Data Services (APIs 119-123)
exports.getOrderWithItemsService = async (orderId) => {
    // TODO: Write Prisma query using include to get order with order items
};

exports.getOrderWithCustomerService = async (orderId) => {
    // TODO: Write Prisma query using include to get order with customer
};

exports.getOrderWithRestaurantService = async (orderId) => {
    // TODO: Write Prisma query using include to get order with restaurant
};

exports.getOrderWithDeliveryPartnerService = async (orderId) => {
    // TODO: Write Prisma query using include to get order with delivery partner
};

exports.getOrderWithAddressService = async (orderId) => {
    // TODO: Write Prisma query using include to get order with address
};

// Menu Item with Related Data Services (APIs 124-126)
exports.getMenuItemWithRestaurantService = async (itemId) => {
    // TODO: Write Prisma query using include to get menu item with restaurant
};

exports.getMenuItemWithCategoryService = async (itemId) => {
    // TODO: Write Prisma query using include to get menu item with category
};

exports.getMenuItemWithReviewsService = async (itemId) => {
    // TODO: Write Prisma query using include to get menu item with reviews
};

// Review with Related Data Services (APIs 127-129)
exports.getReviewWithUserService = async (reviewId) => {
    // TODO: Write Prisma query using include to get review with user
};

exports.getReviewWithRestaurantService = async (reviewId) => {
    // TODO: Write Prisma query using include to get review with restaurant
};

exports.getReviewWithOrderService = async (reviewId) => {
    // TODO: Write Prisma query using include to get review with order
};