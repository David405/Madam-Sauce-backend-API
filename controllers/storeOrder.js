const Order = require('../database/models/Order')

const storeOrder = (req, res) => {
    const data = {
        name: req.body.name,
        quantity: req.body.quantity,
        address: req.body.address,
        menu: req.params.id
    }

    Order.create(data, (error, order) => {
        if (error) {
            return res.json({
                success: false,
                error: error
            })
        } else {
            return res.json({
                success: true,
                message: order
            })
        }
    })
}

module.exports = storeOrder