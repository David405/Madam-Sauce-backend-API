const path = require('path');
const { config, engine } = require('express-edge');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Menu = require('./database/models/Menu');

const app = new express();

mongoose.connect('mongodb://localhost:27017/madam-sauce', { useNewUrlParser: true })
    .then(() => 'You are now connected to Mongo!')
    .catch(err => console.error('Something went wrong', err))

app.use(express.static('public'));
app.use(engine);
app.set('views', __dirname + '/views');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', async(req, res) => {
    const menu = await Menu.find({})
    res.render('index', {
        menu
    });
})

app.get('/menu/new', (req, res) => {
    res.render('create')
})

app.post('/menu/store', (req, res) => {
    Menu.create(req.body, (error, post) => {
        console.log(req.body)
        res.redirect('/')
    })
});

app.listen(4000, () => {
    console.log('App listening on port 4000')
});