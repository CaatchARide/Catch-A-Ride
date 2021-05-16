const mongoose = require('mongoose');


/*
author: Varun Chandan
*/

const tripSchema = new mongoose.Schema({
 
    date: {
        type: String,
        required: true   
    },
    time: {
        type: String,
        required: true   
    },
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    numberOfPassengers: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
});

const trip = mongoose.model('trip', tripSchema);

module.exports = trip;