const prisma = require('../config/prisma');

// Existence Checks Services (APIs 175-180)
exports.getUsersWhoHaveOrderedService = async () => {
    // TODO: Write Prisma query to get users where orders exists (use some in where)
};

exports.getUsersWhoHaventOrderedService = async () => {
    // TODO: Write Prisma query to get users where orders does not exist (use none in where)
};

exports.getRestaurantsWithOrdersService = async () => {
    // TODO: Write Prisma query to get restaurants where orders exists
};

exports.getRestaurantsWithoutOrdersService = async () => {
    // TODO: Write Prisma query to get restaurants where orders does not exist
};

exports.getMenuItemsNeverOrderedService = async () => {
    // TODO: Write Prisma query to get menu items where order_items does not exist
};

exports.getUsersWhoReviewedService = async () => {
    // TODO: Write Prisma query to get users where reviews exists
};