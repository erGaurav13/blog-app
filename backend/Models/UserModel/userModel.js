const mongoose=require('mongoose');

const User=mongoose.Schema({
   
    name:{type:String},
    email:{type:String},
    password:{type:String}

})

export const UserModel= mongoose.model(User,"user")