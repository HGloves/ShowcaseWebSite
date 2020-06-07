require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors')

var ContactController = require('./contact/ContactController');
var FacebookController = require("./facebook/FacebookController")

const ContactController = require('./contact/ContactController');
app.use(cors())
app.use(ContactController);
app.use(FacebookController);

module.exports = app;
