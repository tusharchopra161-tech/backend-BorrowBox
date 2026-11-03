const express = require("express")
const app =express()
const dotenv=require("dotenv")
dotenv.config()
const port=process.env.PORT;

app.get("/",(req,res)=>{
    res.send("chal ra he")
})
app.listen(port,()=>{
    console.log(`server is leten at ${port}`)
})