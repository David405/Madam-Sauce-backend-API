const User = require('../database/models/User')

module.exports = (req, res) => {
    const data = {
        username: req.body.username,
        password: req.body.password
    }

    User.create(data, (error, user) => {
        if (error) {
            return res.redirect('/auth/register')
        }
        res.redirect('/')
    })
}