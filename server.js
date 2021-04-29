// require express
const express = require ('express');
const mongoose = require('mongoose');
//const bodyParser = require('body-parser');


//instance of express
const app = express()

//Require dotenv and configure
require('dotenv').config()

// connect to DB
const connectDB = require('./config/connectDB')
connectDB()

//middleware
app.use(express.json())

//route

app.use('/api/annonces',require('./routes/annonce'));
app.use('/api/user',require('./routes/user'))

//Serve static assets if in production 
if(process.env.NODE_ENV === "production"){
  app.use(express.static('client/build'))
  const path=require('path')
  app.get('*',(req,res)=>{
      res.sendFile(path.resolve(__dirname,'client', 'build' , 'index.html'))
  })
}

//port 
const PORT = process.env.PORT 




//create server 
app.listen(PORT,(err) =>err ? console.error(err):console.log(`Server is running on port ${PORT}`))
