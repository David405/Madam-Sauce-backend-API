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

    it('should insert an order into collection', async() => {
        const orders = db.collection('orders');

        const mockOrder = { name: 'David', quantity: 4, address: 'Warri' };
        await orders.insertOne(mockOrder);

        const insertedOrder = await orders.findOne({ name: 'David' });
        expect(insertedOrder).toEqual(mockOrder);
    });
});