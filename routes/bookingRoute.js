const express=require("express");

const router=express.Router();

const {createBooking,showallbookingreq,showallbookings,changebookingstatus}=require("../Controllers/bookingController")


router.post("/createbooking",createBooking);
router.post("/showallbookingreq",showallbookingreq);
router.post("/showbookingtouser",showallbookings);
router.put("/changebookingstatus",changebookingstatus);



module.exports=router;