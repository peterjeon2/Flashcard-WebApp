import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import deckRoutes from './routes/decks.js';

dotenv.config()

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use('/', deckRoutes);
app.use(express.json());

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port; ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);