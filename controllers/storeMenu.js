const path = require('path')
const Menu = require('../database/models/Menu')

const storeMenu = (req, res) => {
    const data = {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price
    }

    Menu.create(data, (error, menu) => {
        if (error) {
            return res.json({
                success: false,
                message: error
            })
        } else {
            return res.json({
                success: true,
                message: menu
            })
        }
    })
}

module.exports = storeMenu