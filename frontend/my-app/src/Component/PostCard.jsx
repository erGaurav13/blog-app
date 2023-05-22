import { Box, Heading,Text,Container, Button, Input} from '@chakra-ui/react'
 
export const PostCard=({email,category,content,likes,title,comments
})=>{
  
     
    const paragraphs = content.split('\n').map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ));

    return <Box w="100%" bg="white" border={"1px solid red"} p="10px" mb="2px">
            <Heading textAlign={"center"}>{title}</Heading>
            <Text textAlign={"right"}>category : {category}</Text>
            <Heading>Author : {email}</Heading>
            <Container whiteSpace={'pre-line'} >{paragraphs}</Container>
            <Button>Like {likes}</Button>
             <Box display={"flex"} justifyContent={"space-between"}> <Input w="70%" name="email"   placeholder='Comments' />
                   <Button bg='teal.300' p={"2px"} variant='solid'>Comment</Button>
             </Box>
            
    </Box>
}