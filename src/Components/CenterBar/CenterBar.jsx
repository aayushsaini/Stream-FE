import { Spacer } from '@chakra-ui/react'
import { Flex, Textarea, Text, Box, VStack, Divider } from '@chakra-ui/react'
import React from 'react'
import "./centerBar.scss"
import ContentCard from './ContentCard/ContentCard'

function CenterBar() {
    return (
        <VStack>
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
            <Divider pt="0.4em" />
            <VStack w="94%">
                <Spacer/>
                <ContentCard 
                 name="Ben Bohmer" 
                 id="bennn_bohmerr" 
                 text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo " 
                />
                <Spacer/>
                <ContentCard 
                 name="Naomi Silvoska" 
                 id="silvoskaa_22" 
                 pfp="https://images.pexels.com/photos/4039183/pexels-photo-4039183.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                 text="From new shoot!" 
                 img="https://images.pexels.com/photos/5012111/pexels-photo-5012111.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                <Spacer/>
                <ContentCard 
                 name="Javed Naomi" 
                 id="__javed_naomi__"
                 text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore"
                 img="https://images.pexels.com/photos/9297975/pexels-photo-9297975.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                />
                <Spacer/>
                <ContentCard 
                 name="Jill Burrow" 
                 id="_jill123"
                 img="https://images.pexels.com/photos/5987225/pexels-photo-5987225.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                />
                <Spacer/>
                <ContentCard 
                 name="Eva Ross" 
                 id="evaa_ross"
                 pfp="https://images.pexels.com/photos/7955853/pexels-photo-7955853.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                 text="My new pfp 🥴"
                 img="https://images.pexels.com/photos/7955853/pexels-photo-7955853.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                />
            </VStack>
        </VStack>
    )
}

export default CenterBar
