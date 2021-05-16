require("dotenv").config();
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);


// Implementing Send Grid API
const sendEmail = (to, from, subject, output) => {

    const msg = {
        to,
        from,
        subject,
        output,
    };


    sgmail.send(msg, function(err, result){
        if (err) {
            console.log("Email not seen error occured");

        } else {
            console.log("Email was sent");
        }
    });
};

module.exports = sendEmail;