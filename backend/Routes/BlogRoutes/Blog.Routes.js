const express=require("express");

const blogRoute=express.Router();

 const {BlogModel} = require("../../Models/BlogModel/BlogModel")
 


blogRoute.get( "/",(req, res) => {


})


blogRoute.post("/blog",async (req, res) => {
 const {email,title,content,category} =req.body
  if(!email||!title||!content||!category){
    return res.status(404).send({message: 'Not Found entitty'})
  }
  
  try{
     const post=await BlogModel.create({email,title,content,category})
      console.log(post) 
     return res.status(201).send({post:post})
     }catch(e){
        console.log(e)
    return res.status(404).send({message:e});
  }

})

module.exports={
    blogRoute
}