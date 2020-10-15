const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({
    image: String,
    title: String,
    description: String,
    price: String
});

const Menu = mongoose.model('Menu', MenuSchema);

module.exports = Menu;