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
        w="100%" h="3rem" bg="#407bff" color="white" 
        >
      <Box> <Image w="100%" h="3rem" src="https://previews.123rf.com/images/mrgao/mrgao1502/mrgao150200011/36963437-red-blog-app-icon-illustration-on-white-background.jpg"/> </Box>
      <Box  w="30%" display={"block"} justifyContent={"space-around"}  p="0.8rem"> 
      {/* Responsive for loading Menu according to width */}
     {width<1024?true: <Stack direction='row' spacing={4} align='center'> 
     {/* Links for different page  */}
  <Link to={'/home'}> <Button colorScheme='black' variant='solid'>
   Home
  </Button></Link>
   <Link to={"/blog"}>  <Button colorScheme='black' variant='solid'>
    Blog
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