import axios from "axios"
import { GET_BLOGS_FAILED, GET_BLOGS_REQUEST, GET_BLOGS_SUCESS, POST_BLOGS_FAILED, POST_BLOGS_REQUEST, POST_BLOGS_SUCESS, POST_COMMENT_FAILED, POST_COMMENT_REQUEST, POST_COMMENT_SUCESS } from "./Blog.Action.Types";

let token=localStorage.getItem("token");
axios.defaults.headers.common['Authorization'] = `Bearer${token}`;
 
let baseurl="https://boubt.onrender.com"
export const getBlogs=()=>async (dispatch)=>{
     try{
         dispatch({type:GET_BLOGS_REQUEST})
         let data= await axios.get(`${baseurl}/api/blog/`);
          let reversed=data.data.post.reverse()
         dispatch({type:GET_BLOGS_SUCESS,payload:reversed})
     }catch(e){
        dispatch({type:GET_BLOGS_FAILED})
     }
}


export const postBlogs=(info)=>async (dispatch)=>{
    try{
        dispatch({type:POST_BLOGS_REQUEST})
        let data= await axios.post(`${baseurl}/api/blog/`,info);
        // console.log(data.data.message)
         alert(data.data.message)
        dispatch({type:POST_BLOGS_SUCESS,payload:data.data.post})
    }catch(e){
        alert(e.response.data.message)
       dispatch({type:POST_BLOGS_FAILED})
    }
}
 
export const deleteBlogbyID=(_id)=>async(dispatch)=>{
   
 try{
    let data= await axios.delete(`${baseurl}/api/blog/${_id}`);
    console.log(data,"D")
    dispatch(getBlogs()
) }catch(e){
     console.log(e)
 }

}


export const PostComment=(info)=>async(dispatch )=>{
 
  try{
    dispatch({type:POST_COMMENT_REQUEST})
    let data= await axios.post(`${baseurl}/api/blog/comment`,info);
    
     alert(data.data.message)
    dispatch({type:POST_COMMENT_SUCESS})
    dispatch(getBlogs())
  }catch(e){
    console.log(e)
    dispatch({type:POST_COMMENT_FAILED})
    }

}