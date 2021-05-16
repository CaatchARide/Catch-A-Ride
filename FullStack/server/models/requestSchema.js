const mongoose = require('mongoose');


/*
author: Varun Chandan
*/

const requestSchema = new mongoose.Schema({
 
    numberOfPassengers: {
        type: String,
        required: true   
    },
    numberOfBags: {
        type: String,
        required: true   
    },
    preferences: {
        type: String,
        required: true
    },
    additionalInfo: {
        type: String,
        required: true
    }
});

const request = mongoose.model('request', requestSchema);

module.exports = request;