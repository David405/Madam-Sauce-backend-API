const path = require('path')
const Menu = require('../database/models/Menu')

module.exports = (req, res) => {
    const {
        image
    } = req.files

    const data = {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price
    }

    image.mv(path.resolve(__dirname, 'public/images', image.name), (error) => {
        Menu.create({
            ...data,
            image: `/images/${image.name}`

        }, (error, post) => {
            console.log(req.body)
            res.redirect('/')
        })
    })
}