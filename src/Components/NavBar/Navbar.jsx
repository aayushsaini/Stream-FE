import React from 'react';
import { Avatar, AvatarBadge, Box, Flex, Image, Spacer, Text, Divider, Wrap } from '@chakra-ui/react';
import logoD from "../../Assets/Images/LogoD.png";
import logoL from "../../Assets/Images/LogoL.png";
import SearchBar from '../SearchBar/SearchBar';
import { useColorMode } from '@chakra-ui/react';

function Navbar() {

    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = (colorMode === "dark");

    let userName = "Alex Traier";
    if (userName.length > 24) {
        userName = userName.substr(0,20)+"...";
    }
    const userPfp = "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";
    const userStatus = "online";

    return (
      
        <Box id="nav" position="sticky" top={0} backgroundColor={isDark?"#171717":"#FFFFFF"} zIndex="2" boxShadow="md" height="62px">
            <Wrap py="0.5em" px="5vw" align="center">
                <Box>
                    <a href="/"><Image src={isDark?logoD:logoL} htmlWidth="160rem" /></a>
                </Box>
                <Spacer />
                <Box px="4.3vw">
                    <SearchBar />
                </Box>
                <Spacer />
                <Box pr="0.5em">
                    <Flex align="center">
                        <Text fontFamily="Poppins" fontWeight="semibold" fontSize="1.2em">{userName}</Text>
                        <Avatar name={userName} boxSize="2em" ml="1em" src={userPfp} onClick={toggleColorMode}>
                            <AvatarBadge boxSize="1em" bg={userStatus==="online"? "green.400": "gray.500"}   />
                        </Avatar>
                    </Flex>
                </Box>
            </Wrap>
            <Divider />
        </Box>
    
    )
}

export default Navbar
