const prisma = require('../config/prisma');

// Filtered Group Analytics Services (APIs 100-110)
exports.getPopularRestaurantsByCityService = async (minCount) => {
    // TODO: Write Prisma query using groupBy with having clause (_count > minCount)
};

exports.getHighRatedCitiesService = async (minAvgRating) => {
    // TODO: Write Prisma query using groupBy with having clause (_avg.rating > minAvgRating)
};

exports.getPopularCuisinesService = async (minRestaurantCount) => {
    // TODO: Write Prisma query using groupBy with having clause
};

exports.getActiveUsersByRoleService = async (minOrderCount) => {
    // TODO: Write Prisma query using groupBy with having clause
};

exports.getFrequentCustomersService = async (minOrders) => {
    // TODO: Write Prisma query using groupBy on user_id with having clause (_count > minOrders)
};

exports.getHighValueCustomersService = async (minSpending) => {
    // TODO: Write Prisma query using groupBy with having clause (_sum.total_amount > minSpending)
};

exports.getTopRestaurantsByOrdersService = async (minOrders) => {
    // TODO: Write Prisma query using groupBy with having clause (_count > minOrders)
};

exports.getHighRevenueRestaurantsService = async (minRevenue) => {
    // TODO: Write Prisma query using groupBy with having clause (_sum > minRevenue)
};

exports.getPopularCategoriesService = async (minItems) => {
    // TODO: Write Prisma query using groupBy with having clause (_count > minItems)
};

exports.getRestaurantsWithMinReviewsService = async (minReviews) => {
    // TODO: Write Prisma query using groupBy with having clause (_count > minReviews)
};

exports.getHighlyReviewedRestaurantsService = async (minReviews, minAvgRating) => {
    // TODO: Write Prisma query using groupBy with having clause (_count > minReviews AND _avg.rating > minAvgRating)
};