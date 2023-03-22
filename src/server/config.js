
const path = require('path');
const express = require('express');
const expressHandlebars = require('express-handlebars');
const errorHandler = require('errorhandler');
const routes = require('../routes/main');

module.exports = app => {
    app.set('port', process.env.PORT || 8000);
    app.set('views', path.join(__dirname, '../view'));
    app.engine('.hbs', expressHandlebars.engine({
        defaultLayout: 'main',
        partialsDir: path.join(app.get('views'), 'partials'),
        layoutsDir: path.join(app.get('views'), 'layouts'),
        extname: '.hbs'
    }));

    app.set('view engine', '.hbs');
    /*===*Middlewares*===*/
    //app.use(express.urlencoded({extended: false}));
    //app.use(express.json());

    app.use('/public', express.static(path.join(__dirname, '../public')));
    /*===*===========*===*/
    routes(app);

    /*if ('development' === app.get('env')) {
        app.use(errorHandler);
    }*/

    return app;
};