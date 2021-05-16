const express = require('express');
const router = express.Router();
const { response } = require('express');
const Authenticate = require("../middleware/authenticate");
const contact = require('../models/contactSchema');
const sendEmail = require('../utils/sendEmail');


router.get('/contacts', async (req, res,) => {
    
    try{
        const contacts = await contact.find();
        if(!contacts) throw Error('Not a valid user');
        res.status(200).json(contacts); // Everything is okay
    } catch(err) {
        res.status(400).json({ error: "error" })

    }
});

// End point for storing the  messages
router.post('/message', async (req, res,) => {
    try{
        const { name, email, message } = req.body;
        if(!name || !email || !message ){
            return res.status(422).json({ error: "Please fill all the information"})
        }
            const newContact = new contact({ name, email, message });

            //pre save it's the middleware

            await newContact.save();

            res.status(201).json({ message: "Thank you for reaching out!"});
        
    } catch(err){
        res.status(400).json({ error: "Error" });
    }
    
    
});


// End point for the  trying sending emails to the users
router.post('/sendemail', async (req, res,) => {
    try{
        const {name, email, message }  = req.body;
        console.log("test")
        const from = "catcharideemail@gmail.com";
        console.log("test1")
        const to = {email};
        console.log("test2")
        const subject = "No-Reply-Catch-A-Ride";
        console.log("test3")

        const output = `
        <p> We have a new message for you </p>
        <br />
        ${name}
        ${message} `;
        console.log("test7")

        sendEmail(from, to, subject, output);
        console.log("test09")

    } catch(err){
        console.log("Error");
    }
    


})
module.exports = router;