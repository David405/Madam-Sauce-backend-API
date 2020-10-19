const path = require('path');
const { config, engine } = require('express-edge');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const expressSession = require('express-session');
const connectMongo = require('connect-mongo');

const getAllMenuController = require('./controllers/getMenu')
const storeMenuController = require('./controllers/storeMenu')
const storeUserController = require('./controllers/storeUser')
const loginUserController = require('./controllers/loginUser')
const storeOrderController = require('./controllers/storeOrder')
const getAllOrderController = require('./controllers/getAllOrder')
const getOrderController = require('./controllers/getOrder')
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
app.post('/menu/store', storeMenuController);
app.post('/users/login', redirectIfAuthenticated, loginUserController);
app.post('/users/register', redirectIfAuthenticated, storeUserController);
app.post('/order/store/:id', storeOrderController);
app.get('/order/get', getAllOrderController);
app.get('/order/get/:id', getOrderController);
app.get('/auth/logout', redirectIfAuthenticated, logoutController);

app.listen(4000, () => {
    console.log('App listening on port 4000')
});