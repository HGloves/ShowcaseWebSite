let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
let axios = require("axios")

router.get('/facebook/feed/', function(req, res) {
    axios.get("https://graph.facebook.com/v7.0/HGlovesFTC/feed?access_token=2562126377364122|9Gk4eP4wWRBxeX442H8MHRQCnhA")
    .then(response => {
        return res.status(200).send(response);
    })
    .catch(error => {
        return res.status(400).send(error)
    })
})

module.exports = router;