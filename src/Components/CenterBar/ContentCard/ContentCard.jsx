import { Avatar, Box, Flex, Heading, Image, Spacer, Text, VStack, useColorModeValue } from '@chakra-ui/react'
import { React, useEffect, useState } from 'react'
import { AiOutlineHeart, AiFillHeart, BiCommentDetail } from "react-icons/all"

import "./contentCard.scss"

function ContentCard(props) {

    const cardBackground = useColorModeValue("gray.200","#252525");
    const textBackground = useColorModeValue("gray.900","gray.300");
    // rgb(240, 240, 240)

    const post = props.postData;

    const userName = post.userName;
    const userId = "@"+post.userId;
    const userImg = post.userImg;
    const contentText = post.postText;
    let contentImg = false;
    if (post.postImg) {
        contentImg = post.postImg;
    }
    const likes = post.likes;
    const comments = post.comments;

    const [likeCount, setLikeCount] = useState(parseInt(likes));
    const [liked, setLiked] = useState(false);

    const handleLikeCount = () => {
        if (liked === false) {
            setLikeCount(likeCount+1);
            setLiked(true);
        } else {
            setLikeCount(likeCount-1);
            setLiked(false);
        }
    }

    useEffect(() => {
        console.log("Use Effect_____")
    },[])

    return (
        <>
            <Box 
            //  backgroundColor="#1f1f1f"
            // backgroundColor="#252525"
            backgroundColor={cardBackground}
            minWidth="100%" 
            maxWidth="100%" 
            py={4}
            className="content-card"
            borderRadius="14px"
            >
                <Flex px={4} userSelect="none">
                    <Avatar name={userName} boxSize="2em" src={userImg} />
                    <VStack position="relative" ml="1vw" align="flex-start">
                        <Heading as="h5" size="sm" fontWeight="bold" w="max-content" position="absolute" pt="0.1em">{userName}</Heading>
                        <Text fontSize="sm" fontWeight="light" textColor="#868686" position="absolute" pt="0.7em">{userId}</Text>
                    </VStack>
                    <Spacer />
                    <Text textColor="#868686" fontSize="xs" fontWeight="light">13 mins ago</Text>
                </Flex>
                <VStack align="flex-start" pt={2}>
                    <Text px={4} fontSize="sm" fontWeight="" textColor={textBackground}>{contentText}</Text>
                    <Image src={contentImg} pb={contentImg?2:0} px={4} userSelect="none"/>
                    {/* <Flex px={4}></Flex> */}
                    <Flex px={4} align="center" userSelect="none">
                        {liked ?
                            <AiFillHeart
                            size="1.2em" 
                            className="like-button" 
                            color="#FA0D44"
                            onClick={handleLikeCount}
                            />
                        :
                            <AiOutlineHeart
                            className="like-button" 
                            size="1.2em" 
                            color={textBackground}
                            onClick={handleLikeCount}
                            />
                        }
                        <Text className="like-text" ml={2} mr={4} fontSize="xs" color={textBackground} onClick={handleLikeCount}>{likeCount>0?likeCount:""}</Text>
                        <BiCommentDetail 
                        className="comment-button" 
                        size="1.2em" 
                        color={textBackground} 
                        my="2em"
                        />
                        <Text className="comment-text" ml={2} fontSize="xs" color={textBackground}>{comments} Comments</Text>
                    </Flex>
                </VStack>
            </Box>
            <Spacer />
        </>
    )
}

export default ContentCard
