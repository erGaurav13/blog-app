import { Box,ListItem } from "@chakra-ui/react"
import {BsFillPersonFill } from "react-icons/bs";
export const CommentCard=({email,comment})=>{

  return <ListItem display={"flex"} justifyContent={"space-between"}> <Box>{comment} </Box> <Box display={"flex"} justifyContent={"center"} alignItems={"center"}> <BsFillPersonFill/>   {email}</Box> </ListItem>
  
}