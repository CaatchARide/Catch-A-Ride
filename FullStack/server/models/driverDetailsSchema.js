const mongoose = require('mongoose');

/*
author: Varun Chandan
*/

const driverDetailsSchema = new mongoose.Schema({
 
    license: {
        type: String,
        required: true   
    },
    plateNumber: {
        type: String,
        required: true   
    }
   
});

const driverDetails = mongoose.model('driverDetails', driverDetailsSchema);

module.exports = driverDetails;