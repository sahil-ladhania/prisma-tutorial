const prisma = require('../config/prisma');

// Cross-Table Analytics Services (APIs 161-168)
exports.getUserTotalSpendingService = async (userId) => {
    // TODO: Write Prisma query using aggregate on orders for specific user
};

exports.getUserOrderCountWithDetailsService = async (userId) => {
    // TODO: Write Prisma query using groupBy on status for specific user's orders
};

exports.getRestaurantTotalRevenueService = async (restaurantId) => {
    // TODO: Write Prisma query using aggregate _sum on orders for specific restaurant
};

exports.getRestaurantAvgOrderValueService = async (restaurantId) => {
    // TODO: Write Prisma query using aggregate _avg on orders for specific restaurant
};

exports.getRestaurantMenuStatsService = async (restaurantId) => {
    // TODO: Write Prisma query using aggregate (_min, _max, _avg) on menu_items
};

exports.getMenuItemOrderCountService = async (itemId) => {
    // TODO: Write Prisma query to count order_items for specific menu_item
};

exports.getMenuItemTotalRevenueService = async (itemId) => {
    // TODO: Write Prisma query using aggregate _sum on order_items for specific menu_item
};

exports.getDeliveryPartnerStatsService = async (partnerId) => {
    // TODO: Write Prisma query using aggregate on orders for specific delivery partner
};