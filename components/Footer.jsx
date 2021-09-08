import { Box, Container, Flex, Heading, Link, Text } from "@chakra-ui/layout";

export default function Footer() {
    return (
        <Box bgColor="#111" color="white">
            <Container maxW="container.lg">
                <Flex mx="auto" h={["80px", "64px"]} justifyContent={["center", "space-between"]} alignItems={["baseline", "center"]} flexDir={["column", "row"]}>
                    <Flex alignItems="center">
                        <Heading fontSize="1rem" mr=".25rem">Code with Rango</Heading>
                        <Text fontSize=".8rem">© {new Date().getFullYear()}</Text>
                    </Flex>
                    <Flex alignItems="center">
                        <Text fontSize=".8rem" mr=".25rem">Created by</Text>
                        <Link href="https://github.com/safin-sys" target="_blank" fontSize=".8rem">Safin Ahmed</Link>
                    </Flex>
                </Flex>
            </Container>
        </Box>
    )
}
