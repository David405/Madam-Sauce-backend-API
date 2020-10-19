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

    it('should insert a user into collection', async() => {
        const users = db.collection('users');

        const mockUser = { username: 'admin', password: 'password' };
        await users.insertOne(mockUser);

        const insertedUser = await users.findOne({ username: 'admin' });
        expect(insertedUser).toEqual(mockUser);
    });
});