const express = require('express');
const mongoose = require('mongoose');
const user = require('./models/userSchema');
const dotenv = require('dotenv');
const session = require('express-session');
const MongoDbSession = require('connect-mongodb-session')(session);
const cookieParser = require('cookie-parser')

//const MongoStore = require('connect-mongo');

const passport = require('passport');
const path = require('path');

//const flash = require('express-flash');

//passport
//const initializePassport = require('./middleware/passport-config');
//initializePassport(passport, 
    //email => users.find(user => user.email === email)
//)



//  routes
const userRoutes = require('./routes/auth');
const contactRoutes = require('./routes/contact');
const tripRoutes = require('./routes/Trip');
const requestRoutes = require('./routes/request')
const chatRoutes = require('./routes/chat');
const detailsRoutes = require('./routes/driver');


const app = express();








// BodyParser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(cookieParser());

//Passport middleware
app.use(passport.initialize());
app.use(passport.session());


// connect to MongoDB
dotenv.config({ path: './config.env' });
const DB = process.env.DATABASE;
mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(() => {console.log('MongoDB connected!')
})
.catch(err => console.log(err));

// Express session 
const store = new MongoDbSession({
    uri: process.env.DATABASE,
    collection: "userSessions"

})

app.use(session({
    secret: 'some secret',
    resave: false,
    saveUninitialized: false,
    store: store,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }


}))


// Use the router file
app.use(require('./routes/auth', userRoutes));
app.use(require('./routes/contact', contactRoutes));
app.use(require('./routes/Trip', tripRoutes));
app.use(require('./routes/request', requestRoutes));
app.use(require('./routes/chat', chatRoutes));
app.use(require('./routes/driver', detailsRoutes));





// Bring in the passport authentication strategy 
require('./middleware/passport-config')(passport);


const PORT = process.env.PORT || 9000;

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));

