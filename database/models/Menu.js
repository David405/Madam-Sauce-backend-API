const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number
});

const Menu = mongoose.model('Menu', MenuSchema);

module.exports = Menu;