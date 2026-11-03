const mongoose=require("mongoose");

const itemSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    images:[{
        type:String,
        required:true
}],
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:true
    },
    isavailable:{
        type:Boolean,
        default:true,
    },
    location:{
        type:"String",
        required:true
    }
})

const Item=mongoose.model("items",itemSchema);

module.exports=Item;
