const path = require('path');
const { config, engine } = require('express-edge');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const expressSession = require('express-session');
const connectMongo = require('connect-mongo');

const createMenuController = require('./controllers/createMenu')
const getAllMenuController = require('./controllers/getMenu')
const storeMenuController = require('./controllers/storeMenu')
const createUserController = require('./controllers/createUser')
const storeUserController = require('./controllers/storeUser')
const loginController = require('./controllers/login')
const loginUserController = require('./controllers/loginUser')
const createOrderController = require('./controllers/createOrder')
const storeOrderController = require('./controllers/storeOrder')
const logoutController = require('./controllers/logout')

const app = new express();

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

const storeMenu = require('./middleware/storeMenu');
const auth = require('./middleware/auth');
const redirectIfAuthenticated = require('./middleware/redirectIfAuthenticated');

app.use('/menu/store', storeMenu);
app.get('/', getAllMenuController);
app.get('/menu/new', createMenuController);
app.post('/menu/store', storeMenuController);
app.get('/auth/login', redirectIfAuthenticated, loginController);
app.post('/users/login', redirectIfAuthenticated, loginUserController);
app.get('/auth/register', redirectIfAuthenticated, createUserController);
app.post('/users/register', redirectIfAuthenticated, storeUserController);
app.get('/order/new/:id', createOrderController);
app.post('/order/store', storeOrderController);
app.get('/auth/logout', redirectIfAuthenticated, logoutController);

app.listen(4000, () => {
    console.log('App listening on port 4000')
});