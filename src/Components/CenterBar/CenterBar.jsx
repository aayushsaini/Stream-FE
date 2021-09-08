import { Spacer } from '@chakra-ui/react'
import { Flex, Textarea, Text, Box, VStack, Divider, useColorModeValue } from '@chakra-ui/react'
import { React } from 'react'
import "./centerBar.scss"
import ContentCard from './ContentCard/ContentCard'

function CenterBar() {

    const inputBackground = useColorModeValue("#e1e9f2","#0D0D0D");
    const divideBg = useColorModeValue("gray.500","gray.50")

    const postsData = [
            {
                postId: "101",
                userName: "Ben Bohmer",
                userId: "benn__bohmerr",
                userImg: "",
                postText: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo ",
                postImg: "",
                likes:"0",
                comments: 0
            },
            {
                postId: "102",
                userName: "Ben Bohmer",
                userId: "benn__bohmerr",
                userImg: "",
                postText: "My new House ✨🏡",
                postImg: "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
                likes: "29",
                comments: 22
            },
            {
                postId: "201",
                userName: "Naomi Silvoska",
                userId: "silvoskaa_22",
                userImg: "https://images.pexels.com/photos/4039183/pexels-photo-4039183.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                postText: "From new shoot!",
                postImg: "https://images.pexels.com/photos/6280956/pexels-photo-6280956.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
                likes: "99",
                comments: 59
            }
    
    ];

    return (
        <VStack>
            <Flex minW="40vw" flexDirection="column" px="1.2em" pt="1.2em">
                <Textarea minH="5.3em" 
                resize="none"
                placeholder="Write a post..." 
                border="none" 
                borderRadius="12px"
                backgroundColor={inputBackground}
                fontSize="0.9em" 
                pt="1em" pb="1em"
                />
                <Flex flexDirection="row" justify="flex-end" mt="0.8em">
                    <Box className="btn-grad"><Text fontSize="xs" fontWeight="extrabold" textColor="">Share now</Text></Box>
                </Flex>
            </Flex>
            <Divider pt="0.4em" colorScheme="twitter"  />
            <VStack w="94%">
                <Spacer/>
                {postsData.map((post) => {
                    return(
                            <ContentCard postData={post} key={post.postId}/>
                    )
                })}
            </VStack>
        </VStack>
    )
}

export default CenterBar
