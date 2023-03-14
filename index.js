const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express()
const bodyParser = require("body-parser")
const userRoute = require("./src/routes/user/user");
const accountSchema = require('./src/schema/AccountSchema');
const productRouter = require("./src/routes/products/products")

app.get("/",(req,res)=>{
     res.json({"status":"UP AND RUNNING"})
})
app.use(bodyParser.json())
app.use("/user",userRoute)
app.use("/products",productRouter)

mongoose.connect("mongodb://localhost:27017/verico-d").then(console.log("Connected"));
app.listen(3000,()=>{console.log("http://localhost:3000/");})