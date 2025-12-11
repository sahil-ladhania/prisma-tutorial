const prisma = require('../config/prisma');

// NULL Checks Services (APIs 188-193)
exports.getMenuItemsWithoutDiscountService = async () => {
    // TODO: Write Prisma query where discount_price is null
};

exports.getMenuItemsWithDiscountService = async () => {
    // TODO: Write Prisma query where discount_price is not null
};

exports.getOrdersWithoutDeliveryPartnerService = async () => {
    // TODO: Write Prisma query where delivery_partner_id is null
};

exports.getOrdersPendingDeliveryService = async () => {
    // TODO: Write Prisma query where delivery_partner_id is null and status specific
};

exports.getDefaultAddressesService = async () => {
    // TODO: Write Prisma query where is_default is true
};

exports.getReviewsWithoutCommentService = async () => {
    // TODO: Write Prisma query where comment is null
};