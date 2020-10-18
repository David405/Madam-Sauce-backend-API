module.exports = (req, res, next) => {
    if (!req.body.price || !req.body.title || !req.body.description || !req.body.price) {
        return res.redirect('/menu/new')
    }

    next()
}