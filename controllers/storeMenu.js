const path = require('path')
const Menu = require('../database/models/Menu')

module.exports = (req, res) => {
    const {
        image
    } = req.files

    image.mv(path.resolve(__dirname, 'public/images', image.name), (error) => {
        Menu.create({
            ...req.body,
            image: `/images/${image.name}`

        }, (error, post) => {
            console.log(req.body)
            res.redirect('/')
        })
    })
}