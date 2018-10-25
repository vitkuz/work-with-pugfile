module.exports = (req, res, next) => {
    console.log(`${req.originalUrl} --> ${req.session.toString()}`);
    console.log(req.session);
    next();
};
