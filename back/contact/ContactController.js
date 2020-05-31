let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

router.use(bodyParser.urlencoded({ extended: true }));


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'hgloves.ftc@gmail.com',
        pass: 'gYFR84fe9'
    }
});

const mailOptions = {
	from: 'hgloves.ftc@gmail.com',
	to: 'hgloves.ftc@gmail.com',
	subject: 'Subject Title',
	text: 'This is from : '
};


router.post('/contact/mail/', function (req, res) {
	if (!req.body || !req.body.from || !req.body.subject || !req.body.html) {
		return res.status(400).send({msg : "Need a subject, a text and an emitter.", value : 0});
	}
	mailOptions.subject = "Mail de : " + req.body.from + " - " + req.body.subject;
	mailOptions.html =  req.body.html;

	transporter.sendMail(mailOptions, function (err, info) {
		if (!err)
			return res.status(200).send(info);
		return res.status(403).send(err);
	});
});

module.exports = router;
