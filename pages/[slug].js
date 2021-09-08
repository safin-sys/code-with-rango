import { Container, Text, Heading, Image } from "@chakra-ui/react"
import ImageUrlBuilder from "@sanity/image-url";
import Head from 'next/head';
import client from "../helpers/sanity";
import RichText from '@sanity/block-content-to-react'

export const getStaticPaths = async () => {
    const slugs = await client.fetch(`*[_type == "post"].slug.current`)
    const paths = slugs.map(slug => {
        return {
            params: {
                slug
            }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const post = await client.fetch(`*[slug.current == '${context.params.slug}']`)
    return {
        props: {
            post
        }
    }
}

const builder = ImageUrlBuilder(client)
const urlFor = src => builder.image(src)

const serializer = {
    types: {
        image: props => (
            <Image my="1.5rem" src={urlFor(props.node.asset)} alt="Article Featured" />
        ),
        block: props => (
            <>
                {props.node.children.map((child, i) => {
                    return <Text fontSize="1.25rem" key={i} lineHeight="1.5rem" color="#35373a" display="inline-block" mt="1rem">{child.text}</Text>
                })}
            </>
        )
    }
}

export default function Post({ post }) {
    const { category, description, mainImage, title, body } = post[0]
    console.log(body);
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Container maxW="container.md" my="3rem">
                <Text textTransform="uppercase" color="#ff1a75" fontWeight="semibold" fontSize=".75rem" mt=".5rem">{category}</Text>
                <Heading fontSize="3rem">{title}</Heading>
                <Text mt="1rem" fontSize="1.25rem" opacity=".6">{description}</Text>
                <Image my="2rem" src={urlFor(mainImage)} alt={title} />
                <RichText blocks={body} serializers={serializer} />
            </Container>
        </>
    )
}
