import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'
// import useFetch from '../../Hooks/useFetch'

function RightBar() {

    // const { data, isLoading, isError } = useFetch(`http://localhost:8000/people`);

    return (
        <Flex minW="30vw" maxW="30vw" maxH="255px" pt={2.5} px={5}>
            <Heading>Right - Bar</Heading>
        </Flex>
    )
}

export default RightBar
