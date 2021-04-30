const express = require('express');
const router = express.Router();
const { response } = require('express');

const contact = require('../models/contactSchema');

router.get('/contacts', async (req, res,) => {
    
    try{
        const contacts = await contact.find();
        if(!contacts) throw Error('Not a valid user');
        res.status(200).json(contacts); // Everything is okay
    } catch(err) {
        res.status(400).json({ error: "error" })

    }
});

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
module.exports = router;