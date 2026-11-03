const mongoose=require("mongoose");

const bookingSchema=new mongoose.Schema({
    item:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"items",
        required:true
    },
    borrower:{
         type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:true
    },
    
})