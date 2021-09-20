import React from 'react'
import { Box, Skeleton,Spacer, useColorModeValue } from "@chakra-ui/react"

const LoadingPeople = () => {
    const skeletonStartCol = useColorModeValue("#f2f2f2", "#424242");
    const skeletonEndCol = useColorModeValue("#dbdbdb", "#292929");
    return (
        <Box px={6}>
            <Skeleton height="20px" my="10px" startColor={skeletonStartCol} endColor={skeletonEndCol} />
            <Skeleton height="20px" my="10px" startColor={skeletonStartCol} endColor={skeletonEndCol} />
            <Spacer pt={2} />
            <Skeleton height="20px" my="10px" startColor={skeletonStartCol} endColor={skeletonEndCol} />
            <Skeleton height="20px" my="10px" startColor={skeletonStartCol} endColor={skeletonEndCol} />
            <Spacer pt={2} />
            <Skeleton height="20px" my="10px" startColor={skeletonStartCol} endColor={skeletonEndCol} />
            <Skeleton height="20px" my="10px" startColor={skeletonStartCol} endColor={skeletonEndCol} />
            <Spacer pt={2} />
            <Skeleton height="20px" my="10px" startColor={skeletonStartCol} endColor={skeletonEndCol} />
            <Skeleton height="20px" my="10px" startColor={skeletonStartCol} endColor={skeletonEndCol} />
        </Box>
    )
}

export default LoadingPeople
