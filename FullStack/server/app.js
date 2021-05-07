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
const chatRoutes = require('./routes/chat');


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
app.use(require('./routes/chat', chatRoutes));








const PORT = process.env.PORT || 9000;

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));

