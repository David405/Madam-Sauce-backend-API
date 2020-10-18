const Order = require('../database/models/Order')

const getAllOrder = (req, res) => {
    Order.find({}, (error, orders) => {
        if (error) {
            return res.json({
                success: false,
                message: error
            })
        } else {
            return res.json({
                success: true,
                message: orders
            })
        }
    }).populate('menu')
}

module.exports = getAllOrder