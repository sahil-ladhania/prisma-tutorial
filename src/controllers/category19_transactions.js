const service = require('../services/category19_transactions');

// Complex Operations Requiring Transactions (APIs 216-220)
exports.placeOrderTransaction = async (req, res) => {
    try {
        const data = await service.placeOrderTransactionService(req.body);
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.deleteRestaurantCascade = async (req, res) => {
    try {
        const data = await service.deleteRestaurantCascadeService(parseInt(req.params.id));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.cancelOrderTransaction = async (req, res) => {
    try {
        const data = await service.cancelOrderTransactionService(parseInt(req.params.id));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.registerUserTransaction = async (req, res) => {
    try {
        const { userData, addressData } = req.body;
        const data = await service.registerUserTransactionService(userData, addressData);
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.completeOrderTransaction = async (req, res) => {
    try {
        const data = await service.completeOrderTransactionService(parseInt(req.params.id));
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};