const Menu = require('../database/models/Menu')

module.exports = async(req, res) => {
    const menus = await Menu.find({})
    res.render('index', {
        menus
    });
}