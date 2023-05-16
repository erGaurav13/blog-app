import { Box} from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,Input  ,Button,Heading
   
  } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { ChakraProvider,   } from "@chakra-ui/react";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../Redux/AuthRedux/Auth.Action';

const init={
   email:"",password:"",
}
export const Login=()=>{

const [state,setState]=useState(init)
const authdata=useSelector(state=>state )

const dispatch=useDispatch() 
const handelChange=(e)=>{
  const {name,value}=e.target; 
setState({...state,[name]:value})
}

const handelSubmit=(e)=>{
  // e.preventDefault()
    console.log(state)
    dispatch(login(state))
}

 
return  <ChakraProvider >
    <Box display={"flex"}  >
    <Box p='4' w={"50%"} h={"100vh"} display={{ base: "none", md: "block" }}   bg='#f0f0f0' >
    <Image w={"100%"} h={"100vh"} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_KgTEeNlUjKGQd2Pq3o5q8Jt8RRYge8Tuvw&usqp=CAU' alt='Dan Abramov' />
    </Box>
    
    <Box  w={{ base: "100%", md: "50%" }} h={"100vh"}  bg='#f0f0f0'>
        
    <FormControl isRequired  p={"10px"} m="auto" w="80%" mt="25%" backgroundColor={"white"} >
    <Heading textAlign={"center"}>Login</Heading>
      
       <FormLabel>Email</FormLabel>
       <Input name="email" onChange={handelChange} placeholder='email' />
       <FormLabel>Password</FormLabel>
       <Input name="password" onChange={handelChange} placeholder='password' />
        
       <Button mt="1rem" w="100%" onClick={handelSubmit}>Submit</Button>
</FormControl>
    </Box>
  </Box>
  </ChakraProvider>
}