import { Box, Button, Flex, Heading, Img, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import { BsCaretDown } from "react-icons/bs";
import { SimpleGrid } from '@chakra-ui/react'
import { GiCarDoor } from 'react-icons/gi';
import { Link } from 'react-router-dom';
function getData(page) {
    return fetch(`https://laxinging.herokuapp.com/Resources?_limit=6&_page=${page}`)
        .then(res => res.json())
}
function GridData() {
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    console.log(data)
    useEffect(
        () => {
            setLoading(true)
            getData(page)
                .then(res => {
                    setLoading(false)
                    setData([...data,...res])
                    
                })
        }
        , [page])
    return (
        <div>
            <Box px="40px" bg="#f6f6f7">
                <Heading py="50px">Browse our resource library</Heading>
                <Flex gap="30px">
                    <Flex
                        mt="30px"
                        borderBottom="1px solid black"
                        justifyContent="space-between"
                        py="-30px"
                        w="70%">
                        <Text fontWeight="500">search resources</Text>
                        <AiOutlineSearch size="20px" />
                    </Flex>
                    <Flex
                        border="1px solid black"
                        py="15px"
                        justifyContent="space-between"
                        px="20px"
                        w="30%">
                        <Text>Filter by topic</Text>
                        <BsCaretDown />
                    </Flex>
                </Flex>

                <SimpleGrid mt="40px" columns={[1, 2, 3]} spacing={10}>
                    {
                        data.map((item) => (
                      <Link to={`/resources/${item.id}`}>
                      <Box
                                textAlign="left"
                                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                                fontFamily="'Poppins', sans-serif"
                            >
                                <Img src={item.card_img} alt="hello" />
                                <Box px="30px" py="30px">
                                    <Heading
                                        fontSize="24px"
                                        fontWeight="500"
                                    >
                                        {item.card_des}
                                    </Heading>
                                    <Text mt="20px">SMS is an essential marketing channel for all
                                        Kinds of businesses But,it can be ...
                                    </Text>
                                </Box>
                            </Box>
                      </Link>
                                ))
                    }

                </SimpleGrid>
                <Button
                    mt="80px"
                    rounded="none"
                    border="1px solid #7856ff"
                    py="25px"
                    px="20px"
                    disabled={loading || page === 7}
                    _hover={{
                        backgroundColor: "#7856ff",
                        color: "white"
                    }}
                    onClick={() => setPage(page + 1)}>{loading ? "Loading..." : "Loading More"}</Button>
                <Box mt="70px">
                    <Heading fontFamily="'Poppins', sans-serif">
                        More resources to explore
                    </Heading>
                    <SimpleGrid mt="50px" columns={[1, 2, 3]} spacing={10}>
                        <Box
                            borderBottom="2px solid black"
                            py="20px"
                            px="20px"
                            textAlign="left" >
                            <Heading fontSize="23px" fontWeight="500">
                                Marketing to Gen Z: How to Reach a New Generation of Consumers
                            </Heading>
                            <Text mt="10px">
                                This report examines new data around Gen Z’s motivations, behaviors, and preferences.
                            </Text>
                            <Text mt="10px" color="blue">
                                Download the report -
                            </Text>
                        </Box>
                        <Box
                            borderBottom="2px solid black"
                            py="20px"
                            px="20px"
                            textAlign="left" >
                            <Heading fontSize="23px" fontWeight="500">
                                B2C Email Automation Recipe Book                            </Heading>
                            <Text mt="10px">
                                Everything you need to build and send 8 must-have automation journeys for any B2C business.                            </Text>
                            <Text mt="10px" color="blue">
                                Download it now -
                            </Text>
                        </Box>
                        <Box
                            borderBottom="2px solid black"
                            py="20px"
                            px="20px"
                            textAlign="left" >
                            <Heading fontSize="23px" fontWeight="500">
                                Custom Signup Form Builder
                            </Heading>
                            <Text mt="10px">
                                Design your own email signup form with our free signup form builder and start collecting addresses today.
                            </Text>
                            <Text mt="10px" color="blue">
                                Build a signup form -
                            </Text>
                        </Box>
                        <Box
                            borderBottom="2px solid black"
                            py="20px"
                            px="20px"
                            textAlign="left" >
                            <Heading fontSize="23px" fontWeight="500">
                                Get Your Email Score
                            </Heading>
                            <Text mt="10px">
                                Wonder how your metrics stack up to your competitors? We analyzed millions of emails so you can find out. Get your personalized email score                            </Text>
                            <Text mt="10px" color="blue">
                                Get Your Score -
                            </Text>
                        </Box>
                        <Box
                            borderBottom="2px solid black"
                            py="20px"
                            px="20px"
                            textAlign="left" >
                            <Heading fontSize="23px" fontWeight="500">
                                80+ Free HTML Email Templates
                            </Heading>
                            <Text mt="10px">
                                This report examines new data around Gen Z’s motivations, behaviors, and preferences.
                            </Text>
                            <Text mt="10px" color="blue">
                                Browse templates -
                            </Text>
                        </Box>
                        <Box
                            borderBottom="2px solid black"
                            py="20px"
                            px="20px"
                            textAlign="left" >
                            <Heading fontSize="23px" fontWeight="500">
                                List Growth Tactics Course
                            </Heading>
                            <Text mt="10px">
                                Learn how to grow your email list in a healthy, sustainable way with our free list-growth tactics course.
                            </Text>
                            <Text mt="10px" color="blue">
                                Enroll for free -
                            </Text>
                        </Box>


                    </SimpleGrid>
                </Box>
                
               
            </Box>
            <Box
                    mt="40px"
                    py="180px"
                    color='white'
                    bg="#7856ff">
                    <Box width={["100%","50%"]} m="auto">
                        <Heading fontWeight="normal">Get started <br />with Campaign Monitor today.</Heading>
                        <Text mt="20px">With our powerful yet easy-to-use tools, it's never been easier<br /> to make an impact with email marketing.</Text>
                        <Button
                            rounded="none"
                            px="30px"
                            bg='white'
                            color="#7856ff"
                            _hover={{
                                backgroundColor: "#7856ff",
                                border: "1px solid white",
                                color: "white"
                            }}
                            py="20px"
                            mt="20px">
                            Try for free</Button>
                    </Box>
                </Box>
        </div>
    )
}

export default GridData
