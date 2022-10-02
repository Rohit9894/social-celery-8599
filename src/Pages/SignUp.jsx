import { Box, Button, FormLabel, Heading, Input,  Stack, Text } from '@chakra-ui/react'
import React from 'react'
import ReCAPTCHA from "react-google-recaptcha"
import {Link} from "react-router-dom"
import Navbar from '../Compnents/Navbar'
function onChange() {
  console.log("Hello")
}

function SignUp() {
  return (
    <div>
    <Navbar/>
      <Box pt="80px" h="150vh" bg="#f9f9fa">
        <Heading
          fontFamily="'Poppins', sans-serif"
          fontWeight="300"
        >
          Login
        </Heading>

        <Box bg="white" w="35%" py="70px" px="50px" m="auto" boxShadow="md">
          <Stack px=""> 
            <FormLabel>Email</FormLabel>
            <Input rounded="2px" />
            <FormLabel>Password</FormLabel>
            <Input rounded="2px" />
          </Stack>
          <Box mt="45px">
          <FormLabel>Identity Check</FormLabel>
            <ReCAPTCHA
              py="10px"
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
              onChange={onChange}
            />
          </Box>
          <Button mt="20px" w="100%" h="60px" color="white" bg="#80bb35">Login</Button>
          <Text>Can't remember your password</Text>
          <Box
            color="#26a6df"
          boxShadow="base"
          lineHeight="25px"
          mt="50px">

           <Link to="/signup">
           <Heading
              fontSize='20px'
              fontWeight="400"
              _hover={{
                textDecoration: "underline",
                cursor: "pointer"
              }}
            >CREATE A FREE ACCOUNT</Heading>
           </Link>
            <Text color="teal">Sign up a free account, and start sendingz<br />
              campaigns for as little as $9/month</Text>
          </Box>


        </Box>

      </Box>
    </div>
  )
}

export default SignUp
