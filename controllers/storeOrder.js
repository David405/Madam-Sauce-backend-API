const Order = require('../database/models/Order')

module.exports = (req, res) => {
    Order.create(req.body, (error, post) => {
        res.redirect('/')
    })
}