import React from 'react';
import { Box, Flex, HStack, IconButton, Image, Spacer, Text, useColorMode, Wrap } from '@chakra-ui/react';
import logo from "../../Assets/Images/Logo.png";
import SearchBar from '../SearchBar/SearchBar';
import { Divider } from '@chakra-ui/react';

function Navbar() {

    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = (colorMode === "dark");

    return (
        <Box position="sticky" top={0} backgroundColor="#171717" zIndex="1">
            <Wrap px="6vw" py="0.5em" justify="space-between" align="center">
                <Image src={logo} htmlWidth="160rem" />
                {/* <Spacer /> */}
                <SearchBar />
                {/* <Spacer /> */}
                <Flex align="center">
                    <Text fontFamily="Poppins" fontWeight="semibold" fontSize="1.2em">Aayush Saini</Text>
                    <IconButton background="none" _hover="none"_after="none" _activeLink="none" _active="none" icon={ <Image src="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                     my={1} boxSize="4vh" objectFit="cover" borderRadius="8px" ml="1.5em" />} onClick={toggleColorMode}></IconButton> 
                </Flex>
            </Wrap>
            <Divider />
        </Box>
    )
}

export default Navbar
