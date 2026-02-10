const express = require("express")
const app =express();
const route = require("./routes/userRoute")
const port = 8080;

const connectToDB = require("./config/db")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectToDB();

app.get("/",(req,res)=>{
    res.status(200).json("success" ,true)
})

app.use("/api/v1",route)

app.listen(port,(req,res)=>{
    console.log(`Server running at ${port} successfully!!`)
})