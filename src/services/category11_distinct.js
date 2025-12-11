const prisma = require('../config/prisma');

// Unique Value Queries Services (APIs 147-153)
exports.getUniqueCitiesService = async () => {
    // TODO: Write Prisma query using distinct on city field
};

exports.getUniqueCuisinesService = async () => {
    // TODO: Write Prisma query using distinct on cuisine_type field
};

exports.getUniqueFoodTypesService = async () => {
    // TODO: Write Prisma query using distinct on food_type field
};

exports.getUniquePaymentMethodsService = async () => {
    // TODO: Write Prisma query using distinct on payment_method field
};

exports.getUniqueOrderStatusesService = async () => {
    // TODO: Write Prisma query using distinct on status field
};

exports.getRestaurantUniqueCustomersService = async (restaurantId) => {
    // TODO: Write Prisma query using distinct on user_id for specific restaurant
};

exports.getUserUniqueRestaurantsService = async (userId) => {
    // TODO: Write Prisma query using distinct on restaurant_id for specific user
};