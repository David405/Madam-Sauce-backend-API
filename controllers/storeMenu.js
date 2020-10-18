const path = require('path')
const Menu = require('../database/models/Menu')

const storeMenu = (req, res) => {
    const data = {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price
    }

    const {
        image
    } = req.files

    image.mv(path.resolve(__dirname, 'public/images', image.name), (error) => {

        Menu.create({
            ...data,
            image: `/images/${image.name}`
        }, (error, post) => {
            console.log(data)
            res.redirect('/')
        })
    })
}

module.exports = storeMenu