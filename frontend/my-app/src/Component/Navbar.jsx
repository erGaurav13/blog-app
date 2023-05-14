import { Box,Button,Image, Stack,useDimensions  } from "@chakra-ui/react"
import { BurgerMenu } from "./BurgerMenu"
import { useEffect, useRef, useState } from "react"

export const Navbar=()=>{
    const [width,setWidth]=useState(0)
    const elementRef = useRef()
     
   window.onresize=function (){
    let height= window.innerHeight
    setWidth(window.innerWidth)
     
   }
  useEffect(()=>{

  },[width])


   return <>
   
   {width>814?true:<BurgerMenu/>}
   <Box   position={"sticky"} top="0px" left="0px" display="flex" justifyContent={"space-between"} w="100%" h="3rem" bg="
#407bff" color="white">
      <Box> <Image w="100%" h="3rem" src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30164225/572.png"/> </Box>
      <Box  w="30%" display={"block"} justifyContent={"space-around"}  p="0.8rem"> 
      
     {width<814?true: <Stack direction='row' spacing={4} align='center'> 
  <Button colorScheme='teal' variant='solid'>
  Home
  </Button>
  <Button colorScheme='black' variant='solid'>
   Blog
  </Button>
  <Button colorScheme='black' variant='solid'>
    Login
  </Button>
  <Button colorScheme='black' variant='solid'>
    Signup
  </Button>
      </Stack>
}  
      </Box>
   </Box>
   </>
}