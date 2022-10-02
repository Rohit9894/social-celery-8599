import { Box, Heading, Input, Text, Button, Flex, Img } from '@chakra-ui/react'
import React, { useState } from 'react'
const placeholder = {
    fontStyle: "italic",
    fontWeight: "400",
    BiFontFamily: "'Fira Sans', sans-serif",
    color: "rgb(118,118,118)"
}
const styles = {
    maxWidth: "347px",
    minWidth: "150px",
    marginTop: "28px",
    height: "54px",
    border: "1px solid teal"
}
const button_style = {
    backgroundColor: " #7856ff",
    color: "white",
    borderRadius: "3px",
    fontSize: "16px"
}
const initData={
    name:"",
    company:"",
    email:"",
    password:""
}
function post(data)
{
return fetch(" https://laxinging.herokuapp.com/users",{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(data)
})
}
 function getData()
{
    return fetch(" https://laxinging.herokuapp.com/users")
    .then(res=>res.json())
}

function Login() {
    const [data,setData]=useState(initData);
    const [exist,setExist]=useState(false)

    
   function handleChange(e)
    {
        const{name,value}=e.target;
       setData(
            {
              ...data,
              [name]:value
            }
        )
    }
    
     async function handleSubmit()
    {
        
       await getData()
          .then(res=>{
         
           res.map((item)=>{
                if(item.email===data.email)
                {
                   
                 setExist(true)
                  
                }
            })
        })
     
       
        if(!exist)
        {
         post(data)
        }
        else
        {
            alert('user already exist')
        }
      
        setData(initData)
       
     
    }

    const {name,company,email,password}=data
    return (
        <div>
            <Box className='login_rp'
                textAlign="center"
                px={["20px","0px"]}
               

            >
                <Flex

                    justifyContent="center">
                    <Flex
                        alignItems="center"
                        gap="5px"
                        pt="10px"
                    >
                        <Img src="data:image/jpeg;base64,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" h="28px" alt="img" />
                        <Text
                            fontWeight="500"
                            fontSize="20px">Campaign Monitor</Text>
                    </Flex>
                </Flex>
                <Heading
                    fontSize="40px"
                    mt="50px"
                    fontFamily="'Fira Sans', sans-serif"
                >Sign up for free.</Heading>
                <Flex mt="20px" justifyContent="center">
                    <Text
                        fontSize="20px"
                        w="500px">
                        Start sending beautifully designed emails today with our
                        drag-and-drop editor and library of free templates
                    </Text>
                </Flex>
                <Box
                    margin="auto"

                    display={["block","inline-block"]}
                    bg="white"
                    px="70px"
                    boxShado="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                    py="30px"
                    mt="30px"
                >
                    <Input
                        _placeholder={placeholder}
                        style={styles}
                        rounded='4px'
                        variant="outline"
                        name="name"
                        value={name}
                        onChange={handleChange}
                        type="text" placeholder="Full name" />
                    <br />
                    <Input
                        _placeholder={placeholder}
                        style={styles}
                        rounded='4px'
                        variant="outline"
                        name="company"
                        value={company}
                        onChange={handleChange}
                        placeholder='Company name' />
                    <br />
                    <Input
                        _placeholder={placeholder}
                        style={styles}
                        rounded='4px'
                        variant="outline"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        placeholder="Email address" />
                    <br />
                    <Input
                        _placeholder={placeholder}
                        style={styles}
                        rounded='4px'
                        variant="outline"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        placeholder="Password" />
                    <Text textAlign="right" fontWeight="500" fontSize="12px">Between 8 and 256 characters</Text>
                    <Button
                        style={button_style}
                        rounded="none"
                        px={["40px","106px"]}
                        py="30px"
                        mt="20px"
                        onClick={handleSubmit}
                    >
                        Create my account
                    </Button>
                    <Text mt="14px" fontSize="10px">To find out more about how we're using the information you're giving,
                        <br /> please review our <Text color="blue" display="inline">privacy statement.</Text></Text>
                </Box>
                <Text fontSize="12px" mt='15px'>
                    By signing up, you agree to our <u>Terms of Use</u> and <u> Anti-spam </u><br />Policy.
                </Text>
            </Box>
        </div>
    )
}

export default Login

