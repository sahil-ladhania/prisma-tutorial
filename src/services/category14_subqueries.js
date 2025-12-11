const prisma = require('../config/prisma');

// Comparative Queries Services (APIs 169-174)
exports.getRestaurantsAboveAvgRatingService = async () => {
    // TODO: First get avg rating, then filter restaurants above that
};

exports.getMenuItemsAboveAvgPriceService = async () => {
    // TODO: First get avg price, then filter menu items above that
};

exports.getOrdersAboveAvgValueService = async () => {
    // TODO: First get avg order value, then filter orders above that
};

exports.getTopSpendersService = async (limit) => {
    // TODO: Write Prisma query to get top N users by total spending (use groupBy + orderBy + take)
};

exports.getMostOrderedRestaurantsService = async (limit) => {
    // TODO: Write Prisma query to get top N restaurants by order count
};

exports.getMostPopularMenuItemsService = async (limit) => {
    // TODO: Write Prisma query to get top N menu items by order frequency
};