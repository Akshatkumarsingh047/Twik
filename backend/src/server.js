import express from "express"
import { connectDB } from "./config/db.js";
import { ENV } from "./config/env.js";
const app=express();
const PORT=ENV.PORT || 3000
app.get("/",(req,res)=>
{
    res.send('hello from server');
});
connectDB().then(()=>{
    app.listen(PORT,()=>console.log("server is up at",PORT))
}).catch((err)=>console.log(err))