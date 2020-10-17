const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    name: String,
    quantity: Number,
    address: String,
    menu: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Menu'
    }
});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;