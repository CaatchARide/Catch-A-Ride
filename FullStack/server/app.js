const express = require('express');
const mongoose = require('mongoose');
const user = require('./models/userSchema');
const dotenv = require("dotenv");

// User route
const userRoutes = require('./routes/auth');
const contactRoutes = require('./routes/contact');
const tripRoutes = require('./routes/Trip');


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


// Middleware 

const middleware = (req, res, next) => {
    console.log(`Hello my middleware`);
}

middleware();

app.get('/', (req, res) => {
    res.send(`Hello world from server`);

});
app.get('/about', middleware, (req, res) => {
    res.send(`Hello about world from server`);

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


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));

