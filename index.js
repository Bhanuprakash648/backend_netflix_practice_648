import express from 'express';
import {PORT,mongoDBURL} from "./cofig.js";
import mongoose from 'mongoose';
import {Book} from './models/bookModel.js'; 
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';
const app=express(); 
app.use(express.json());
app.listen(PORT,()=>{
        console.log(`APP is listening to port: ${PORT}`); 
});
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET','POST','PUT','DELETE','PATCH'],
    allowedHeaders: ['Content-Type'],
}));

app.get('/',(request ,response) => {
    console.log(request);
    return response.status(234).send("welcome To mern stack tutorials");
});

app.use('/books',booksRoute);
mongoose.connect(mongoDBURL).then(()=>{
    console.log("app connected to database");
}).catch((error)=>{
    console.log(error);
});
