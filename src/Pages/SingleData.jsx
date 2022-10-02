import { Box, Heading, Img, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../Compnents/Footer'
import Navbar from '../Compnents/Navbar'
function getData(id)
{
    console.log(id)
    return fetch(`https://laxinging.herokuapp.com/Resources/${id}`)
    .then(res=>res.json())
}
function SingleData() {
    const { id } = useParams()
    const [data,setData]=useState([])
    useEffect(
        ()=>{
            getData(id)
            .then(res=>{
                setData(res)
            })
        }
       ,[id] )
    console.log(data)
    
    return (
        <div>
            <Navbar />
            <Box pt="80px" bg="#f9f9fa" textAlign="left">
                <Box px={["20px","30px"]} py="40px" w={["100%","70%"]} m="auto" bg="white">
               <Stack spacing="20px">
               <Heading fontWeight="400" >{data.card_des}</Heading>
                <Img display={["none","block"]} src={data.card_Img2} alt="Hello" />
                <Img display={["block","none"]} src={data.card_img} alt="helo"/>
                <Heading fontWeight="400" fontSize="25px">SMS is an essential marketing channel for all kinds of businesses. But,
                    it can be tricky to nail down what kind of message is appropriate for SMS,
                    and what kind will annoy and drive away your customers. Read this post
                    for five incredible SMS marketing examples of messages your audience
                    actually wants to read.</Heading>
                <Text>Everyone likes getting gifts. <Text color="blue" display="inline">But everyone also</Text> has that one weird family member. You know, the one who
                    makes you ugly crocheted “fashion statements” for Christmas and gets you underwear for your birthday.
                </Text>
                <Text>
                    Usually, they have good intentions, but they’re probably <Text color="blue" display="inline">But everyone also</Text> unaware and out of touch with what people
                    actually want. In short message service (SMS) marketing, many brands, unfortunately, become just like
                    your Great Aunt Margaret. Someone told them that “Those hip young people like text messages,” and
                    they started sending SMS marketing messages that are the equivalent of a crocheted necktie and tighty-
                    whities.
                </Text>
                <Text>
                    For example, according <Text color="blue" display="inline">makes up like 99% </Text> consumers want to hear about your customer
                    satisfaction survey via text. (Which, let’s be real, makes up like 99% of text messages people receive from
                    businesses. Annoying much?) On the other hand, according to the same survey, 35% of consumers
                    would love to get special offers or promotions via text.
                </Text>
                <Text>
                    Text message marketing can feel invasive and unwelcome if it’s not personalized and valuable to your audience. If you’re still not sure what consumers want to receive, you’re in luck. This guide covers five SMS marketing examples your audience actually wants to receive so you don’t become the marketing equivalent of Great Aunt Margaret. You’ll increase your conversions and your bottom line.
                </Text>
               </Stack>
                </Box>

            </Box>
            <Footer/>

        </div>
    )
}

export default SingleData
