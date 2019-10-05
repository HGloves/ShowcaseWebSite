let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ftcfirtreecorp@gmail.com',
        pass: 'hytVND25'
    }
});

const mailOptions = {
    from: 'hugo.codinach@epitech.eu', // sender address
    to: 'ftcfirtreecorp@gmail.com', // list of receivers
    subject: '[TEST]', // Subject line
    html: '<p>Coucou puceau</p>'// plain text body
};

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
router.use(bodyParser.urlencoded({ extended: true }));


router.post('/contact/mail/', function (req, res) {
    transporter.sendMail(mailOptions, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info);
     });
    // if (!req.body.user || !req.body.pass)
    //     return res.status(400).send({ msg: "Need an user and a pass." });
    // User.find({ "user": req.body.user }, (err, users) => {
    //     if (users[0])
    //         return res.status(403).send({ msg: "Login already used." });
    //     let newToken = Math.floor(Math.random() * Math.floor(999999999999999)).toString();
    //     User.insert({
    //         user: req.body.user,
    //         pass: req.body.pass,
    //         token: newToken,
    //         creationDate: new Date(),
    //     },
    //     function (err, user) {
    //         if (err) return res.status(500).send({ msg: "There was a problem adding the information to the database."});
    //         res.status(200).send(user);
    //     });
    // });
});

module.exports = router;