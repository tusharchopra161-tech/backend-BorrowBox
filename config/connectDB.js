const mongoose=require("mongoose");

require("dotenv").config();

const URL=process.env.URL;

async function connectDB(){
    try{
        await mongoose.connect(URL);

        console.log("Connected DB successfully");

    }
    catch(error){
        console.log(error);
    }
}


module.exports={connectDB};
