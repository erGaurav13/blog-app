import { Box, Heading,Text,Container, Button, Input, UnorderedList} from '@chakra-ui/react'
import { useState } from 'react';
import { PostComment } from '../Redux/BlogRedux/Blog.Action';
import {useDispatch} from "react-redux"
import { CommentCard } from './CommentCard';
import {ChatIcon } from '@chakra-ui/icons'
import { FcManager  } from "react-icons/fc";
import {AiFillDelete } from "react-icons/ai";
export const PostCard=({_id,email,category,content,likes,title,comments,deleteid,deleteBlog
})=>{
  const dispatch=useDispatch()
    const paragraphs = content.split('\n').map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ));
     const [comment,setComment]=useState("")

     const handelChange=(e)=>{
        setComment(e.target.value)
     } 
     
    const handelcomment=()=>{
      let data={email:deleteid, comment:comment ,_id:_id}
       dispatch(PostComment(data))
    } 

    return <Box w="100%" bg="black" color={"white"}  p="10px" mb="2px">
            <Heading textAlign={"center"}>{title}</Heading>
            <Text textAlign={"right"}>category : {category}</Text>
            <Heading size="sm"><FcManager/>   {email}</Heading>
            <Container whiteSpace={'pre-line'} fontWeight={700} >{paragraphs}</Container>
            
             <Box display={"flex"} justifyContent={"space-between"}> <Input w="70%" name="comment"  onChange={handelChange}  placeholder='Comments' />
                   <Button bg='teal.300' p={"2px"} variant='solid' onClick={handelcomment}><ChatIcon/></Button>
                   {/* map comments */}
                 {email===deleteid?<Button bg="red.800" onClick={()=>deleteBlog(_id)}><AiFillDelete/></Button>:null}
                
            </Box>   
            <Box w="100%" maxH={"250px"} overflow={"scroll"} bg="gray.500" mt="2%" css={{
        "&::-webkit-scrollbar": {
          width: "0.4em",
          background: "transparent",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "transparent",
        },
      }} >
            <UnorderedList  >
                 {comments.length!==0?comments.map((e)=>{
                        return <CommentCard {...e}/>
                 }):false}
                 </UnorderedList>
              </Box>      
    </Box>
}