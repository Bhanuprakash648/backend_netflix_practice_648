import express from 'express';

const app=express(); 
app.use(express.json());
app.listen(PORT,()=>{
        console.log(`APP is listening to port: ${PORT}`); 
});
