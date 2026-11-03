const Item=require("../Models/itemSchema");

async function createItem(req,res){
    try{
         const itemdata=req.body;

         const createItem=await Item.create({
             title:itemdata.title,
             category:itemdata.category,
             description:itemdata.description,
             images:itemdata.images,
             owner:itemdata.owner,
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


module.exports={createItem};