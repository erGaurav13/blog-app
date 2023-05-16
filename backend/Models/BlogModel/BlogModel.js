const mongoose=require('mongoose');


const BlogSchema=mongoose.Schema({
    email:{type:String  ,required:true},
     title:{type:String  ,required:true},
     content:{type:String  ,required:true},
     category:{type:String  ,required:true},
     likes:{type:Number  ,required:true},
     comments:{type:Array  ,required:true}
})