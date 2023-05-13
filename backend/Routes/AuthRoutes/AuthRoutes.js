 const express= require('express');
const userRouter=express.Router();


userRouter.get("/",(req,res)=>{
    res.send("Hello user")
})


module.exports={
    userRouter
}
