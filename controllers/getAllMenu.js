const allMenu = require('../database/models/Menu')

module.exports = async(req, res) => {
    const menus = await allMenu.find({})
    res.render('index', {
        menus
    });
}