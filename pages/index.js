import { useColorMode } from '@chakra-ui/color-mode'
import { Container, Flex, Grid } from '@chakra-ui/layout'
import { TabList, Tabs, Tab } from '@chakra-ui/react'
import Head from 'next/head'
import { useEffect } from 'react'
import Card from '../components/Card'

export default function Home() {
	const { colorMode, toggleColorMode } = useColorMode()
	
	useEffect(() => {
		colorMode === "dark" && toggleColorMode() 
	}, [colorMode])

	const tabs = ["Marshall", "Frank", "Kanye", "Kendrick"]
	return (
		<>
			<Head>
				<title>Code with Rango</title>
				<meta name="description" content="Learn about technology." />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Container maxW="container.lg" centerContent mt="1rem">
			<Tabs>
				<TabList>
					{/* {tabs.map((tab, i) => {
						return <Tab key={i}>{tab}</Tab>
					})} */}
				</TabList>
			</Tabs>
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
