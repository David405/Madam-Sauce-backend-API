const mongoose = require('mongoose');
const Menu = require('../database/models/Menu');
const menuData = { title: 'nsala soup', description: 'chicken nsala soup', price: 60 };

describe('Menu Model Test', () => {
    beforeAll(async() => {
        await mongoose.connect('mongodb://localhost:27017/madam-sauce', { useNewUrlParser: true, useCreateIndex: true }, (err) => {
            if (err) {
                console.log(err);
                process.exit(1);
            }
        })
    })
    it('create and stores menu successfully', async() => {
        const validMenu = new Menu(menuData);
        const savedMenu = await validMenu.save();

        expect(savedMenu._id).toBeDefined();
        expect(savedMenu.title).toBe(menuData.title);
        expect(savedMenu.description).toBe(menuData.description);
        expect(savedMenu.price).toBe(menuData.price);

    })
})