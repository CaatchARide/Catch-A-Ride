const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Authenticate = require("../middleware/authenticate");
const passport = require('passport');
const user = require('../models/userSchema');
const config = require('../middleware/database');

/*
author: Varun Chandan
*/


// This is the endpoint for getting the data
router.get('/', async (req, res,) => {
    try{
        const users = await user.find();
        if(!users) throw Error('Not a valid user');
        res.status(200).json(users); // Everything is okay
    } catch(err) {
        res.status(400).json({ msg: err })

    }
});

// This is where we get the user from client and store it in the database

router.post('/register', async (req, res,) => {
    try{
        const { firstName, lastName, dateOfBirth, email, password, cpassword } = req.body;

        if(!firstName || !lastName || !dateOfBirth || !email || !password || !cpassword ){
            return res.status(400).json({ error: "Please fill all the information"})
        }

        // This method checks if the email exists
        const userExist = await user.findOne({ email: email });
        
        if(userExist) {
            return res.status(400).json({ error: "Email already exists"});
        
        } else if(password != cpassword ){
            return res.status(400).json({ error: "password do not match"});
        
        } else {

            const newUser = new user({ firstName, lastName, dateOfBirth, email, password, cpassword });

            //pre save it's the middleware

            await newUser.save();

            res.status(201).json({ message: "User registered successfully"});
        }
    } catch(err){
        res.status(400).json({ error: "Error" });
    }
    
    
});
        
    // This is for the user log in end point for the backend
    router.post('/signin', async(req, res) => {
        try{
            let token;
            
            const { email, password } = req.body;
    
            if(!email || !password){
                return res.status(400).json({ error: "Please fill the data"});
            }
    
            const userLogin = await user.findOne({ email: email });
    
            if(userLogin){
                const isMatch = await bcrypt.compare(password, userLogin.password);
    
                token = await userLogin.generateAuthToken();
                console.log(token);
    
                res.cookie('jwtoken', token, {
                    expires: new Date(Date.now() + 25892000000),
                    httpOnly: true
                });
                
    
                if(!isMatch){
                    res.status(400).json({ error: "Invalid credentials"});
                } else{
                    res.json({ message: "Successfully signed in"});
                }
            } else {
                res.status(400).json({ error: "Invalid credentials"});
            }

            
    
            
    
           
            
        } catch(err){
            res.status(400).json({ error: "error" });
        }
    });






router.get('/switchpage', (req, res) => {
    console.log(`Welcome to catch a ride`)
    res.send(req.rootUser);

});

router.get('/register', async (req, res,) => {
    
    try{
        const post = await user.findOne({});
        if(!post) throw Error(' No Items');
        res.status(200).json(post); // Everything is okay
    } catch(err) {
        res.status(400).json({ msg: err })

    }
});




module.exports = router;