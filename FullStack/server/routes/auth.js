const express = require('express');
const router = express.Router();
const { response } = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const user = require('../models/userSchema');



router.get('/', async (req, res,) => {
    
    try{
        const users = await user.find();
        if(!users) throw Error('Not a valid user');
        res.status(200).json(users); // Everything is okay
    } catch(err) {
        res.status(400).json({ msg: err })

    }
});

router.post('/register', async (req, res,) => {
    
    
    try{
        const { firstName, lastName, dateOfBirth, email, password, cpassword } = req.body;

        if(!firstName || !lastName || !dateOfBirth || !email || !password || !cpassword ){
            return res.status(422).json({ error: "Please fill all the information"})
        }
        const userExist = await user.findOne({ email: email });
        
        if(userExist) {
            return res.status(422).json({ error: "Email already exists"});
        
        } else if(password != cpassword ){
            return res.status(422).json({ error: "password do not match"});
        
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

            res.cookie("jwtoken", token, {
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




module.exports = router;