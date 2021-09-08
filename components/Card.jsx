import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
import NextLink from "next/link"
import imageUrlBuilder from "@sanity/image-url"
import client from "../helpers/sanity";

const textStyle = {
    display: "-webkit-box",
    overflowY: "hidden",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical"
}

const builder = imageUrlBuilder(client)

const urlFor = src => builder.image(src)

export default function Card({ post }) {
    const { title, mainImage, description, category, slug } = post
    const source = urlFor(mainImage)
    return (
        <Flex pos="relative" flexDir="column" flex="1 1 301px" minH="220px" mb="1.5rem">
            <Box overflow="hidden">
                <NextLink href={`/${slug.current}`}>
                    <a>
                        <Image src={source ? source : "/placeholder.png"} width="100%" height="200px" _hover={{ transform: "scale(1.2)" }} transition="transform .2s" alt="Featured Article Cover" />
                    </a>
                </NextLink>
            </Box>
            <NextLink href={`/${slug.current}`}>
                <a>
                    <Box mt="1.25rem">
                        <Text textTransform="uppercase" color="#ff1a75" fontWeight="semibold" fontSize=".75rem" mt=".5rem">{category}</Text>
                        <Heading fontSize="1.5rem" mb=".5rem">{title}</Heading>
                        <Text style={textStyle} color="gray.600">{description}</Text>
                    </Box>
                </a>
            </NextLink>
        </Flex>
    )
}
