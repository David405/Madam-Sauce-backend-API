const User = require('../database/models/User')

const storeUser = (req, res) => {
    const data = {
        username: req.body.username,
        password: req.body.password
    }

    User.create(data, (error, user) => {
        if (error) {
            return res.redirect('/auth/register')
        }
        console.log(data)
        res.redirect('/')
    })
}

module.exports = storeUser