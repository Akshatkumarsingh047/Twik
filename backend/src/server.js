import express from "express"
const app=express();
app.get("/",(req,res)=>
{
    res.send('hello from server');
});
app.listen(3000,()=>console.log("server is up at",3000))