const jwtoken = require('jsonwebtoken');
const user = require("../models/userSchema");
const express = require('express');
const router = express.Router();


const Authenticate = async (req, res, next) => {
    try{
        const token = req.cookie.jwtoken;
        const verifyToken = jwt.verify(process.env.SECRET_KEY, token);

        const rootUser = await user.findOne({ _id:verifyToken._id, "token.token": token });

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

module.exports = Authenticate;