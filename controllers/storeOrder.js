const Order = require('../database/models/Order')

const storeOrder = (req, res) => {
    const data = {
        name: req.body.name,
        quantity: req.body.quantity,
        address: req.body.address,
        menu: req.params.id
    }

    Order.create(data, (error, post) => {
        if (error) {
            return res.json({
                success: false,
                error: error
            })
        } else {
            return res.json({
                success: true,
                message: post
            })
        }
    })
}

module.exports = storeOrder