// import dotenv from "dotenv"
import axios from "axios"
import {LOGIN_REQUEST, LOGIN_SUCESS, SIGNUP_REQUEST} from "./Auth.Action.Types"
// dotenv.config()

 
 let url="http://localhost:8080"
export const login=  (info) => async (dispatch) => {

     console.log(info)
    try{    dispatch({type:LOGIN_REQUEST})
           let data=await   axios.post(`${url}/api/login`,info)
           console.log(data)
    }catch(e){
        alert(e.response.data.message)
          console.log(e.response,"S")
    }
}

export const signup=  (info) => async (dispatch) => {

    
   try{    dispatch({type:SIGNUP_REQUEST})
          let data=await   axios.post(`${url}/api/register`,info)
          alert(data.data.message)
   }catch(e){
       alert(e.response.data.message)
         console.log(e)
   }
}