const express = require("express");
const app = express();
const mongoose = require('mongoose');
const infoRouter = require("./router")
const morgan = require("morgan")
const cors = require("cors")


app.use(cors())
app.use(express.json())
app.use(morgan("dev"))
app.listen(5000, () => {
    console.log("server started from 5000")
})

app.use("/info", infoRouter)

mongoose.connect("mongodb://localhost:27017/myapp",
{ useNewUrlParser: true , useUnifiedTopology: true },(err) => {
    if(!err) {
        console.log("Db connected")
    }
}) 