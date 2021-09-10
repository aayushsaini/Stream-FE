import { Avatar, Box, Flex, Heading, Image, Spacer, Text, VStack, useColorModeValue, Icon } from '@chakra-ui/react'
import { React, useState } from 'react'
import { AiOutlineHeart, AiFillHeart, BiCommentDetail } from "react-icons/all"

import "./contentCard.scss"

function ContentCard(props) {

    const cardBackground = useColorModeValue("gray.200","#252525");
    const textBackground = useColorModeValue("gray.900","#dbdbdb");
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
    const comments = post.comments.replies;

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
            // boxShadow="sm"
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
                <VStack align="flex-start" pt={2} pb="0" my="0">
                    <Text px={4} fontSize="sm" fontWeight="" textColor={textBackground}>{contentText}</Text>
                    <Image src={contentImg} pb={contentImg?2:0} px="" userSelect="none"/>
                    {/* <Flex px={4}></Flex> */}
                    <Flex px={4} align="center" userSelect="none" py={0}>
                        {liked ?
                            <Icon as={AiFillHeart}
                            w="1.35em" h="1.35em"
                            className="like-button" 
                            color="#FA0D44"
                            onClick={handleLikeCount}
                            />
                        :
                            <Icon as={AiOutlineHeart}
                            className="like-button" 
                            w="1.35em" h="1.35em"
                            color={textBackground}
                            onClick={handleLikeCount}
                            />
                        }
                        <Text className="like-text" ml={2} mr={4} fontWeight="bold" fontSize="xs" color={textBackground} onClick={handleLikeCount}>{likeCount>0?likeCount:""}</Text>
                        <Icon as={BiCommentDetail} 
                        className="comment-button" 
                        w="1.2em" h="1.2em"
                        color={textBackground} 
                        />
                        <Text className="comment-text" ml={2} fontSize="xs" color={textBackground}><b>{comments!==1? comments+" Comments" : comments+" Comment"}</b></Text>
                    </Flex>
                </VStack>
            </Box>
            <Spacer />
        </>
    )
}

export default ContentCard
