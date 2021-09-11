import { Flex, Spacer, useColorModeValue } from '@chakra-ui/react';
import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const ChatBubbles = (props) => {
    const chatBgR = useColorModeValue("#e6e6e6", "#383838");
    const chatBgS = useColorModeValue("#008cff", "#007ade");
    const chatTxt = useColorModeValue("gray.700", "gray.200");

    const type = props.type;
    const body = props.body;

    return (
        <Flex zIndex={-1000} mb={2}>
            {type==="recieved"?
            <>
            <Box 
                backgroundColor={chatBgR}
                borderTopRightRadius="15px" 
                borderTopLeftRadius="15px"
                borderBottomRightRadius="15px"
                px="0.8em" py="0.3em"
                >
                    <Text textColor={chatTxt} right="0">{body}</Text>
                </Box>
                <Spacer />
            </>
                :
                <>
                    <Spacer />
                    <Box 
                    backgroundColor={chatBgS}
                    borderTopRightRadius="15px" 
                    borderTopLeftRadius="15px"
                    borderBottomLeftRadius="15px"
                    px="0.8em" py="0.3em"
                    
                    >
                        <Text textColor="#fff" right="0">{body}</Text>
                    </Box>
                </>
            }
        </Flex>
    )
}

export default ChatBubbles
