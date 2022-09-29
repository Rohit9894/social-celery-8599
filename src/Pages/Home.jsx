import { Box, Button, Flex, Heading, Img,Text } from '@chakra-ui/react'
import React from 'react'
import Footer from '../Compnents/Footer'
import Navbar from '../Compnents/Navbar'

function Home() {
  return (
    <div>
      <Navbar/>
      <Box pt="100px">

        <Flex h="auto"  
        margin="auto"
        direction={["column","row"]}
         w="88%">

         <Flex 
        direction="column" w={["100%","50%"]}>

        <Heading 
        mt="70px"
        textAlign="left"
         fontSize={["30px","56px" ]}
         textStyles="mytext"
         fontFamily=" 'Fira Sans', sans-serif">
         <Box>
         Drive results with
         unforgettable email
         marketing.
         </Box>
        </Heading>

        <Text 
          mt="40px"
         fontFamily=" 'Fira Sans', sans-serif"
         textAlign="left"
         fontSize={["15px","18px" ]}
         lineHeight="32x"
        >
        Connecting with your audience has never been easier with Campaign Monitor’s straightforward email marketing and automation tools.
        </Text>

         <Flex
         mt="60px"
         justifyContent="space-between" >
         <Button 
         w="48%"
         py={["10px","30px"]}
         color="white"
         variant="outline" 
         rounded="3px"
         bg="#7856ff"
           >Sign up for free</Button>
         <Button
         w="48%"
         py={["10px","30px"]}
         color="#7856ff "
         variant="outline" 
         rounded="3px"
         borderColor="blue"
         border="1px solid blue"
         _hover={{
            color:"white",
            backgroundColor:"blue"
         }}
         >Learn more</Button>
         </Flex>

         </Flex>
         <Box w={["100%","50%"]} px={["5px","0px"]}>
            <Img src="./Home/first.jpg" alt="home"/>
         </Box>
        </Flex>
         {/* -----------------------Poster-1------------------- */}
       <Flex
        bg="#f6f6f7"
        h="auto"
        py="100px"
        justifyContent="center"
        alignItems="center"
        >

       <Box>
       <Text
       fontSize={["18px","22px"]}
       textAlign="center">Powering email marketing for businesses around the world.</Text>
       
       <Flex
       gap="30px"
       justifyContent="center"
       >
       <Img display={["block","block"]} h="88px"  src="./Home/one.jpg" alt="helo"/>
       <Img display={["block","block"]} h="88px" src="./Home/two.jpg" alt="helo"/>
       <Img display={["none","block"]} h="88px" src="./Home/three.jpg" alt="helo"/>
       <Img display={["none","block"]} h="88px" src="./Home/four.jpg" alt="helo"/>
       <Img display={["none","block"]} h="88px" src="./Home/five.jpg" alt="helo"/>
       </Flex>
       </Box>

       </Flex>
       {/* ---------------------Poster-2------------------------- */}
       <Box py='60px'>
      <Heading fontSize="36px">Drag and drop your way to a beautiful email.</Heading>
     </Box>

      <Flex direction={["column","row"]} h="auto"  w="100%">
      <Box 
      fontFamily=" 'Fira Sans', sans-serif"
      fontSize="17px" 
      pl="10px" mt="60px"
       textAlign="left" lineHeight="30px" 
       w={["100%","50%"]}>
        <Text as='b'>EASE OF USE</Text>
        <Text>Customize any template or design to showcase your brand
          using the simply powerful drag-and-drop email builder—no
          coding required.
        </Text>

        <Text as='b'>COMPLETE CUSTOMIZATION</Text>
        <Text>
        Display your brand at its best with precise adjustments to every 
        aspect of your campaign in the email builder.
        </Text>
         

        <Text as='b'>MOBILE OPTIMIZATION</Text>
        <Text>
        Every template is responsive to mobile devices so you can send
         knowing your campaigns look great everywhere.
        </Text>

        <Text as='b'>TEMPLATE MANAGEMENT FOR TEAMS</Text>
        <Text>
        Allow your email designer to lock sections of the template so
         that your team only updates what you want them to — ensuring
          your brand style and business critical information all stay intact.
        </Text>
      </Box>

      <Flex w={["100%","50%"]} px={["5px","0px"]}>
      <Img src="./Home/seven.jpg" alt="home"/>
    </Flex>
    </Flex>

    {/* --------------------------poster-3----------------------------- */}

      </Box>
      <Footer/>
    </div>
  )
}

export default Home
