import express from 'express';

const app=express(); 
app.use(express.json());
app.listen(5000,()=>{
        console.log("APP is listening to port: 5000"); 
});
