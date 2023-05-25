import { Box, Heading} from '@chakra-ui/react'
import { useEffect } from 'react'
import {useDispatch,useSelector} from "react-redux"
import { getBlogs } from '../Redux/BlogRedux/Blog.Action'
import { PostCard } from '../Component/PostCard'
export const Home=()=>{
const {data,getdata_loading}=useSelector(state=>state.BlogReducer)
// console.log(data)
const dispatch=useDispatch()
useEffect(()=>{
    
    dispatch(getBlogs())
},[dispatch])

   return <Box w="100%" border={"1px solid red"} display={"flex"} justifyContent={"space-evenly"}>

                <Box w={"20%"}  bg="red" h="400px" border={"1px solid grren"}>d</Box>  
                <Box w={"50%"}  bg="red" h="400px" border={"1px solid grren"}>
                    {/* postcard map  */}
                     {data?.map((e,i)=>{
                        return <PostCard {...e}  key={Date.now()+i}/ >
                     })} 
                     
                    
                    </Box>
                <Box w={"20%"}  bg="red" h="400px" border={"1px solid grren"}>d</Box>
   </Box>

}