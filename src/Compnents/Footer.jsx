import { Box, Flex, Img, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { FaLinkedin, FaInstagram, FaFacebookSquare, FaTwitter } from "react-icons/fa";

function Footer() {
    return (
        <div>
            <Box bg="#111324" h="auto" w="100%" >
                <Flex
                    position="relative"
                    top={["0px", "40px"]}
                    left="20px"
                    alignItems="center"
                    gap="5px"
                >
                    <Img src="./Images/logo4.jpg" h="38px" alt="img" />
                    <Text color="white" fontSize="21px">Campaign Monitor</Text>
                </Flex>


                <SimpleGrid justifyItems="center" templateColumns={["repeat(2,1fr)", "repeat(4,1fr)"]} spacing={4} w={["100%", "60%"]} ml={["0%", "40%"]}>
                    <Box lineHeight="26px" fontSize={["15px","15px"]} textAlign="left" color="white">
                        <Text color="teal">PRODUCT</Text>
                        Features<br />
                        Pricing<br />
                        Integrations<br />
                        API<br />
                        Email Templates
                    </Box>


                    <Box lineHeight="26px" fontSize={["15px","15px"]} textAlign="left" color="white">
                        <Text color="teal"> EMAIL MARKETING</Text>
                        Agencies<br />
                        Retail<br />
                        Nonprofit<br />
                        Entertainment<br />
                        Publishing<br />
                        Technology<br />
                        Travel
                    </Box>


                    <Box lineHeight="26px" fontSize={["15px","15px"]} textAlign="left" color="white">
                        <Text color="teal">COMMUNITY</Text>
                        Get Started<br />
                        Customers<br />
                        Resources<br />
                        Blog<br />
                        Email Academy<br />
                        Support
                    </Box>

                    <Box  lineHeight="26px" fontSize={["15px","15px"]} textAlign="left" color="white">
                        <Text color="teal">COMPANY</Text>
                        About us<br />
                        Leadership<br />
                        Trust center<br />
                        Careers<br />
                        In the news<br />
                        Moder Slavery Statement
                        <Img src="./Images/cookie.jpg" alt="cookid" />
                    </Box>

                </SimpleGrid>

                {/* -------------------GridPart----------------- */}
                <Box mt="50px" w="100%" border="1px solid gray" h="1px"></Box>

                <Flex mt="30px" justifyContent={["center", "right"]} gap="20px" w={["100%", "60%"]}>
                    <FaLinkedin color="#bebec2" fontSize="25px" />
                    <FaTwitter color="#bebec2" fontSize="25px" />
                    <FaInstagram color="#bebec2" fontSize="25px" />
                    <FaFacebookSquare color="#bebec2" fontSize="25px" />
                </Flex>
               

                <Text fontSize="13px"
                    color="white" textAlign="center"
                    mt="50px">
                    Campaign Monitor is part of the CM Group family of brands.</Text>
                <Box
                    mt="50px"
                    display="block">
                    <Img m="auto" src="./Images/appstar.jpg" height="50px" alt="star" />
                </Box>


            </Box>
        </div>
    )
}

export default Footer
