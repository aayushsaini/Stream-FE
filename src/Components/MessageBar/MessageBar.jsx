import { Img, Text, useColorModeValue, VStack } from '@chakra-ui/react'
import React from 'react'
import StartConvoL from "../../Assets/Images/StartConvoL@2x.png"
import StartConvoD from "../../Assets/Images/StartConvoD@2x.png"

// import useFetch from '../../Hooks/useFetch'

const MessageBar = () => {

    const startConvo = useColorModeValue(StartConvoL, StartConvoD);
    const textColor = useColorModeValue("gray.500","#777777");
    // const { data, isLoading, isError } = useFetch(`http://localhost:8000/posts`);
    // console.log(",",data);

    return (
        <VStack minW="40vw" maxW="40vw" px={20} mt={20}>
            <Img userSelect="none" src={startConvo} />
            <center><Text userSelect="none" fontFamily="Poppins" fontWeight="medium" fontSize="2em" textColor={textColor} mt={10}>Select any message<br/> to open the conversation</Text></center>
        </VStack>
    )
}

export default MessageBar
