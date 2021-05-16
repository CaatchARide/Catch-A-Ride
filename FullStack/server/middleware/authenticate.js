const jwt = require('jsonwebtoken');
const user = require("../models/userSchema");
const express = require('express');
const router = express.Router();

// This function will authorize and verify the token in the cookie and keep the user logged in
const Authenticate = async (req, res, next) => {
    try{
        const token = req.cookie.jwtoken;
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

        const rootUser = await user.findOne({ _id:verifyToken._id, "tokens.token": token });

        if(!rootUser) { throw new error('User not found') }

        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;

        next();


    } catch(err) {
        res.status(401).send('Unauthorized: No token provided');
        console.log(err);
    }
}

const isAuth = (req, res, next) => {
    if(req.session.isAuth){
        next()
    } else {
        res.redirect('/signin')
    }
}



module.exports = Authenticate;