import { 
    Button,
    Box,
    Heading,
  } from '@chakra-ui/react'
  import { FiAlignJustify } from "react-icons/fi";
import React, {   useState } from 'react'
export function BurgerMenu() {
     const [state,setState]=useState(false)

    const handelClose=(e)=>{
      console.log("close")
        setState(false);
    }

    const handelOpen=(event)=>{
         
         event.stopPropagation();
        setState(true)
    }
 

   

    return (


      <>
          <Button onClick={handelOpen} zIndex={100}    position={"absolute" }top="10px" right="10px"><FiAlignJustify size="30"/></Button> 
          <Box position={"fixed"} zIndex={1} w="100%" h="100vh"   onClick={handelClose} display={state?"block":"none"} >
                 <Box onClick={handelOpen} zIndex={20}  w="45%" h="100vh" backgroundColor="rgba(168, 170, 187, 0.334)" float="right"   textAlign={"center"} pt="15%">
                      <Heading>Home</Heading>
                      <Heading>Signup</Heading>
                      <Heading>Login</Heading>
       </Box>         
      </Box>
      
      </>
    )
  }