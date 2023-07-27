const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
//importing 
const employeeModel = require('./models/employee')

const app = express()
app.use(cors())
app.use(express.json()) 

//connection with Mongodb
mongoose.connect("mongodb://localhost:27017/test")

//create api rout
app.get('/getemployee',(req,res)=>{
    //to find all the records from database
    employeeModel.find()
    .then(users = res.json(employee))
    .catch(err => res.json(err))
})

app.listen(3001, ()=>{
    console.log("Server is up n running")
})