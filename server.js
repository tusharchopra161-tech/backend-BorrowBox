const express = require("express")
const app =express()
const dotenv=require("dotenv")
dotenv.config()
const port=process.env.PORT;


const cors=require("cors");

const {connectDB}=require("./config/connectDB");

const userRoutes=require("./routes/userRoute");
const itemRoutes=require("./routes/itemRoute");

connectDB();

const allowedOrigins=["http://localhost:5173","http://localhost:5174",]
app.use(express.json());
app.use(cors({
    origin:allowedOrigins,
    credentials:true
}));
app.use("/api",userRoutes,itemRoutes);


app.listen(port,()=>{
    console.log(`server is listen at ${port}`)
})