require('node:dns').setServers(['1.1.1.1'],['8.8.8.8'])
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()





mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Database Connected");
})


app.listen(5000,()=>{
    console.log("Server is running on port 5000")
})