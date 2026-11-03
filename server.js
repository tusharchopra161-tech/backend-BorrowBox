const express = require("express")
const app =express()
const dotenv=require("dotenv")
dotenv.config()
const port=process.env.PORT;

const {connectDB}=require("./config/connectDB");

const userRoutes=require("./routes/userRoute");

connectDB();


app.use(express.json());
app.use("/api",userRoutes);

app.listen(port,()=>{
    console.log(`server is listen at ${port}`)
})