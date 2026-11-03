const Item=require("../Models/itemSchema");
const User=require("../Models/userSchema");
const Booking=require("../Models/bookingSchema");


async function createBooking(req,res){
    try{
         const bookingdata=req.body;

         const createbooking=await Booking.create({
            item:bookingdata.itemid,
            borrower:bookingdata.userid,
            selectdate:bookingdata.selectdata,
            enddate:bookingdata.enddate,
            message:bookingdata.message
         });

         if(createbooking===null){
            res.status(400).json({success:false,message:"Unable to create booking"});
         }
         else{
            res.status(200).json({success:true,message:"Created booking successfully",Bookingdetail:createbooking});
         }
    }
    catch(error){
         res.status(500).json({success:false,message:"Internal Server Error"});
        console.log(error);
    }
}


async function showallbookingreq(req,res){
    try{
       const data=req.body;

       const alluseritem=await Item.find({owner:data.ownerid});

            if(alluseritem.length===0){
                res.status(200).json({success:true,message:"The Owner does not add any item till now"});
            }
            else{
                const itemIds = alluseritem.map(item => item._id);

               const allbookingreq = await Booking.find({ item: { $in: itemIds } });

             res.status(200).json({ success: true,bookings: allbookingreq});

            }
    }
    catch(error){
         res.status(500).json({success:false,message:"Internal Server Error"});
        console.log(error);
    }
}

 
async function showallbookings(req,res){
    try{
         const data=req.body;

         const allbooking=await Booking.find({borrower:data.borrowerid}).populate("items");

         if(allbooking.length===0){
            res.status(200).json({success:true,message:"You haven't done any booking till now"});
         }
         else{
            res.status(200).json({success:true,message:"Successfully fetch all your Bookings",Bookings:allbooking});
         }
    }
    catch(error){
        console.log(error);
    }
}


async function changebookingstatus(req,res){
    try{
           const data=req.body;

           const updatedbooking=await Booking.findByIdAndUpdate(
               data._id,{
                   status:data.status
               },{
                new:true
               }
           )

           if(updatedbooking===null){
            res.status(400).json({success:false,Message:"Unable to change status"});
           }
           else{
               res.status(200).json({success:true,Message:"Change status successfully",newbooking:updatedbooking});
           }
    }
    catch(error){
         res.status(500).json({success:false,Message:"Internal server error"});
        console.log(error);
    }
}


module.exports={createBooking,showallbookingreq,showallbookings,changebookingstatus};