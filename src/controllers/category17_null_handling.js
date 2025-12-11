const service = require('../services/category17_null_handling');

// NULL Checks (APIs 188-193)
exports.getMenuItemsWithoutDiscount = async (req, res) => {
    try {
        const data = await service.getMenuItemsWithoutDiscountService();
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getMenuItemsWithDiscount = async (req, res) => {
    try {
        const data = await service.getMenuItemsWithDiscountService();
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getOrdersWithoutDeliveryPartner = async (req, res) => {
    try {
        const data = await service.getOrdersWithoutDeliveryPartnerService();
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getOrdersPendingDelivery = async (req, res) => {
    try {
        const data = await service.getOrdersPendingDeliveryService();
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getDefaultAddresses = async (req, res) => {
    try {
        const data = await service.getDefaultAddressesService();
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getReviewsWithoutComment = async (req, res) => {
    try {
        const data = await service.getReviewsWithoutCommentService();
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};