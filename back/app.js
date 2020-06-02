require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors')

const ContactController = require('./contact/ContactController');
app.use(cors())
app.use(ContactController);

module.exports = app;
