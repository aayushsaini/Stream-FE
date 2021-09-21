import { Box, VStack, Divider } from '@chakra-ui/react'
import React from 'react'
import { useLocation } from 'react-router-dom'
import ChatBody from './ChatBody/ChatBody';
import ChatHeader from './ChatHeader/ChatHeader';
import ChatBottom from './ChatBottom/ChatBottom';
import "./chatScreen.scss"

const ChatScreen = () => {

    const userId = useLocation().state.userId;
    const userName = useLocation().state.userName;
    const userImg = useLocation().state.userImg;
    const userStatus = useLocation().state.online;
    
    return (
        <VStack id="chat-screen">
            <Box id="chat-header" position="fixed" zIndex={1}>
                <ChatHeader name={userName} img={userImg} status={userStatus} />
                <Divider border="0.6px" />
            </Box>
            <Box id="chat-body" px={6} minW="40vw" position="sticky" zIndex={0} overflowY="scroll">
                <ChatBody userId={userId} />
            </Box>
            <Box id="chat-footer" position="fixed" bottom="0" zIndex={1}>
                <Divider border="0.6px" />
                <ChatBottom />
            </Box>
        </VStack>
    )
}

export default ChatScreen
