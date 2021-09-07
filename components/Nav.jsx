import { Container, Heading } from "@chakra-ui/layout"
import NextLink from "next/link"

export default function Nav() {
    return (
        <Container h="54px" display="flex" alignItems="center" bgColor="#ff1a75">
            <NextLink href="/">
                <a>
                    <Heading px="1.5rem" fontSize="1.25rem" color="white" m="0">
                        Code with Rango
                    </Heading>
                </a>
            </NextLink>
        </Container>
    )
}
