let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'hgloves.ftc@gmail.com',
        pass: 'hytVND25'
    }
});


router.post('/contact/mail/', function (req, res) {

    console.log(req.body);
    if (!req.body || !req.body.from || !req.body.to || !req.body.subject || !req.body.html)
        return;
    
    transporter.sendMail(req.body, function (err, info) {
        if (!err)
            res.status(200).send(info);
        else
            res.status(403).send(err);
     });
});

module.exports = router;