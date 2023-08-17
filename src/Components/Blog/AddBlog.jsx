import React from 'react';
import axios from "axios";
import {
    Box,
    Form,
    Flex,
    Input,
    HStack,
    Heading,
    Link,
    Button,
    FormControl,
    FormLabel,
    Grid,
    Img,
    Text,
    Wrap,
    Image,
    WrapItem
} from '@chakra-ui/react';
import {useNavigate} from "react-router-dom"

const BlogPost = () => {
    const[data,setData] = React.useState({});
    const Navigate = useNavigate();
      const fetchData = async (e) => {
        e.preventDefault();
        const res = await axios.post(`https://database-aliu.onrender.com/blog`,data);
        console.log(res);
        if(res.status == 201){
Navigate("/blog")
        }
        else{
          alert("Some error occured. Please try again.")
        }
       
      };
      const handleClick = (e)=>{
        console.log(e.target.value);
setData({...data,[e.target.name]:e.target.value})
      }

    return (
        <Box fontSize={"16px"} w={"100%"} float={"left"} p={"20px"}>

          <form onSubmit={fetchData}>
          <FormControl>
  <FormLabel>Blog Name : </FormLabel>
  <Input type='text' name="name" placeholder='Enter Blog Name' onChange={(e)=>handleClick(e)} mb={"15px"} />
  <FormLabel>Author Name :  </FormLabel>
  <Input type='text'  name="author" placeholder='Enter Author Name' onChange={(e)=>handleClick(e)}  mb={"15px"} />
  <FormLabel>Date :  </FormLabel>
  <Input type="date" name="date" placeholder='dd/mm/yyyy' onChange={(e)=>handleClick(e)} mb={"15px"}  />
  <FormLabel>Image URL :  </FormLabel>
  <Input type="text" name="img" placeholder='Enter Image URL' onChange={(e)=>handleClick(e)} mb={"15px"}  />
  <FormLabel>Description :  </FormLabel>
  <Input type="text" name="desc" placeholder='Enter Description' onChange={(e)=>handleClick(e)} mb={"15px"}  />
  <Button
            mt={4}
            color="white"
            backgroundColor={"rgb(124, 141, 211)"}
            type='submit'
            
          >
            Add Blog
          </Button>
</FormControl>
          </form>
        </Box>
    )
}

export default BlogPost;