import React from 'react'
import Nav from './Nav'
import { useRouter } from 'next/router'
import { Heading, Grid, Text, Box } from '@chakra-ui/react'

export default function Hero() {
    const router = useRouter()
    return (
        <>
            {router.pathname === "/" ?
                <Grid placeContent="center" h={["30vh", "50vh"]} bgImage="url(/cover.jpg)" bgPos="center" bgRepeat="no-repeat" bgSize="100vw 50vh">
                    <Box color="white">
                        <Heading fontSize={{ base: "2rem", md: "3rem", lg: "3rem" }} m="0">Custom ROM BD</Heading>
                        <Text fontSize="1.5rem" m="0" opacity=".8">Custom Rom installation Guide</Text>
                    </Box>
                </Grid>
                : <Nav />
            }
        </>
    )
}