const Order = require('../database/models/Order')

const getOrder = (req, res) => {
    Order.find({ menu: req.params.id }, (error, orders) => {
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

module.exports = getOrder