import { LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCESS, SIGNUP_FAILED, SIGNUP_REQUEST, SIGNUP_SUCESS } from "./Auth.Action.Types"

const init={
    isAuth:false,
    token:"",
    login_loading:false,
    signup_loading:false,
}


export const AuthReducer=(state=init,action)=>{

  

    switch(action.type){

        case LOGIN_REQUEST:{
            return  {...state, login_loading:true}
          }
        
          case LOGIN_SUCESS:{
            console.log(action.payload)
            return  {...state, login_loading:false,isAuth:true,token:action.payload}
          }      
 
          case LOGIN_FAILED:{
            return  {...state, login_loading:false,isAuth:false,token:null}
          }
           
        
         case SIGNUP_REQUEST:{
             return {...state,signup_loading:true}
         }  

         
         case SIGNUP_SUCESS:{
            return {...state,signup_loading:false}
         }
        
         case SIGNUP_FAILED:{
            return {...state,signup_loading:false}
         
         }

       default: return state 
    }
 

}