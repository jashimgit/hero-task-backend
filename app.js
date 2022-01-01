import cors from 'cors';
import express from 'express';
import connectWithDB from './mongoManager';
import dotenv from 'dotenv';
import routes from './routes';

dotenv.config();

const app = express();

// initialize port number
const port = process.env.PORT || 8000;

// connect with database with ORM

// midddleware handler

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));



// auth routes
app.use('/auth', routes.authRoute)


// root route

app.get('/', (req, res)=> {
    res.send('Welcome to Hero Rider backend')
})


app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`);
})