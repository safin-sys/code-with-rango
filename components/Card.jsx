import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
import NextLink from "next/link"

const textStyle = {
    display: "-webkit-box",
    overflowY: "hidden",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical"
}

export default function Card() {
    const source = null
    const slug = null
    return (
        <Flex pos="relative" flexDir="column" flex="1 1 301px" minH="220px" mb="1.5rem">
            <Box overflow="hidden">
                <NextLink href={`/post/${slug}`}>
                    <a>
                        <Image src={source ? source : "/placeholder.png"} width="100%" height="200px" _hover={{transform: "scale(1.2)"}} transition="transform .2s" alt="Featured Article Cover" />
                    </a>
                </NextLink>
            </Box>
            <NextLink href={`/post/${slug}`}>
                <a>
                    <Box mt="1.25rem">
                        <Heading fontSize="1.5rem" mb=".5rem">Start here for a quick overview of everything you need to know</Heading>
                        <Text style={textStyle}>Weve crammed the most important information to help you get started with Ghost into this one post. Its your cheat-sheet to get started, and your shortcut to advanced features.</Text>
                    </Box>
                </a>
            </NextLink>
        </Flex>
    )
}
