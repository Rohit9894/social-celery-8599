import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Text
} from '@chakra-ui/react'
const hover={
    borderLeft:"4px solid #7856ff",
    cursor:"pointer",
    color:"black"


}
function Accord() {
    return (
        <div>
            <Accordion bg="white" defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                              <Text  color="teal">Resources Type</Text>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel textAlign="left" pb={4}>
                        <Box _hover={hover}  pl="5px" boxSizing="border-box" py="4px" color="teal">ALL</Box>
                        <Box _hover={hover}  pl="5px" boxSizing="border-box" py="4px" color="teal">BLOG</Box>
                        <Box _hover={hover}  pl="5px" boxSizing="border-box" py="4px" color="teal">GUIDES</Box>
                        <Box _hover={hover}  pl="5px" boxSizing="border-box" py="4px" color="teal">INFOGRAPHICS</Box>
                        <Box _hover={hover}  pl="5px" boxSizing="border-box" py="4px" color="teal">COLLECTIONS</Box>
                        <Box _hover={hover}  pl="5px" boxSizing="border-box" py="4px" color="teal">WEBINARS</Box>
                        <Box _hover={hover}  pl="5px" boxSizing="border-box" py="4px" color="teal">EVENTS</Box>
                        <Box _hover={hover}  pl="5px" boxSizing="border-box" py="4px" color="teal">VIDEOS</Box>
                        <Box _hover={hover}  pl="5px" boxSizing="border-box" py="4px" color="teal">COMPARISONS</Box>
                        <Box _hover={hover}  pl="5px" boxSizing="border-box" py="4px" color="teal">KNOWLEDGEBASE</Box>
                        <Box _hover={hover}  pl="5px" boxSizing="border-box" py="4px" color="teal">GLOSSARY</Box>
                        <Box _hover={hover}  pl="5px" boxSizing="border-box" py="4px" color="teal">TOOLS</Box>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default Accord
