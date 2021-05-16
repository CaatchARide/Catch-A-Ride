const mongoose = require('mongoose');


/*
author: Varun Chandan
*/

const contactSchema = new mongoose.Schema({
 
    name: {
        type: String,
        required: true   
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
});

const contact = mongoose.model('contact', contactSchema);

module.exports = contact;