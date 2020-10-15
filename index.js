const path = require('path');
const { config, engine } = require('express-edge');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const expressSession = require('express-session');
const connectMongo = require('connect-mongo')

const createMenuController = require('./controllers/createMenu')
const getAllMenuController = require('./controllers/getMenu')
const storeMenuController = require('./controllers/storeMenu')
const createUserController = require('./controllers/createUser')
const storeUserController = require('./controllers/storeUser')
const loginController = require('./controllers/login')
const loginUserController = require('./controllers/loginUser')

const app = new express();

app.use(expressSession({
    secret: 'secret'
}));

mongoose.connect('mongodb://localhost:27017/madam-sauce', { useNewUrlParser: true })
    .then(() => 'You are now connected to Mongo!')
    .catch(err => console.error('Something went wrong', err))

const mongoStore = connectMongo(expressSession);

app.use(expressSession({
    secret: 'secret',
    store: new mongoStore({
        mongooseConnection: mongoose.connection
    })
}));

app.use(fileUpload());
app.use(express.static('public'));
app.use(engine);
app.set('views', __dirname + '/views');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));

const storeMenu = require('./middleware/storeMenu')
app.use('/menu/store', storeMenu);
app.get('/', getAllMenuController);
app.get('/menu/new', createMenuController);
app.post('/menu/store', storeMenuController);
app.get('/auth/login', loginController);
app.post('/users/login', loginUserController);
app.get('/auth/register', createUserController);
app.post('/users/register', storeUserController);

app.listen(4000, () => {
    console.log('App listening on port 4000')
});