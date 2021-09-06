import { Heading, Flex, Textarea, Button, Text } from '@chakra-ui/react'
import React from 'react'

function CenterBar() {
    return (
        <Flex minW="40vw" flexDirection="column" px="1.2em" pt="1.2em">
            <Textarea minH="5.3em" 
             resize="none"
             placeholder="Write a post..." 
             border="none" 
             backgroundColor="#0D0D0D"
             fontSize="0.9em" 
             pt="1em" pb="1em"
            />
            <Flex flexDirection="row" justify="flex-end">
                <Button size="xs" px="2em" py="1.3em" bgGradient="linear(to-r, #8743FF, #4136F1)"><Text fontWeight="extrabold">Publish</Text></Button>
            </Flex>
        </Flex>
    )
}

export default CenterBar