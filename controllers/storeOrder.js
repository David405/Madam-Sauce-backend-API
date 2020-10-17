const Order = require('../database/models/Order')

module.exports = (req, res) => {
    const data = {
        name: req.body.name,
        quantity: req.body.quantity,
        address: req.body.address,
        menu: req.params._id
    }

    Order.create(data, (error, post) => {
        console.log(data)
        res.redirect('/')
    })
}