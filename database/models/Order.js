const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    name: String,
    quantity: Number,
    address: String,

});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;