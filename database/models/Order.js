const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    id: String,
    quantity: String,
    address: String,
});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;