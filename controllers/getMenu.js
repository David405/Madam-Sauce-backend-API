const Menu = require('../database/models/Menu')

module.exports = async(req, res) => {
    const menu = await Menu.findById(req.params.id);
    res.render('menu', {
        menu
    });
}