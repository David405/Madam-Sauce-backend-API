const bcrypt = require('bcrypt')
const User = require('../database/models/User')

const loginUser = (req, res) => {
    const {
        username,
        password
    } = req.body;

    User.findOne({
        username
    }, (error, user) => {
        if (user) {
            bcrypt.compare(password, user.password, (error, same) => {
                if (same) {
                    req.session.userId = user._id
                    res.redirect('/')
                    console.log(username)
                } else {
                    res.redirect('/auth/login')
                }
            })
        } else {
            return res.redirect('/auth/login')
        }
    })
}

module.exports = loginUser