const prisma = require('../config/prisma');

// Search Operations Services (APIs 226-230)
exports.searchRestaurantsService = async (query) => {
    // TODO: Write Prisma query using contains on name or description
};

exports.searchMenuItemsService = async (query) => {
    // TODO: Write Prisma query using contains on name or description
};

exports.searchUsersService = async (query) => {
    // TODO: Write Prisma query using contains on name or email
};

exports.searchRestaurantsStartsWithService = async (prefix) => {
    // TODO: Write Prisma query using startsWith on name
};

exports.searchMenuItemsContainsService = async (keyword) => {
    // TODO: Write Prisma query using contains on name or description
};