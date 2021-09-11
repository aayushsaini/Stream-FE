import { Box, Flex, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import "./leftBar.scss"
// import { Badge } from "@chakra-ui/react"
import { NavLink } from 'react-router-dom'

function LeftBar() {

    const textBackground = useColorModeValue("gray.700","gray.50");
 
    return (
        <Flex className="left-menu" minW="30vw" maxW="30vw" flexDirection="column" color={textBackground} mt="1.2em" pl="5.4em" height="max-content" position="sticky" top="10vh" userSelect="none">
            <NavLink exact to="/" activeClassName="menu-item active">
                <Box className="menu-item" py="0.2em" fontFamily="Poppins" fontWeight="bold" fontSize="1.5em" pl="0.4em">Home</Box>
            </NavLink>
            <NavLink to="/messages" activeClassName="menu-item active"> 
                <Box 
                className="menu-item" 
                py="0.2em" pl="0.4em"
                fontFamily="Poppins" fontWeight="bold" fontSize="1.5em">Messages
                    {/* <Badge ml="2" colorScheme="blue">
                        New
                    </Badge> */}
                </Box>
            </NavLink>
            <Box className="menu-item" py="0.2em" fontFamily="Poppins" fontWeight="bold" fontSize="1.5em" pl="0.4em">Notifications
                {/* <Badge ml="2" colorScheme="pink">
                    New
                </Badge> */}
            </Box>
            <Box className="menu-item" py="0.2em" fontFamily="Poppins" fontWeight="bold" fontSize="1.5em" pl="0.4em">Requests</Box>
            <Box className="menu-item" py="0.2em" fontFamily="Poppins" fontWeight="bold" fontSize="1.5em" pl="0.4em">Settings</Box>
        </Flex>
    )
}

export default LeftBar
