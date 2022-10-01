import React from 'react'
import Navbar from '../Compnents/Navbar'
import Footer from '../Compnents/Footer'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import Accord from '../Parts/Resources/Accord'
import Poster from '../Parts/Resources/Poster'
const hover={
    // borderBottom:"4px solid #7856ff",
    textDecoration:"underline",
    cursor:"pointer",
    color:"black"


}

function Resources() {
    return (
        <div>
            <Navbar />
            <Box
                pt="80px"

                fontFamily=" 'Fira Sans', sans-serif">
                <Box bg="#f6f6f7 " py="60px" textAlign="center" px={["0px", "40px"]}>
                    <Heading fontSize={["46px", "56px"]}>
                        The Marketing Resources Hub
                    </Heading>
                    <Text mt="10px" fontSize="18px">
                        Everything you need for digital and email marketing that's on point.
                    </Text>
                </Box>
                <Flex justifyContent='center'
                    gap='20px'
                    py="5px"
                    display={["none","flex"]}
                >
                    <Box _hover={hover} py="4px" color="teal">ALL</Box>
                    <Box _hover={hover} py="4px" color="teal">BLOG</Box>
                    <Box _hover={hover} py="4px" color="teal">GUIDES</Box>
                    <Box _hover={hover} py="4px" color="teal">INFOGRAPHICS</Box>
                    <Box _hover={hover} py="4px" color="teal">COLLECTIONS</Box>
                    <Box _hover={hover} py="4px" color="teal">WEBINARS</Box>
                    <Box _hover={hover} py="4px" color="teal">EVENTS</Box>
                    <Box _hover={hover} py="4px" color="teal">VIDEOS</Box>
                    <Box _hover={hover} py="4px" color="teal">COMPARISONS</Box>
                    <Box _hover={hover} py="4px" color="teal">KNOWLEDGEBASE</Box>
                    <Box _hover={hover} py="4px" color="teal">GLOSSARY</Box>
                    <Box _hover={hover} py="4px" color="teal">TOOLS</Box>
                </Flex>
                <Box  display={["block","none"]}><Accord/></Box>
                <Poster/>
            </Box>
        </div>
    )
}

export default Resources
