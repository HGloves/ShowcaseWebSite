var express = require('express');
var app = express();

var ContactController = require('./contact/ContactController');

app.use(ContactController);

module.exports = app;