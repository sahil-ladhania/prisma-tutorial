const prisma = require('../config/prisma');

// Sorted Restaurant Lists Services (APIs 37-40)
exports.getRestaurantsSortedByRatingService = async (order) => {
    // TODO: Write Prisma query to get restaurants sorted by rating (order: 'asc' or 'desc')
};

exports.getRestaurantsSortedByPriceService = async (order) => {
    // TODO: Write Prisma query to get restaurants sorted by cost_for_two
};

exports.getRestaurantsSortedByReviewCountService = async (order) => {
    // TODO: Write Prisma query to get restaurants sorted by total_reviews
};

exports.getRestaurantsSortedByDeliveryTimeService = async (order) => {
    // TODO: Write Prisma query to get restaurants sorted by delivery_time
};

// Sorted Menu Items Services (APIs 41-43)
exports.getMenuItemsSortedByPriceService = async (order) => {
    // TODO: Write Prisma query to get menu items sorted by price
};

exports.getMenuItemsSortedByNameService = async (order) => {
    // TODO: Write Prisma query to get menu items sorted alphabetically by name
};

exports.getRestaurantMenuSortedService = async (restaurantId, sortBy) => {
    // TODO: Write Prisma query to get restaurant menu sorted by sortBy (price, name, calories)
};

// Sorted Orders Services (APIs 44-45)
exports.getOrdersSortedByDateService = async (order) => {
    // TODO: Write Prisma query to get orders sorted by created_at
};

exports.getOrdersSortedByAmountService = async (order) => {
    // TODO: Write Prisma query to get orders sorted by total_amount
};