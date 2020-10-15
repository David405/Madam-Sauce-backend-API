const Menu = require('../database/models/Menu')

module.exports = async(req, res) => {
    const menu = await Menu.find({})
    res.render('index', {
        menu
    });
}