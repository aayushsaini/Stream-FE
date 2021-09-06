import { Flex, Textarea, Text, Box } from '@chakra-ui/react'
import React from 'react'
import "./centerBar.scss"

function CenterBar() {
    return (
        <Flex minW="40vw" flexDirection="column" px="1.2em" pt="1.2em">
            <Textarea minH="5.3em" 
             resize="none"
             placeholder="Write a post..." 
             border="none" 
             borderRadius="12px"
             backgroundColor="#0D0D0D"
             fontSize="0.9em" 
             pt="1em" pb="1em"
            />
            <Flex flexDirection="row" justify="flex-end" mt="0.8em">
                <Box className="btn-grad"><Text fontSize="xs" fontWeight="extrabold" textColor="">Publish</Text></Box>
            </Flex>
        </Flex>
    )
}

export default CenterBar
