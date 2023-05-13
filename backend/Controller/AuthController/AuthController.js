const {UserModel}=require('../../Models/UserModel/userModel')


const checkRegisterEmail=async (email)=>{
     try{
             const user= await UserModel.find({email});
            //  console.log(user)
              if(user.length<=0){
                return true;
              } 
              return false;
     }catch(e){
        console.log(e)
        return false
     }       
}


const createUser=async(name,email,hash)=>{
 try{
        const newUser= await UserModel.create({name:name,email:email,password:hash});
        return newUser
 }catch(e){
    console.log(e)
     return false;
 }


}


module.exports={
    checkRegisterEmail,createUser
}