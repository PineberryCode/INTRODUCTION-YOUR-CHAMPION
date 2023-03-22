
const express = require('express');
const server = require('./server/config');

const _app = server(express());

_app.listen(_app.get('port'), () => {
    console.log('Server running on port', _app.get('port'));
})
