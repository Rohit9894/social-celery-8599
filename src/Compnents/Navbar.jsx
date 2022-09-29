import { Button, Flex, Img, Text,Box } from '@chakra-ui/react'
import { BiChevronDown} from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import React, { useState } from 'react'
const myHover={
  background:"#51cfdb",
  textDecoration:" 2px underline",
  cursor:"pointer"

  

}
function Navbar() {
const [isVisible, setIsVisible] = useState(false)
const [isHovering, setIsHovering] = useState(false);
const [navVisible,setNavVisible]=useState(false)
const handleMouseEnter = () => {
  setIsHovering(true);
};
const handleMouseLeave = () => {
  setIsHovering(false);
}
function over(e) {
  setIsVisible(true);
}
function out(e) {
  setIsVisible(false);
}

  return (
    <div >
      <Flex
      position="fixed"
      w="100%"
      zIndex="99"
        py="20px"
        justifyContent="space-between"
        px="20px"
        alignItems="center"
        bg="#111324"
        color="white"
      >

        <Flex
          alignItems="center"
          gap="5px"
        >
          <Img src="./Images/logo4.jpg" h="38px" alt="img" />
          <Text fontSize="25px">Campaign Monitor</Text>
        </Flex>
        <Button onClick={()=>setNavVisible(!navVisible)} bg="none"  display={["block","none"]}>
     {    navVisible?<IoCloseSharp/>:<GiHamburgerMenu/>}
        </Button>

        <Flex gap="12px" display={{base:"none",lg:"flex"}}>
           <Flex
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
            alignItems="center">
           <Text
          onMouseOver={over}
          onMouseOut={out}
          >Features</Text>
           <BiChevronDown style={{
            transform:isHovering?"rotate(180deg)":"rotate(0deg)",transition:"transform 0.20s"
           }}
         
            size="20px" />
           </Flex>
          <Text>Pricing</Text>
          <Text>Resouces</Text>
          <Text>Customers</Text>
          <Text>Gallery</Text>
          <Text>Agencies</Text>
        </Flex>

        <Flex gap="15px" display={{base:"none",lg:"flex"}}>
          <Text>Contact us</Text>
          <Text>Log in</Text>
          <Button
            bg='#51cfdb'
            color="black"
            rounded="3px"
            mt="-5px"
          >Try it free</Button>
        </Flex>
      </Flex>

      {/* ---------Navbar-------------------- */}
      <Box display={isVisible? 'block' : "none"}>
                <Flex
                    boxShadow="md"
                    justifyContent="center"
                    position="absolute"
                    ml="34%"
                    mt="-20px"
                    bg="white"
                    gap="15px"
                    textAlign="left"
                    px="20px"
                    py="20px"
                    borderRadius="10px"
                    direction="column"
                    onMouseOver={over}
                    onMouseOut={out}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                <Text _hover={myHover}>Features Overveiw</Text>
                <Text _hover={myHover}>Email Template Builder</Text>
                <Text _hover={myHover}>Segmnetation</Text>
                <Text _hover={myHover}>Personalization</Text>
                <Text _hover={myHover}>Marketing Automation</Text>
                <Text _hover={myHover}>Transactioal Email</Text>
                <Text _hover={myHover}>Analytics</Text>
                <Text _hover={myHover}>Integration</Text>
                <Text _hover={myHover}>Signup Forms</Text>
                <Text _hover={myHover}>SMS</Text>
                <Text _hover={myHover}>Expert Services</Text>
                <Text _hover={myHover}>What's New</Text>
               </Flex>
               </Box>
               {/* --------------------Dropdown----------------------- */}
             {navVisible &&  <Flex 

               h="80vh"
               direction="column"
               textAlign="left"
               display={["block","none"]}
               w="100%"
              border="2px solid black"
              pl="20px"
              bg="rgba(17,19,36,0.8)"
              position="absolute"
              color="white"
             >
              <Text fontSize="20px" mt="15px">Pricing</Text>
              <Text fontSize="20px" mt="15px">Resouces</Text>
              <Text fontSize="20px" mt="15px">Customers</Text>
              <Text fontSize="20px" mt="15px">Gallery</Text>
              <Text fontSize="20px" mt="15px">Agencies</Text>
              <Text fontSize="20px" mt="15px">Support</Text>
              <Text fontSize="20px" mt="15px">Sales</Text>
               </Flex>}

    </div>
  )
}

export default Navbar
