const express = require('express');
const router = express.Router();
const { response } = require('express');

const trip = require('../models/tripSchema');

router.get('/trips', async (req, res,) => {
    
    try{
        const trips = await trip.find();
        if(!trips) throw Error('Not a valid user');
        res.status(200).json(trips); // Everything is okay
    } catch(err) {
        res.status(400).json({ error: "error" })

    }
});

router.post('/booking', async (req, res,) => {
    
    
    try{
        const { time, from, to, price, numberOfPassengers} = req.body;

        if(!time || !from || !to || !price || !numberOfPassengers){
            return res.status(422).json({ error: "Please fill all the information"})
        }
     

            const newTrip = new trip({ time, from, to, price, numberOfPassengers });

            //pre save it's the middleware

            await newTrip.save();

            res.status(201).json({ message: "Thank you for reaching out!"});
        
    } catch(err){
        res.status(400).json({ error: "Error" });
    }
    
    
});
module.exports = router;