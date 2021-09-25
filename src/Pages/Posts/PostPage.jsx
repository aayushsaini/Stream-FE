import React from 'react'
import { Box, VStack, Flex, Divider } from '@chakra-ui/layout'
import { useLocation, Link } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/all"
import ContentCard from '../../Components/CenterBar/ContentCard/ContentCard'
import { Icon, Input, InputGroup, useColorModeValue, Text, Spacer } from '@chakra-ui/react'


const PostPage = () => {

    const inputBackground = useColorModeValue("gray.200","#0D0D0D");

    return (
        <VStack minW="40vw" maxW="40vw">
            <Box w="94%">
                <Link to="/">
                    <Flex align="center" pt={3} pb={1} fontWeight="semibold">
                        <Icon as={IoIosArrowBack} w={6} h={6} mr={3} /> Back
                    </Flex>
                </Link> 
            </Box>
            <Box w="94%" pb={1}>
                <ContentCard postData={useLocation().state.data} />
            </Box>
            <Divider w="82%" />
            <Box w="88%" pt={0.5}>
                <InputGroup alignItems="center" >
                    <Input mt="0.2em" 
                        backgroundColor={inputBackground}
                        fontSize="0.8em"
                        border="0px"
                        borderRadius="10px" 
                        width="27vw" 
                        placeholder="Comment on this post..." 
                    />
                    <Spacer />
                    <Box className="btn-grad"><Text fontSize="xs" fontWeight="extrabold" textColor="">Comment</Text></Box>
                </InputGroup>
            </Box>
        </VStack>
    )
}

export default PostPage
