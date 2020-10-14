const path = require('path');
const { config, engine } = require('express-edge');
const express = require('express');
const mongoose = require('mongoose');

const app = new express();

mongoose.connect('mongodb://localhost:27017/madam-sauce', { useNewUrlParser: true })
    .then(() => 'You are now connected to Mongo!')
    .catch(err => console.error('Something went wrong', err))

app.use(express.static('public'));
app.use(engine);
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/createorder', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/order.html'));
})

app.listen(4000, () => {
    console.log('App listening on port 4000')
});