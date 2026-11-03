const express=require("express");

const router=express.Router();

const {createUser}=require("../Controllers/usercontroller");

router.post("/createuser",createUser);
router.post("/login",login);

module.exports=router;