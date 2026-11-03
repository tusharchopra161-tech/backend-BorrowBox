const Item=require("../Models/itemSchema");
const User=require("../Models/userSchema");

async function createItem(req,res){
    try{
         const itemdata=req.body;

         const createItem=await Item.create({
             title:itemdata.title,
             category:itemdata.category,
             description:itemdata.description,
             images:itemdata.images,
             owner:itemdata.ownerid,
             location:itemdata.location
         });

         if(createItem!==null){
            res.status(201).json({success:true,message:"Created Item successfully",createditem:createItem});
         }
         else{
             res.status(400).json({success:false,message:"Unable to list the Item"});
         }
    }
    catch(error){
        res.status(500).json({success:false,message:"Server Error"});
        console.log(error);
    }
}


async function showallitem(req,res){
    try{
        const allitems=await Item.find({isavailable:true}).populate("users","-password");

         if(allitems.length===0){
            res.status(200).json({success:true,message:"No Items available to borrow"});
         }
         else{
            res.status(200).json({success:true,message:"Items are given based on availability",Items:allitems});
         }
    }
    catch(error){
         res.status(500).json({success:false,message:"Internal server error"});
        console.log(error);
    }
}

// async function searchbycategory(req,res){
//     try{
//          const data=req.body;

//     }
//     catch(error){
//         console.log(error);
//     }
// }

module.exports={createItem,showallitem};