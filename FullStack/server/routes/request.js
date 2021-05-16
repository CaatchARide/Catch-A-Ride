const express = require('express');
const router = express.Router();
const { response } = require('express');
const request = require('../models/requestSchema');

/*
author: Varun Chandan
*/

// End point for getting the trip
router.get('/trips', async (req, res,) => {
    
    try{
        const trips = await trip.find();
        if(!trips) throw Error('Not a valid user');
        res.status(200).json(trips); // Everything is okay
    } catch(err) {
        res.status(400).json({ error: "error" })

    }
});

// End point for posting the trip to the database

router.post('/makerequest', async (req, res,) => {

    try{
        const { numberOfPassengers, numberOfBags, preferences, additionalInfo } = req.body;

        if(!numberOfPassengers || !numberOfBags || !preferences || !additionalInfo){
            return res.status(422).json({ error: "Please fill all the information"})
        }
            const newRequest = new request({ numberOfPassengers, numberOfBags, preferences, additionalInfo });

            //pre save it's the middleware

            await newRequest.save();

            res.status(201).json({ message: "Thank you for reaching out!"});
        
    } catch(err){
        res.status(400).json({ error: "Error" });
    }
    
    
});


// End point for get the data from the database
router.get('/makerequest', async (req, res,) => {
    try{
        const post = await request.find({});
        if(!post) throw Error(' No Items');
        res.status(200).json(post); // Everything is okay
    } catch(err) {
        res.status(400).json({ msg: err })

    }
});
module.exports = router;