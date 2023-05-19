import { GET_BLOGS_FAILED, GET_BLOGS_REQUEST, GET_BLOGS_SUCESS } from "./Blog.Action.Types"

const init={
      data:[],
      getdata_loading:false,
}

export const BlogReducer=(state=init,action)=>{

    switch(action.type){
        
      case GET_BLOGS_REQUEST:{
        return {
            ...state,getdata_loading:true
        }
      }
      
      case GET_BLOGS_SUCESS:{
        return {
            ...state,getdata_loading:false,data:action.payload
        }
      }

      case GET_BLOGS_FAILED:{
        return {
            ...state,getdata_loading:false
        }
      }


        default :return state
    }
}