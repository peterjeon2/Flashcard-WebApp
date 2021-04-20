import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import deckRoutes from './routes/decks.js';
import authRoutes from './routes/auth.js';
import passportFunc from './config/passport.js'
import passport from 'passport'
import session from 'express-session'

// Load config
dotenv.config({ path: './config/config.env' })

// Passport config
passportFunc(passport);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    next()
})

//Sessions
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false

}))

//Passport middleware 
app.use(passport.initialize());
app.use(passport.session());

app.use('/', deckRoutes);
app.use('/auth', authRoutes);

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port; ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);