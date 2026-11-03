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
    status:{
        enum:["Pending","Reject","Accept"],
        default:"Pending"
    },
    selectdate:{
        type:String,
        required:true
    },
    enddate:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
},
{
    timestamps:true
})


const Booking=mongoose.model("bookings",bookingSchema);


module.exports=Booking;
