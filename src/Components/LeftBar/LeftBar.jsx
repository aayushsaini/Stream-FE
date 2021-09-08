import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import "./leftBar.scss"
import { Badge } from "@chakra-ui/react"

function LeftBar() {
    return (
        <Flex className="left-menu" minW="30vw" maxW="30vw" flexDirection="column" color="#F8F8F8" mt="1.2em" pl="5.4em" height="max-content" position="sticky" top="10vh">
            <Box className="menu-item active" py="0.2em" fontFamily="Poppins" fontWeight="bold" fontSize="1.5em" pl="0.4em">Home</Box>
            <Box className="menu-item" py="0.2em" fontFamily="Poppins" fontWeight="bold" fontSize="1.5em" pl="0.4em">Messages
                <Badge ml="2" colorScheme="blue">
                    New
                </Badge>
            </Box>
            <Box className="menu-item" py="0.2em" fontFamily="Poppins" fontWeight="bold" fontSize="1.5em" pl="0.4em">Notifications
                <Badge ml="2" colorScheme="pink">
                    New
                </Badge>
            </Box>
            <Box className="menu-item" py="0.2em" fontFamily="Poppins" fontWeight="bold" fontSize="1.5em" pl="0.4em">Requests</Box>
            <Box className="menu-item" py="0.2em" fontFamily="Poppins" fontWeight="bold" fontSize="1.5em" pl="0.4em">Settings</Box>
        </Flex>
    )
}

export default LeftBar
