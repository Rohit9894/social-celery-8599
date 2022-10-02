import { Box, Text, Flex, Heading, Img, Button } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineMail } from "react-icons/ai";

function Poster() {
    return (
        <div>
            <Flex
                gap="20px"
                py="40px" px="40px" bg="#f6f6f7 "
            >
                <Box w={["100%",'70%']}
                    boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                >
                    <Img src="https://www.campaignmonitor.com/wp-content/uploads/2022/04/sms-featured-1024x569.png" />
                    <Box py="20px" px="40px" textAlign={"left"}>
                        <Heading fontWeight="400" fontSize="28px">Introducing Campaign Monitor SMS: a New Way to connect and Convert</Heading>
                        <Text>Today,audiences expect a lot from the brands they inetrect with.they want personallized relevant...</Text>
                    </Box>
                </Box>
                <Box display={["none","block"]} w="30%" >
                    <Box h="50%"
                        pt="10px"
                        boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                        bgImage="url(https://www.campaignmonitor.com/wp-content/uploads/2022/04/sms-featured-1024x569.png)"
                    >
                        <Box pl="10px" bg="white" roundedRight="20px" roundedTopLeft="5px" mt="10%" w="90%" h="80%" >
                            <Heading pt="20%" textAlign="left" fontWeight="400" fontSize="28px">
                                From template builders to SMS, check out all our Features.
                            </Heading>
                            <Button mt="10px" ml="-190px" rounded="none" bg="#7856ff" color="white">Veiw Features</Button>
                        </Box>
                    </Box>
                    <Box h="46.4%" border="1px solid yellow"
                        bg="#7856ff"
                        color="white"
                        textAlign="left"
                        pl="50px"
                        mt="25px"
                        boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"

                    >
                        <Box mt="100px"> <AiOutlineMail size="30px" style={{ color: "white" }} /></Box>
                        <Text fontSize="25px" fontWeight="500">Try Campaign Monitor today</Text>
                        <Text>Send newletters , build campaigns,and build
                            your audience with our easy-yet
                            powerful platform.
                        </Text>
                        <Text mt="20px">
                            Sign up for free -
                        </Text>
                    </Box>

                </Box>
            </Flex>
        </div>
    )
}

export default Poster
