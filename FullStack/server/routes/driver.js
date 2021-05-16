const express = require('express');
const router = express.Router();
const { response } = require('express');

const driverDetails = require('../models/driverDetailsSchema');

/*
author: Varun Chandan
*/



router.post('/driverdetails', async (req, res,) => {

    try{
        const { license, plateNumber } = req.body;

        if(!license || !plateNumber ){
            return res.status(422).json({ error: "Please fill all the information"})
        }
     

            const newDetails = new driverDetails({ numberOfPassengers, numberOfBags, preferences, additionalInfo });

            //pre save it's the middleware

            await newDetails.save();

            res.status(201).json({ message: "Thank you for reaching out!"});
        
    } catch(err){
        res.status(400).json({ error: "Error" });
    }
    
    
});

module.exports = router;