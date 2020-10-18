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
                    return res.json({
                        success: true,
                        message: same
                    })
                } else {
                    return res.json({
                        success: false,
                        message: error
                    })
                }
            })
        } else {
            return res.json({
                success: false,
                message: error
            })
        }
    })
}

module.exports = loginUser