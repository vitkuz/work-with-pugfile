require('dotenv').config()
const path = require('path');
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();

const apiRoutes = require('./routes/api/index');
const appRoutes = require('./routes/app/index');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;
const enviroment = process.env.NODE_ENV || 'development';

app.get('/', (req, res, next) => {
    res.render('layout', { title: 'Home page' })
});

app.set('trust proxy', 1) // trust first proxy
app.use(session({
    secret: process.env.EXPRESS_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(require('./middlewares/createBodyClasses'));
app.use(require('./middlewares/showSession'));


app.use('/', appRoutes);
app.use('/api/v1', apiRoutes);


app.listen(PORT, () => {
    console.log(`
    ---------------------------
    App running on ${PORT} in ${enviroment}:
        process.env.PORT: ${process.env.PORT}
        process.env.NODE_ENV: ${process.env.NODE_ENV}
        process.env.EXPRESS_SECRET: ${process.env.EXPRESS_SECRET}
    `)
    
});
