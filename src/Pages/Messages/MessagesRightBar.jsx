import { Box, Flex, Text, Link } from '@chakra-ui/react'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import useFetch from '../../Hooks/useFetch'
// import ChatScreen from '../MessageBar/ChatScreen/ChatScreen';
import LoadingPeople from '../../Components/MessagesRightBar/Loading/LoadingPeople';
import PeopleMessages from '../../Components/MessagesRightBar/People/PeopleMessages';

function MessagesRightBar() {

    const { data, isLoading, isError } = useFetch(`https://json-server0.herokuapp.com/people`);

    const [value, setValue] = useState();

    const refresh = ()=>{
        setValue({});
    }

    return (
        <Flex minW="30vw" maxW="30vw" px={5} fontFamily="Poppins" height="max-content" position="sticky" top="5.5em">
            <Box w="80%">
            {isLoading && <LoadingPeople />}
            {isError && <Text>Something went wrong...<Link onClick={refresh}>Click here</Link> to retry</Text>}
            {!isError && !isLoading && data && data.map((person) => {
                    return (
                        <NavLink exact to={{
                                            pathname:`/messages/${person.userId}`,
                                            state: {
                                                userId: person.userId,
                                                userName: person.userName,
                                                userImg: person.userImg,
                                                online: person.online
                                            }
                                        }}  key={person.userId}>
                            <PeopleMessages data={person} key={person.userId}/>
                        </NavLink>
                    )
                })}
            </Box>
        </Flex>
    )
}

export default MessagesRightBar