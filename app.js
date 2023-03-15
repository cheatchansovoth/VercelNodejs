const express =require('express');
const app=express();
require('dotenv').config()

app.use(express.json());

app.get('/',(req,res)=>
{
    return res.status(200).json({
        title: "Express Testing",
        message: "The app is working properly!",
      });
})

app.listen(process.env.PORT ||8080,(req,res)=>
{
    console.log('Hello world');
})