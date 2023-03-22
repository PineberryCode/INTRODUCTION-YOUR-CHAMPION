
const express = require('express');
const router = express.Router();

const main = require('../controller/ctrlWelcome');
const aboutMe = require('../controller/ctrlAbout');
const donate = require('../controller/ctrlDonations');

module.exports = app => {
    router.get('/', main.welcome);
    router.get('/about', aboutMe.about);
    router.get('/donate', donate.donations);
    app.use(router);
}

//welcome to routes of the web page views
//routes