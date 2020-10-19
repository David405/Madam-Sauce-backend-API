const { MongoClient } = require('mongodb');

describe('insert', () => {
    let connection;
    let db;

    beforeAll(async() => {
        connection = await MongoClient.connect('mongodb://localhost:27017/', {
            useNewUrlParser: true,
        });
        db = await connection.db('madam-sauce');
    });

    afterAll(async() => {
        await connection.close();
        await db.close();
    });

    it('should insert a menu into collection', async() => {
        const menus = db.collection('menus');

        const mockMenu = { title: 'chicken pepper soup', description: 'Chicken pepper soup with Heineken', price: 5 };
        await menus.insertOne(mockMenu);

        const insertedMenu = await menus.findOne({ title: 'chicken pepper soup' });
        expect(insertedMenu).toEqual(mockMenu);
    });
});