const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const user = require('../models/userSchema');
const config = require('../middleware/database');

// To authenticate the user by jwt strategy
module.exports= (passport) => {
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
    opts.secretOrKey = config.secret;
    passport.use(new JwtStrategy(opts,(jwt_payload, done) => {
        user.getUserById(jwt_payload.data._id, (err, user) => {
            if(err) return done(err, false);
            if(user) return done(null, user);
            return done(null, false);

        });
    }));
}