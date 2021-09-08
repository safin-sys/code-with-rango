import { Box, Container, Flex, Heading } from "@chakra-ui/layout"
import NextLink from "next/link"

export default function Nav() {
    return (
        <Flex bgColor="#ff1a75" h="54px" alignItems="center">
            <Container maxW="container.lg">
                <NextLink href="/">
                    <a>
                        <Heading px="1.5rem" fontSize="1.25rem" color="white" m="0" p="0">
                            Code with Rango
                        </Heading>
                    </a>
                </NextLink>
            </Container>
        </Flex>
    )
}
