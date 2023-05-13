import { Box} from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,Input,Button,Heading
   
  } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { useState } from 'react';
 
const init={name:"",email:"",password:""}

export const Signup=()=>{
  
const [state,setState]=useState(init)
const handelChange=(e)=>{
  const {name,value}=e.target; 
setState({...state,[name]:value})
}

const handelSubmit=()=>{
   console.log("sub")
}
 console.log(state)

    return  <ChakraProvider >
    <Box display={"flex"}  >
    <Box p='4' w={"50%"} h={"100vh"} display={{ base: "none", md: "block" }}   bg='#f0f0f0' >
    <Image w={"100%"} h={"100vh"} src='https://rurutek.com/jio/assets/img/login-animate.gif' alt='Dan Abramov' />
    </Box>
    
    <Box  w={{ base: "100%", md: "50%" }} h={"100vh"}  bg='#f0f0f0'>
        
    <FormControl isRequired  p={"10px"} m="auto" w="80%" mt="25%" backgroundColor={"white"} >
    <Heading textAlign={"center"}>Sign-up</Heading>
      <FormLabel> Name</FormLabel>
       <Input onChange={handelChange} name="name" placeholder='  name' />
       <FormLabel>Email</FormLabel>
       <Input onChange={handelChange} name="email" placeholder='email' />
       <FormLabel>Password</FormLabel>
       <Input onChange={handelChange} name="password" placeholder='password' />
        
       <Button w="100%" onClick={handelSubmit}> Submit</Button>
</FormControl>
    </Box>
  </Box>
  </ChakraProvider>
}