const express = require("express");
//import express from 'express';
const cors = require("cors");
const mongoose = require('mongoose');
const userRoutes =require("./routes/userRoutes");
const messageRoutes = require("./routes/messagesRoute");

const app = express();
require("dotenv").config();

//const server = app.listen();

app.use(cors());
app.use(express.json());

app.use("/api/auth",userRoutes);
app.use("/api/message",messageRoutes);

mongoose.connect(process.env.MONGO_URL,{
     useNewUrlParser : true,
     useUnifiedTopology : true,
}).then(()=>{
  console.log("DB connect successfully");
}).catch((err)=>{
     console.log(err);
});

const server = app.listen(process.env.PORT,() =>{
     console.log("Server Started on Port" + " "+process.env.PORT);
})