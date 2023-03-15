const express =require('express');
const app=express();

app.use(express.json());

app.get('/',(req,res)=>
{
    console.log('Hello world');
})

app.listen(5000,(req,res)=>
{
    console.log('Hello world');
})