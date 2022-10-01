import { Box,Text, Flex, Heading, Img } from '@chakra-ui/react'
import React from 'react'

function Poster() {
  return (
    <div>
      <Flex>
       <Box w='70%' border="1px solid black">
        <Img src="./Resources/first.jpg"/>
        <Box>
        <Heading fontWeight="400">Introducing Campaign Monitor SMS: a New Way to connect and Convert</Heading>    
        <Text>Today,audiences expect a lot from the brands they inetrect with.they want personallized relevant...</Text>
        </Box>
       </Box>
       <Box w="30%" >
        <Box>  <Img  src="./Resources/first.jpg"/></Box>
        <Box>

        </Box>
       </Box>
      </Flex>
    </div>
  )
}

export default Poster
