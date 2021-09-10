import { Box, Img, Link, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import errorImgD from "../../Assets/Images/FeedErrorD0.png"
import errorImgL from "../../Assets/Images/FeedErrorL0.png"

const FeedFailed = () => {

    const errorCol = useColorModeValue(errorImgL, errorImgD)
    const textBackground = useColorModeValue("gray.600","gray.200");

    return (
        <Box px={8}>
            <Text textColor={textBackground} fontSize="1.5em" mt={4} fontFamily="Poppins" fontWeight="bold">Something went wrong </Text>
            <Text textColor={textBackground} fontSize="1.3em" mb={20} fontFamily="Poppins" fontWeight="bold">Please <Link textColor="#178BFF" href="/">try again</Link> after few seconds</Text>
            <Img src={errorCol} />
        </Box>
    )
}

export default FeedFailed
