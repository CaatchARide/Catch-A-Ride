const express = require('express');
const router = express.Router();
const { response } = require('express');
const passport = require('passport');
const Authenticate = require('../middleware/authenticate')

const trip = require('../models/tripSchema');

router.get('/trips', Authenticate, async (req, res,) => {
    
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
        const { date, time, from, to, price, numberOfPassengers, message} = req.body;

        if(!date || !time || !from || !to || !price || !numberOfPassengers || !message){
            return res.status(422).json({ error: "Please fill all the information"})
        }
     

            const newTrip = new trip({ date, time, from, to, price, numberOfPassengers, message });

            //pre save it's the middleware

            await newTrip.save();

            res.status(201).json({message: "Thank you for reaching out!"});
        
    } catch(err){
        res.status(400).json({ error: "Error" });
    }
    
    
});

router.get('/booking', async (req, res,) => {
    
    try{
        const post = await trip.find();
        
        if(!post) throw Error(' No Items');
        res.status(200).json(post); // Everything is okay
    } catch(err) {
        res.status(400).json({ msg: err })

    }
});


module.exports = router;