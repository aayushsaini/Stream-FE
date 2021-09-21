import React from 'react'
import { IoIosArrowBack } from "react-icons/all"
import { Avatar, Box, Flex, Icon, Text, useColorModeValue } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const ChatHeader = (props) => {

    const textColor = useColorModeValue("gray.700","gray.200");
    const bgColor = useColorModeValue("#F8FAFC","#171717");
    // const borderCol = useColorModeValue("#e6e6e6","#303030");

    const userName = props.name;
    const userImg = props.img;
    const userStatus = props.status;

    return (
        <Box minW="40vw" maxW="40vw" px={4} backgroundColor={bgColor} zIndex={1} pt="14px" pb="8px">
            <Flex alignItems="center" >
                <Link to="/messages"><Icon as={IoIosArrowBack} w={6} h={6} mr={3} /></Link> 
                    <Avatar name={userName} src={userImg} boxSize="2em" mr={3} />
                    <Text fontFamily="Poppins" fontSize="xl" fontWeight="bold" textColor={textColor} pr={2}>{userName}</Text>
                    {userStatus==="true"?
                        <Icon viewBox="0 0 200 200" color="green.400" >
                            <path
                                fill="currentColor"
                                d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                            />
                        </Icon>
                        :
                        <Icon viewBox="0 0 200 200" color="gray.500" >
                            <path
                                fill="currentColor"
                                d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                            />
                    </Icon>
                    }
            </Flex>
        </Box>
    )
}

export default ChatHeader
