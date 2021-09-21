import { Button, Flex, Image, Input, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import emojiFace from "../../../Assets/Images/ChatEmoji@2x.png"

const ChatBottom = () => {

    const inputBackground = useColorModeValue("gray.200","#0D0D0D");
    const bgColor = useColorModeValue("#F8FAFC","#171717");

    return (
            <Flex py="8px" align="center" minW="40vw" maxW="40vw" px={4} fontFamily="Poppins" position="sticky" backgroundColor={bgColor}>
                <Image src={emojiFace} w="1.6em" h="2.0em" />
                <Input 
                    backgroundColor={inputBackground}
                    placeholder="Type message..."
                    mx={4}
                    fontSize="sm"
                />
                <Button backgroundColor="#008cff" textColor="#fff" px={6}  _hover={{backgroundColor:"blue.400"}}>Send</Button>
            </Flex>
    )
}

export default ChatBottom
