import express from 'express'
import dotenv from 'dotenv'
import {connectDB} from './config/db.js'
import User from './models/register.model.js';
import cors from 'cors';

dotenv.config()

const app=express();
// app.use(cors({ origin: 'http://localhost:5173' })); 
app.use(express.json()) // allows to accept JSON data in req.body
app.use(cors());  

app.post("/api/register",async(req,res)=>{
    const info=req.body;

    if(!info.username || !info.email || !info.password)
    {
        return res.status(400).json({success:false,message:"Enter all the fields"});
    }
    const newUser=new User(info);
    try
    {
        await newUser.save();
        res.status(201).json({success:true,data:newUser});
    }
    catch(error)
    {
        console.log(error);
        res.status(500).json({success:false,message:"Internal Server Error"});
    }
})
app.listen(5000,()=>{
    connectDB();
    console.log("Server started and MongoDB Connected");
})