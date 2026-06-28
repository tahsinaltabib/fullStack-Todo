require('node:dns').setServers(['1.1.1.1'],['8.8.8.8'])
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const { createTodo } = require('./controllers/todoControllers')
const app = express()


app.use(express.json()) //this is a middleware.


mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Database Connected");
})

app.post('/create/todo',createTodo)


app.listen(5000,()=>{
    console.log("Server is running on port 5000")
})