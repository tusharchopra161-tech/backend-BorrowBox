const User=require("../Models/userSchema");


async function createUser(req,res){
    try{
         const userdata=req.body;

         console.log(userdata);

         const user=await User.create({
            fullname:userdata.fullname,
            email:userdata.email,
            password:userdata.password,
            role:userdata.role
         });

         if(user){
            res.status(201).json({success:true,message:"Created User successfully"});
         }
         else{
             res.status(400).json({success:false,message:"An error occur while creating user"});
         }
    }
    catch(error){
          res.status(500).json({success:false,message:"An error occur while creating user"});
        console.log(error);
    }
}

async function login(req,res){
    try{
         const data=req.body;

         const checkuseremail=await User.findOne({email:data.email});

        //  if(checkuseremail!==null){
        //        if(data)
        //  }
        //  else{
        //     res.status(404).json({success:"false",message:"No user with similar email found"});
        //  }
    }
    catch(error){
        console.log(error);
    }
}

module.exports={createUser};
