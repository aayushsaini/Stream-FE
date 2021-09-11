import { Box, VStack } from '@chakra-ui/react'
import React from 'react'
import { useLocation } from 'react-router-dom'
import ChatBody from './ChatBody/ChatBody';
import ChatHeader from './ChatHeader/ChatHeader';
import ChatBottom from './ChatBottom/ChatBottom';

const ChatScreen = () => {

    // const textColor = useColorModeValue("gray.700","gray.200");
    const userId = useLocation().state.userId;
    const userName = useLocation().state.userName;
    const userImg = useLocation().state.userImg;
    const userStatus = useLocation().state.online;
    
    return (
        <VStack>
            <Box position="sticky" top="3.8em">
                <ChatHeader name={userName} img={userImg} status={userStatus} />
            </Box>
            <Box px={6} w="100%">
                <ChatBody userId={userId} />
            </Box>
            <Box position="sticky" bottom="1em">
                <ChatBottom />
            </Box>
        </VStack>
    )
}

export default ChatScreen
