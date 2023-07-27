const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    city:String
})

const employeeModel = mongoose.model("employee",employeeSchema)
module.export = employeeModel