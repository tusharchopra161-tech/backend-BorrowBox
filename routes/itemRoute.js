const express=require("express");

const router=express.Router();

const {createItem,showallitem}=require("../Controllers/itemController");

router.post("/listitem",createItem);
router.get("/showallitems",showallitem);



module.exports=router;
