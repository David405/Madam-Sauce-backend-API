const User = require('../database/models/User')

const storeUser = (req, res) => {
    const data = {
        username: req.body.username,
        password: req.body.password
    }

    User.create(data, (error, user) => {
        if (error) {
            return res.json({
                success: false,
                error: error
            })
        } else {
            return res.json({
                success: true,
                message: user
            })
        }
    })
}

module.exports = storeUser