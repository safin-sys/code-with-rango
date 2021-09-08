import { useColorMode } from '@chakra-ui/color-mode'
import Head from 'next/head'
import { useEffect } from 'react'
import Cards from '../components/Cards'
import client from './../helpers/sanity';

export const getStaticProps = async () => {
	const posts = await client.fetch("*[_type == 'post']")
	return {
		props: {
			posts
		}
	}
}

export default function Home({ categories, posts }) {
	const { colorMode, toggleColorMode } = useColorMode()
	useEffect(() => {
		colorMode === "dark" && toggleColorMode()
	}, [colorMode])
	return (
		<>
			<Head>
				<title>Code with Rango</title>
				<meta name="description" content="Learn about technology." />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Cards posts={posts} />
		</>
	)
}
