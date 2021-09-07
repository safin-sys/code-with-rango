import { Container, Flex, Grid } from '@chakra-ui/layout'
import Head from 'next/head'
import Card from '../components/Card'

export default function Home() {
	return (
		<>
			<Head>
				<title>Code with Rango</title>
				<meta name="description" content="Learn about technology." />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Container maxW="container.lg" centerContent>
				<Grid gap="1rem" templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]} my="1.5rem">
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</Grid>
			</Container>
		</>
	)
}
