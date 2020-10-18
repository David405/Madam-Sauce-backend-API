const Menu = require('../database/models/Menu')

const getMenu = async(req, res) => {
    const menus = await Menu.find({})
    res.render('index', {
        menus
    });
}

module.exports = getMenu