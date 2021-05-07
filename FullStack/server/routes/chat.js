const express = require('express');
const router = express.Router();
const { response } = require('express');

const chat = require('../models/chatSchema');

router.get('/messaging', async (req, res,) => {
    
    try{
        const chats = await chat.find();
        console.log(chats)
        if(!chats) throw Error('Not a valid user');
        res.status(200).json(chats); // Everything is okay
    } catch(err) {
        res.status(400).json({ error: "error" })

    }
});

router.post('/messaging', async (req, res,) => {
    
    
    try{
        const { message } = req.body;

        if(!message ){
            return res.status(422).json({ error: "Please type a message"})
        }
     

            const newChat = new chat({ message });

            //pre save it's the middleware

            await newChat.save();

            res.status(201).json({ message: "Thank you for message!"});
        
    } catch(err){
        res.status(400).json({ error: "Error" });
    }
    
    
});
module.exports = router;