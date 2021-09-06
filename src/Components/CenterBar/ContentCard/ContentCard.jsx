import { Avatar, Box, Flex, Heading, Image, Spacer, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineHeart, AiFillHeart } from "react-icons/all"

// import "./contentCard.scss"

function ContentCard(props) {

    const userName = props.name;
    const userId = "@"+props.id;
    const userImg = props.pfp;
    const contentText = props.text;
    let contentImg = null;
    console.log(typeof(props.img));
    // if (props.img.length === 0 ) {
    //     contentImg = false;
    // } else {
        contentImg = props.img;
    // }

    return (
        <Box 
        //  backgroundColor="#1f1f1f"
         backgroundColor="#252525"
         minWidth="100%" 
         maxWidth="100%" 
         py={4}
         className="content-card"
         borderRadius="14px"
        >
            <Flex px={4}>
                <Avatar name={userName} boxSize="2em" src={userImg} />
                <VStack position="relative" ml="1vw" align="flex-start">
                    <Heading as="h5" size="sm" fontWeight="bold" w="max-content" position="absolute" pt="0.1em">{userName}</Heading>
                    <Text fontSize="sm" fontWeight="light" textColor="#868686" position="absolute" pt="0.7em">{userId}</Text>
                </VStack>
                <Spacer />
                <Text textColor="#868686" fontSize="xs" fontWeight="light">13 mins ago</Text>
            </Flex>
            <VStack align="flex-start" pt={2}>
                <Text px={4} fontSize="sm" fontWeight="light" textColor="rgb(240, 240, 240)">{contentText}</Text>
                <Image src={contentImg} />
                <Flex px={4}><AiFillHeart color="#FA0D44" /></Flex>
            </VStack>
        </Box>
    )
}

export default ContentCard
