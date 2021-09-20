import { Box, Spacer, VStack } from '@chakra-ui/react'
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
            <Box position="sticky" top="3.8em" zIndex={1}>
                <ChatHeader name={userName} img={userImg} status={userStatus} />
            </Box>
            <Box px={6} w="100%" position="sticky" mb="4vh" pt="2vh" zIndex={0} overflowY="scroll">
                <ChatBody userId={userId} />
            </Box>
            <Box position="fixed" bottom="0" zIndex={1} overflowY="hidden">
                <ChatBottom />
            </Box>
        </VStack>
    )
}

export default ChatScreen
