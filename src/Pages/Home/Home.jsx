import { Flex,
         Textarea, 
         Text, 
         Box, 
         Spacer, 
         VStack,
         Divider, 
         useColorModeValue } from '@chakra-ui/react'
import { React } from 'react'
import "./home.scss"
import ContentCard from '../../Components/CenterBar/ContentCard/ContentCard'
import LoadingContentCard from '../../Components/CenterBar/LoadingContent/LoadingContentCard';
import FeedFailed from '../../Components/Errors/FeedFailed';
import useFetch from '../../Hooks/useFetch';

function Home() {

    const inputBackground = useColorModeValue("#e1e9f2","#0D0D0D");
    const dividerBg = useColorModeValue("gray.200",);
  
    const { data, isLoading, isError } = useFetch('https://json-server0.herokuapp.com/posts');
    // const { data, isLoading, isError } = useFetch('http://localhost:8000/posts');

    return (
        <VStack minH="max-content" mb={0} pb={0}>
            {!isError && <Flex minW="40vw" maxW="40vw" flexDirection="column" px="1.2em" pt="1.2em" mb={0} pb={0}>
                <Textarea minH="5.3em" 
                resize="none"
                placeholder="Write a post..." 
                border="none" 
                borderRadius="12px"
                backgroundColor={inputBackground}
                fontSize="0.9em" 
                pt="1em" pb="1em"
                // boxShadow="sm"
                />
                <Flex flexDirection="row" justify="flex-end" mt="0.8em" mb="0.4em">
                    <Box className="btn-grad"><Text fontSize="xs" fontWeight="extrabold" textColor="">Share now</Text></Box>
                </Flex>
            </Flex>}
            <Divider backgroundColor={dividerBg} border={0} />
            {isError && <FeedFailed />}
            {isLoading && <LoadingContentCard />}
            <VStack w="94%">
                <Spacer/>
                {data && data.map((post) => {
                    return(
                            <ContentCard postData={post} key={post.postId}/>
                    )
                })}
            </VStack>
        </VStack>
    )
}

export default Home
