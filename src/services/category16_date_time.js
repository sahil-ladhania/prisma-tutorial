const prisma = require('../config/prisma');

// Time-Based Queries Services (APIs 181-187)
exports.getTodayOrdersService = async () => {
    // TODO: Write Prisma query to get orders where created_at is today
};

exports.getThisWeekOrdersService = async () => {
    // TODO: Write Prisma query to get orders from current week
};

exports.getThisMonthOrdersService = async () => {
    // TODO: Write Prisma query to get orders from current month
};

exports.getOrdersLast30DaysService = async () => {
    // TODO: Write Prisma query to get orders from last 30 days
};

exports.getRecentRegistrationsService = async (days) => {
    // TODO: Write Prisma query to get users registered in last X days
};

exports.getOrdersHourlyDistributionService = async (date) => {
    // TODO: Write Prisma query using groupBy on hour for specific date
};

exports.getMonthlyOrderTrendService = async (year) => {
    // TODO: Write Prisma query using groupBy on month for specific year
};