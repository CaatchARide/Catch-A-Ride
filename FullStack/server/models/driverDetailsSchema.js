const mongoose = require('mongoose');


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