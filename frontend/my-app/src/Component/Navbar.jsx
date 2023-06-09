import { Box,Button,Image, Stack   } from "@chakra-ui/react"
import { BurgerMenu } from "./BurgerMenu"
import { useEffect,   useState } from "react"
import {Link} from "react-router-dom"
import { LOGOUT } from "../Redux/AuthRedux/Auth.Action.Types"
import { useDispatch, useSelector } from "react-redux"
 
 
export const Navbar=()=>{
   const  {token} =useSelector(state=>state.AuthReducer  );
 
   const dispatch=useDispatch()
   const [width,setWidth]=useState(window.innerWidth)
    
    window.onresize=function (){   
      setWidth(window.innerWidth)      
     }
  
  useEffect(()=>{
  },[width])


   return <>
   {/* Responsive for loading BURGER MENU according to width */}
   {width>=1024?true:<BurgerMenu/>}

   <Box zIndex={+2}  position={"sticky"} top="0px" 
        left="0px" display="flex" justifyContent={"space-between"} 
        w="100%" h="3rem" bg="black" color="white" 
        >
      <Box> <Image w="100%" h="3rem" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShQA081MkpQ5XfPxch-8qsAb5CfG98n--pz1zVZM4DbWR-o4PrJMqa1UjhjAMEoS-3rlY&usqp=CAU"/> </Box>
      <Box  w="30%" display={"block"} justifyContent={"space-around"}  p="0.8rem"> 
      {/* Responsive for loading Menu according to width */}
     {width<1024?true: <Stack direction='row' spacing={4} align='center'> 
     {/* Links for different page  */}
  <Link to={'/home'}> <Button colorScheme='black' variant='solid'>
   All Doubt
  </Button></Link>
   <Link to={"/blog"}>  <Button colorScheme='black' variant='solid'>
    Doubt
   </Button>
   </Link>
  {/* if user not login render this */}
  {!token? <Link to="/login">  <Button colorScheme='black' variant='solid'>
    Login
  </Button></Link>:null}
  {!token?<Link to="/"> <Button colorScheme='black' variant='solid'>
    Signup
  </Button></Link>:null}
   {token? <Link  > <Button onClick={()=>dispatch({type:LOGOUT})} colorScheme='black' variant='solid'>
    Logout
  </Button></Link>:null }
      </Stack>
}  
      </Box>
   </Box>
   </>
}