import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    useDisclosure,
    DrawerCloseButton,
    RadioGroup,
    Stack,
    Radio,
    Button,
    Input,
    Box,
    Heading,
    Slide,
  } from '@chakra-ui/react'
  import { FiAlignJustify } from "react-icons/fi";
import React, { useEffect, useState } from 'react'
export function BurgerMenu() {
     const [state,setState]=useState(false)

    const handelClose=(e)=>{
      console.log("close")
        setState(false);
    }

    const handelOpen=(event)=>{
         console.log("open")
         event.stopPropagation();
        setState(true)
    }
console.log(state)

   

    return (


      <>
          <Button onClick={handelOpen} zIndex={100}    position={"absolute" }top="10px" right="10px"><FiAlignJustify/></Button> 
          <Box position={"fixed"} zIndex={1} w="100%" h="100vh"   onClick={handelClose} display={state?"block":"none"} >
                 <Box onClick={handelOpen} zIndex={20}  w="45%" h="100vh" backgroundColor="rgba(168, 170, 187, 0.334)" float="right"   textAlign={"center"} pt="10%">
                      <Heading>Home</Heading>
                      <Heading>Home</Heading>
                      <Heading>Home</Heading>
       </Box>         
      </Box>
      
      </>
    )
  }