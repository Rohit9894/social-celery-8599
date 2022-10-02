import { Button, Flex, Img, Text,Box } from '@chakra-ui/react'
import { BiChevronDown} from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
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
          <Img src="data:image/jpeg;base64,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" h="38px" alt="img" />
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
          <Link to="/resources"><Text>Resources</Text></Link>
          <Text>Customers</Text>
          <Text>Gallery</Text>
          <Text>Agencies</Text>
        </Flex>

        <Flex gap="15px" display={{base:"none",lg:"flex"}}>
          <Text>Contact us</Text>
         <Link to="/login"> <Text>Log in</Text></Link>
        <Link to="/signup">
        <Button
            bg='#51cfdb'
            color="black"
            rounded="3px"
            mt="-5px"
          >Try it free</Button>
        </Link>
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

               h="100vh"
             
               direction="column"
               textAlign="left"
               display={["block","none"]}
               w="100%"
              border="2px solid black"
              pl="20px"
              bg="rgba(17,19,36,0.8)"
              position="relative"
              top="80px"
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
