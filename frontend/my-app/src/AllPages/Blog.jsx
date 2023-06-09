import { Box, Button, FormControl,   FormLabel, Input, Select, Textarea } from "@chakra-ui/react"
import { useState } from "react"
import {useDispatch, useSelector} from "react-redux"
import { postBlogs } from "../Redux/BlogRedux/Blog.Action"
let obj={
    title:"",
    content:"",
    email: "",
    category:""
}
export const Blog=()=>{
const dispatch=useDispatch()
const {postdata_loading}=useSelector(state=>state.BlogReducer)

const [state,setState]=useState(obj)
  const handelChange=(e)=>{
      const {name,value}=e.target;
      setState({...state,[name]:value})
  }
//  console.log(state)
  const handelSubmit=()=>{
    dispatch(postBlogs(state))
  }

    return <Box  >
                <FormControl m="auto" mt="1%"    w="70%">
     <FormLabel>Title</FormLabel>
    <Input onChange={handelChange} type='text' name="title" w={"100%"} placeholder="Title of Doubt"   border={"1px solid black"}/>
    <FormLabel>Category</FormLabel>
    <Select bg="blue.300" spacing={3} name="category" placeholder='Category' onChange={handelChange}>
  <option value='General'>General</option>
  <option value='Techenical'>Techenical</option>
  <option value='career'>career</option>
  </Select>
    <FormLabel textAlign={"center"}>Write Doubt ? Here....</FormLabel>
   <Textarea bg="black" color={"white"}  onChange={handelChange} name="content" w={"100%"} h={"400px"} border={"1px solid black"} >
                </Textarea>
                <Button w="100%" bg="teal.300" onClick={handelSubmit}>{postdata_loading?"loading":"POST"}</Button>
    </FormControl>

           
    </Box> 
}