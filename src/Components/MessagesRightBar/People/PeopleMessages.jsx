import { Avatar, Box, Flex, Spacer, Text, useColorModeValue, VStack } from '@chakra-ui/react'
import React from 'react'
import { Icon } from "@chakra-ui/react"
import "./peopleMessages.scss"

const PeopleMessages = (props) => {
    const user = props.data;

    const textBackground = useColorModeValue("gray.700","gray.100");

    return (
        <Box py={2} mb={2.5} className="userCard">
            <Flex px={4} userSelect="none" w="100%">
                <Avatar name={user.userName} boxSize="2em" src={user.userImg} />
                <VStack position="relative" ml="1vw" align="flex-start">
                    <Text as="h5" size="sm" fontWeight="bold" fontSize="0.85em" w="max-content" position="absolute" pt="0em" textColor={textBackground}>{user.userName}</Text>
                    <Text fontSize="0.75em" fontWeight="light" textColor="#868686" position="absolute" pt="0.7em">@{user.userId}</Text>
                </VStack>
                <Spacer />
                {user.online==="true"?<Icon viewBox="0 0 200 200" color="green.400" mt={3}>
                    <path
                        fill="currentColor"
                        d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                    />
                </Icon>:null}
            </Flex>
        </Box>
    )
}

export default PeopleMessages
