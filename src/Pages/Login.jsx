import { Box, Heading, Input, Text, Button, Flex, Img } from '@chakra-ui/react'
import React from 'react'
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

function Login() {
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
                        <Img src="./Images/logo4.jpg" h="28px" alt="img" />
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
                        type="text" placeholder="Full name" />
                    <br />
                    <Input
                        _placeholder={placeholder}
                        style={styles}
                        rounded='4px'
                        variant="outline"
                        placeholder='Company name' />
                    <br />
                    <Input
                        _placeholder={placeholder}
                        style={styles}
                        rounded='4px'
                        variant="outline"
                        placeholder="Email address" />
                    <br />
                    <Input
                        _placeholder={placeholder}
                        style={styles}
                        rounded='4px'
                        variant="outline"
                        placeholder="Email password" />
                    <Text textAlign="right" fontWeight="500" fontSize="12px">Between 8 and 256 characters</Text>
                    <Button
                        style={button_style}
                        rounded="none"
                        px={["40px","106px"]}
                        py="30px"
                        mt="20px"
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

