const Menu = require('../database/models/Menu')

const getMenu = async(req, res) => {
    Menu.find({}, (error, menu) => {
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

module.exports = getMenu