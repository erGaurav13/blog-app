import { Box, Button, FormControl,   FormLabel, Input, Select, Textarea } from "@chakra-ui/react"
import { useState } from "react"

let obj={
    title:"",
    content:"",
    email:"abc@gmail.com",
    category:""
}
export const Blog=()=>{

const [state,setState]=useState(obj)
  const handelChange=(e)=>{
      const {name,value}=e.target;
      setState({...state,[name]:value})
  }
console.log(state)

    return <Box>
                <FormControl m="auto" mt="1%"    w="70%">
     <FormLabel>Title</FormLabel>
    <Input onChange={handelChange} type='text' name="title" w={"100%"} placeholder="Title of blog"   border={"1px solid black"}/>
    <FormLabel>Category</FormLabel>
    <Select bg="blue.300" spacing={3} name="category" placeholder='Category' onChange={handelChange}>
  <option value='General'>General</option>
  <option value='Techenical'>Techenical</option>
  <option value='Health'>Health</option>
</Select>
    <FormLabel>Write Blog Here....</FormLabel>
   <Textarea  onChange={handelChange} name="content" w={"100%"} h={"500px"} border={"1px solid black"} >
                </Textarea>
                <Button w="100%" bg="teal.300">Post</Button>
    </FormControl>

              
    </Box> 
}