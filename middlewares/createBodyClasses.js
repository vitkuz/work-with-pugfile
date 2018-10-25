module.exports = (req, res, next) => {
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    req.bodyClasses = req.originalUrl.split('/');
    res.locals.bodyClasses = req.originalUrl.split('/');
    next();
};
