import { Box, } from '@chakra-ui/react'
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
},[])

const dispatch=useDispatch()
useEffect(()=>{   
    dispatch(getBlogs())
},[dispatch])

const deleteBlog=(_id)=>{
 console.log(_id)
dispatch(deleteBlogbyID(_id))
}
 

   return <Box w="100%" border={"1px solid red"} display={"flex"} justifyContent={"space-evenly"}>

                <Box w={"20%"}  bg="red" h="400px" border={"1px solid grren"}>d</Box>  
                <Box w={"50%"}  bg="red" h="400px" border={"1px solid grren"}>
                    {/* postcard map  */}
                     {data?.map((e,i)=>{
                        return <PostCard {...e} deleteid={deleteid} deleteBlog={deleteBlog} key={Date.now()+i}/ >
                     })}                 
                    </Box>
                <Box w={"20%"}  bg="red" h="400px" border={"1px solid grren"}>d</Box>
   </Box>

}