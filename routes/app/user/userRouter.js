const express = require('express');
const router = express.Router();

router.get('/user', (req, res, next) => {
    res.redirect('/user/dashboard');
});

router.get('/user/dashboard', (req, res, next) => {
    console.log(req.bodyClasses);
    res.render('user/dashboard', { title: 'Dashboard', classes:req.bodyClasses });
});

router.get('/user/products', (req, res, next) => {
    res.render('user/products', { title: 'Products' })
});

router.get('/user/history', (req, res, next) => {
    res.render('user/history', { title: 'History' })
});

router.get('/user/messages', (req, res, next) => {
    res.render('user/messages', { title: 'Messages' })
});

router.get('/user/favorites', (req, res, next) => {
    res.render('user/favorites', { title: 'Favorites' })
});

router.get('/user/login', (req, res, next) => {
    res.render('user/login', { title: 'login' })
});

router.get('/user/register', (req, res, next) => {
    res.render('user/register', { title: 'register' })
});

router.get('/user/password', (req, res, next) => {
    res.render('user/password', { title: 'password' })
});

router.get('/user/password/reset', (req, res, next) => {
    res.render('user/passwordReset', { title: 'passwordReset' })
});

module.exports = router;
