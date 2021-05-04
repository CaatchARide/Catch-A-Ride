const express = require('express');
const mongoose = require('mongoose');
const user = require('./models/userSchema');
const dotenv = require("dotenv");
//const passport = require('passport');
//const flash = require('express-flash');

//passport
//const initializePassport = require('./middleware/passport-config');
//initializePassport(passport, 
    //email => users.find(user => user.email === email)
//)

//const users = []

//  routes
const userRoutes = require('./routes/auth');
const contactRoutes = require('./routes/contact');
const tripRoutes = require('./routes/Trip');
const requestRoutes = require('./routes/request')


const app = express();




// BodyParser Middleware
app.use(express.json());


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

// Use the router file
app.use(require('./routes/auth', userRoutes));
app.use(require('./routes/contact', contactRoutes));
app.use(require('./routes/Trip', tripRoutes));
app.use(require('./routes/request', requestRoutes));





app.get('/', (req, res) => {
    res.send(`Hello world from server`);

});


app.get('/contact', (req, res) => {
    res.send(`Hello contact world from server`);

});

app.get('/signin', (req, res) => {
    res.send(`Hello signin world from server`);

});

app.get('/signup', (req, res) => {
    res.send(`Hello signup world from server`);

});


const PORT = process.env.PORT || 9000;

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));

