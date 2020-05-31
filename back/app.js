var express = require('express');
var app = express();
var cors = require('cors')


var ContactController = require('./contact/ContactController');
app.use(cors())
app.use(ContactController);

module.exports = app;
