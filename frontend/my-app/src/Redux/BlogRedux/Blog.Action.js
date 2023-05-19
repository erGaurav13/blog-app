import axios from "axios"
import { GET_BLOGS_FAILED, GET_BLOGS_REQUEST, GET_BLOGS_SUCESS } from "./Blog.Action.Types";


export const getBlogs=()=>async (dispatch)=>{
let baseurl="http://localhost:8080"
     try{
         dispatch({type:GET_BLOGS_REQUEST})
         let data= await axios.get(`${baseurl}/api/blog/`);
         console.log(data)
         dispatch({type:GET_BLOGS_SUCESS,payload:data.data.post})
     }catch(e){
        dispatch({type:GET_BLOGS_FAILED})
     }
}