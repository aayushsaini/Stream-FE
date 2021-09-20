import { Box, SkeletonCircle, SkeletonText, Spacer, useColorModeValue, VStack } from '@chakra-ui/react'
import React from 'react'


const LoadingContentCard = () => {

    const cardBackground = useColorModeValue("gray.200","#252525");
    const skeletonStartCol = useColorModeValue("#fff", "#707070");
    const skeletonEndCol = useColorModeValue("#f5f5f5", "#545454");

    return (
        <VStack w="94%">
                <Spacer />
                <Box w="100%" padding="4" borderRadius="14px" boxShadow="sm" bg={cardBackground}>
                    <SkeletonCircle size="2.2em" startColor={skeletonStartCol} endColor={skeletonEndCol} />
                    <SkeletonText mt="4" noOfLines={4} spacing="4" startColor={skeletonStartCol} endColor={skeletonEndCol} />
                </Box>
                <Spacer />
                <Box w="100%" padding="4" borderRadius="14px" boxShadow="sm" bg={cardBackground}>
                    <SkeletonCircle size="2.2em" startColor={skeletonStartCol} endColor={skeletonEndCol} />
                    <SkeletonText mt="4" noOfLines={4} spacing="4" startColor={skeletonStartCol} endColor={skeletonEndCol} />
                </Box>
                <Spacer />
                <Box w="100%" padding="4" borderRadius="14px" boxShadow="sm" bg={cardBackground}>
                    <SkeletonCircle size="2.2em" startColor={skeletonStartCol} endColor={skeletonEndCol} />
                    <SkeletonText mt="4" noOfLines={4} spacing="4" startColor={skeletonStartCol} endColor={skeletonEndCol} />
                </Box>
        </VStack>
    )
}

export default LoadingContentCard
