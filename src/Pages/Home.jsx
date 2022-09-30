import { Box, Button, Flex, Heading, Img,Text } from '@chakra-ui/react'
import React from 'react'
import Footer from '../Compnents/Footer'
import Navbar from '../Compnents/Navbar'
import "./Home.css"


const hover={
  backgroundColor:"#7856ff",
  color:"white"
}
function Home() {
  return (
    <div>
      <Navbar/>
    
      <Box pt="100px"
      fontFamily=" 'Fira Sans', sans-serif"
      >

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

    <Flex
    my="60px"
    align="center"
     direction="column">
      <Text 
      fontSize="18px"
      >Eager to see in action ? Take a look</Text>
      <Button 
      className="app_button"
      h="60px"
      mt="10px"
      px="40px"

      >
      Get Started form free
     </Button>
    </Flex>

  {/* ------------------button------------------- */}
  <Flex
  direction={["column","row"]}
   bg="#f6f6f7">
    <Box w={["100%","50%"]}>
    <img src="./Home/nine.jpg" alt="home"/>
    </Box>
    <Flex 
        direction="column" w={["100%","50%"]}
        mt="40px"
        pl="10px"
        >
     
        <Heading 
        mt="70px"
        textAlign="left"
         fontSize={["30px","32px" ]}
         textStyles="mytext"
         fontFamily=" 'Fira Sans', sans-serif">
      
        SMS is here!<br/>
        A new way to <i><Box fontWeight="normal" display="inline">connect</Box>.</i><br/>
        A new way to <i><Box fontWeight="normal" display="inline">convert</Box>.</i>
  
        </Heading>

        <Text 
          mt="40px"
         fontFamily=" 'Fira Sans', sans-serif"
         textAlign="left"
         fontSize={["15px","18px" ]}
         lineHeight="32x"
        >
Combining SMS and email marketing is the<br/>
 perfect way to build a stronger connection with<br/>
  your audience and maximize ROI. We make it<br/>
   easy to get started.        </Text>

         <Flex
         mt="60px"
         justifyContent="space-between" >
         <Button 
         px="40px"
         py={["10px","30px"]}
         color="white"
         variant="outline" 
         rounded="3px"
         bg="#7856ff"
           >Learn More</Button>
       
         </Flex>

         </Flex>
  </Flex>
  {/* ------------------poster-5------------------- */}
  <Flex
  mt="20px"
  direction={["column","row"]}
   bg="#f6f6f7">
    <Box w={["100%","50%"]}>
    <img src="./Home/ten.jpg" alt="home"/>
    </Box>
    <Flex 
        direction="column" w={["100%","50%"]}
        mt="40px"
        pl={["50px","80px"]}
        >
     
        <Heading 
        mt="70px"
        textAlign="left"
         fontSize={["30px","32px" ]}
         textStyles="mytext"
         fontFamily=" 'Fira Sans', sans-serif">
      
      Get started with one of our free templates.
  
        </Heading>

        <Text 
          mt="40px"
         fontFamily=" 'Fira Sans', sans-serif"
         textAlign="left"
         fontSize={["15px","18px" ]}
         lineHeight="32x"
        >
     Start your email with one of our professionally-designed templates to launch targeted campaigns like marketing offers, product announcements, newsletters, or event promotions.       </Text>

         <Flex
         mt="60px"
         justifyContent="space-between" >
         <Button 
         px="40px"
         py={["10px","30px"]}
         color="#7856ff"
         variant="outline" 
         rounded="3px"
         borderColor="#7856ff"
         bg="white"
         _hover={hover}
           >Build an email</Button>
       
         </Flex>

         </Flex>
  </Flex>
  {/* ---------------------------Poster---------------------------- */}
  <Box
  display={["none","block"]}
  mt="50px"
  color="white"
  >
    <Img src="./Home/eleven.jpg" alt="img"/>
    <Box  position="relative"
     top="-232px"
     left="40px"
     lineHeight="35px"
   
   textAlign="left"><Text fontSize="24px">"Campaign Monitor helped us easily create beautiful<br/> Bombshell wetsuit into a global phenomenon.”</Text>
    <Text>James Taylor, Global Creative Director</Text>
    <Button
    background="white"
    color="#7856ff"
    rounded="3px"
    py="30px"
    _hover={{
      color:"white",
      backgroundColor:"transparent"
    }}
    borderColor='1px solid blue'
    >See Rip Curl's success</Button>
    </Box>
  </Box>
{/* -------------------------Image--------------------------- */}
<Flex
  mt={["-20px","-170px"]}
  
  direction={["column","row"]}
   bg="#f6f6f7">
 
    <Flex 
        direction="column" w={["100%","50%"]}
        mt="40px"
        pl={["50px","80px"]}
        >
     
        <Heading 
        mt="70px"
        textAlign="left"
         fontSize={["30px","32px" ]}
         textStyles="mytext"
         fontFamily=" 'Fira Sans', sans-serif">
          Automate email journeys <br/>for perfectly timed sends.
  
        </Heading>

        <Text 
          mt="40px"
         fontFamily=" 'Fira Sans', sans-serif"
         textAlign="left"
         fontSize={["15px","18px" ]}
         lineHeight="32x"
        >
      Most marketers think automation is intimidating. But<br/> creating customer journeys has never been more<br/> approachable than with the visual journey designer.
      </Text>

         <Flex
         mt="60px"
         justifyContent="space-between" >
         <Button 
         px="40px"
         py={["10px","30px"]}
         color="#7856ff"
         variant="outline" 
         rounded="3px"
         borderColor="#7856ff"
         bg="white"
         _hover={hover}
           >Explore automation</Button>
       
         </Flex>
       </Flex>
         <Box w={["100%","50%"]}>
    <img src="./Home/twelve.jpg" alt="home"/>
    </Box>
  </Flex>
  {/* -----------------------Poster--------------------------- */}
  <Box
  display={["none","block"]}
  
  color="white"
  >
    <Img src="./Home/thirteen.jpg" alt="img"/>
    <Box  position="relative"
     top="-232px"
     left="40px"
     lineHeight="35px"
   
   textAlign="left"><Text fontSize="24px">"Campaign Monitor helped us easily create beautiful<br/> Bombshell wetsuit into a global phenomenon.”</Text>
    <Text>James Taylor, Global Creative Director</Text>
    <Button
    background="white"
    color="#7856ff"
    rounded="3px"
   py="30px"
    _hover={{
      color:"white",
      backgroundColor:"transparent"
    }}
    borderColor='1px solid blue'
    >See Rip Curl's success</Button>
    </Box>
  </Box>

  <Box bg="#000000" color="white" py="80px" display={["blcok","none"]}>
    <Text px="20px" textAlign="center">
    Get started with<br/> Campaign Monitor today
   </Text>
   <Text>
   With our powerful yet easy-to-use tools, it's never been easier <br/>
   to make an impact with email marketing.
   </Text>
    <Button
    mt="20px"
    background="white"
    color="#7856ff"
    rounded="3px"
    py="10px"
    _hover={{
      color:"white",
      backgroundColor:"transparent"
    }}
    borderColor='1px solid blue'
    >See The GIST's success</Button>
  </Box>
  {/* --------------------image--------------------- */}
  
  <Box mt="-170px" bg="#6d92ff" color="white" py="110px" >
    <Heading px="20px" textAlign="center">
    Get started with<br/> Campaign Monitor today
    </Heading>
    <Text mt="40px">
    With our powerful yet easy-to-use tools, it's never been easier<br/>
     to make an impact with email marketing.
    </Text>
    
    <Button
    mt="20px"
    background="white"
    color="#7856ff"
    rounded="3px"
    
    py="30px"
    _hover={{
      color:"white",
      backgroundColor:"transparent",
      
    }}
    border='1px solid white'
    >Sign up for free</Button>
  </Box>
  {/* ----------------Box-------------------- */}
      </Box>
      <Footer/>
    </div>
  )
}

export default Home
