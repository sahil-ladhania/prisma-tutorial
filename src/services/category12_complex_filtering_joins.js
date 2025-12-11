const prisma = require('../config/prisma');

// Advanced Search with Relationships Services (APIs 154-160)
exports.searchRestaurantsByMenuItemService = async (itemName) => {
    // TODO: Write Prisma query with where clause on related menu_items
};

exports.searchRestaurantsByOwnerService = async (ownerName) => {
    // TODO: Write Prisma query with where clause on related owner (user)
};

exports.getUsersByCityService = async (city) => {
    // TODO: Write Prisma query with where clause on related addresses
};

exports.searchOrdersByMenuItemService = async (itemName) => {
    // TODO: Write Prisma query with where clause on related order_items -> menu_item
};

exports.getHighRatedRestaurantsInCityService = async (city, minRating) => {
    // TODO: Write Prisma query with multiple where conditions on restaurant and city
};

exports.getUsersWhoOrderedFromService = async (restaurantId) => {
    // TODO: Write Prisma query with where clause on related orders
};

exports.getMenuItemsByRestaurantCityService = async (city) => {
    // TODO: Write Prisma query with where clause on related restaurant city
};