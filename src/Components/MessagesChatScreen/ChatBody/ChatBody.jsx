import { Box, Spinner, Text } from '@chakra-ui/react'
import React from 'react'
import useFetch from '../../../Hooks/useFetch';
import ChatBubbles from './ChatBubbles';
import "./chatBody.scss";

const ChatBody = (props) => {

    const { data, isLoading, isError } = useFetch('https://json-server0.herokuapp.com/chats');

    // const { data, isLoading, isError } = useFetch('http://locahost:8000/chats');
    // console.log(data);
    
    // const userId = props.userId;
    // let recipient = null;
    // let id = null;
    let conversation = null;

    if (isLoading===false){
        // for (let i = 0; i < Object.keys(data).length; i++) {
        //     if (data[i].recipientUserId === userId) {
        //         recipient = userId;
        //         id = i;
        //     }
        // } 
        // conversation = data[id].Conversation;

        conversation = data[0].Conversation;
    }

    return (
        <Box position="relative" height="73vh" fontFamily="Poppins" fontSize="0.8em" w="100%">
            {isLoading && 
            <center>
                <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="md"
                mt={10}
            />
            </center>
            }
            {isError && <Text>Something went wrong...please refresh the page</Text>}
            {!isError && !isLoading && conversation && conversation.map((message) => {
                return (
                    <ChatBubbles type={message.type} body={message.message} />
                )
            })}
            
        </Box>
    )
}

export default ChatBody
