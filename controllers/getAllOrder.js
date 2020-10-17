const allOrder = require('../database/models/Order')

module.exports = async(req, res) => {
    const orders = await allOrder.find({})
    res.render('orders', {
        orders
    });
}