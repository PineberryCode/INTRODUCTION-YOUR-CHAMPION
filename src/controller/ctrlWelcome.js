
const ctrl = {};

ctrl.welcome = (request, response) => { //See: index or welcome
    response.render('welcome');
};

module.exports = ctrl;

//controller