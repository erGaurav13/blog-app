import { Box,ListItem } from "@chakra-ui/react"

export const CommentCard=({email,comment})=>{

  return <ListItem>{comment} by {email} </ListItem>
  
}