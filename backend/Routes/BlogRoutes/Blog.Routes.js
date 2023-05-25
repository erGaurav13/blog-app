const express=require("express");

const blogRoute=express.Router();

 const {BlogModel} = require("../../Models/BlogModel/BlogModel")
 


blogRoute.get( "/blog", async(req, res) => {
    try{
        const data=await BlogModel.find({}) 
        return res.status(201).send({post:data})
        }catch(e){
           console.log(e)
       return res.status(404).send({message:e});
     }
})


blogRoute.post("/blog",async (req, res) => {
 const {email,title,content,category} =req.body
  if(!email||!title||!content||!category){
    return res.status(404).send({message: 'Not Found entitty'})
  }
  
  try{
     const post=await BlogModel.create({email,title,content,category})
      console.log(post) 
     return res.status(201).send({post:post,message: 'Post created' })
     }catch(e){
        console.log(e)
    return res.status(404).send({message:e});
  }

})

module.exports={
    blogRoute
}