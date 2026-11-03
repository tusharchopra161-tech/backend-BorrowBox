const express=require("express");

const router=express.Router();

const {createItem}=require("../Controllers/itemController");

router.post("/listitem",createItem);



module.exports=router;
