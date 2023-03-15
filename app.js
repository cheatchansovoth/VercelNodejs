const express =require('express');
const app=express();
require('dotenv').config()

app.use(express.json());

app.get('/',(req,res)=>
{
    console.log('Hello world');
})

app.listen(process.env.PORT ||8080,(req,res)=>
{
    console.log('Hello world');
})