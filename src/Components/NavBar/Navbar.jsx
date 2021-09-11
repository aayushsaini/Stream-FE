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
    // console.log(userName.length)
    if (userName.length > 24) {
        userName = userName.substr(0,20)+"...";
    }
    const userPfp = "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";
    const userStatus = "online";

    return (
        <Box position="sticky" top={0} backgroundColor={isDark?"#171717":"#FFFFFF"} zIndex="1" boxShadow="md">
            <Wrap px="6vw" py="0.5em"  align="center">
            {/* <Grid  templateColumns="repeat(12)" gap={6}> */}
                <Box pr="13vw">
                    <a href="/"><Image src={isDark?logoD:logoL} htmlWidth="160rem" /></a>
                </Box>
                {/* <Spacer /> */}
                <Box px="4.3vw">
                    <SearchBar />
                </Box>
                <Spacer />
                <Box>
                    <Flex align="center">
                        <Text fontFamily="Poppins" fontWeight="semibold" fontSize="1.2em">{userName}</Text>
                        {/* <IconButton background="none" _hover="none"_after="none" _activeLink="none" _active="none" icon={ <Image src="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        my={1} boxSize="4.5vh" objectFit="cover" borderRadius="8px" ml="1.5em" />} onClick={toggleColorMode}></IconButton>  */}
                        <Avatar name={userName} boxSize="2em" ml="1em" src={userPfp} onClick={toggleColorMode}>
                            <AvatarBadge boxSize="1em" bg={userStatus==="online"? "green.400": "gray.500"}   />
                        </Avatar>
                    </Flex>
                </Box>
            {/* </Grid> */}
            </Wrap>
            <Divider />
        </Box>
    )
}

export default Navbar
