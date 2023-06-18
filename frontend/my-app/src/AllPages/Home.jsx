import { Box, Heading, Image} from '@chakra-ui/react'
import { useEffect } from 'react'
import {useDispatch,useSelector} from "react-redux"
import { getBlogs,deleteBlogbyID } from '../Redux/BlogRedux/Blog.Action'
import { PostCard } from '../Component/PostCard'
 
import jwtDecode from 'jwt-decode';
import { useState } from 'react';
export const Home=()=>{
const {data,getdata_loading}=useSelector(state=>state.BlogReducer)
 
// console.log(data)
const [deleteid,setDeleteid]=useState(null)
const token=localStorage.getItem("token")
const decodedToken = jwtDecode(token)

useEffect(()=>{
    if(decodedToken){
        setDeleteid(decodedToken.email)
    } 
}, )

const dispatch=useDispatch()
useEffect(()=>{   
    dispatch(getBlogs())
},[dispatch])

const deleteBlog=(_id)=>{
 console.log(_id)
dispatch(deleteBlogbyID(_id))
}
  
if(getdata_loading){
    return  <Image w="100%" h="100vh" src="https://cdn.pixabay.com/animation/2022/10/11/03/16/03-16-39-160_512.gif"/>
}
   return <Box bg="#f0f0f0 " w="100%"   display={"flex"} justifyContent={"space-evenly"}>
                <Box w={"100%"}      >
                    {/* postcard map  */}
                    {data.length===0?<Heading>No Blogs Data </Heading>:false}
                     {data?.map((e,i)=>{
                        return <PostCard {...e} deleteid={deleteid} deleteBlog={deleteBlog} key={Date.now()+i}/ >
                     })}                 
                    </Box>            
   </Box>

}