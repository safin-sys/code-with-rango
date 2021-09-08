import { Container, Grid } from '@chakra-ui/layout'
import { TabList, Tabs, Tab } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import Card from '../components/Card'

export default function Cards({ posts }) {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        posts.forEach(post => {
            if(categories.includes(post.category)) return
            setCategories(oldCat => [...oldCat, post.category])
            console.log(categories);
        })
    }, [posts])
    return (
        <Container maxW="container.lg" centerContent my="1rem" overflow="hidden">
            <Container overflowX={["scroll", "hidden"]} centerContent>
                <Tabs colorScheme="pink">
                    <TabList>
                        {categories?.map((category, i) => {
                            return <Tab key={i} whiteSpace="nowrap">{category}</Tab>
                        })}
                    </TabList>
                </Tabs>
            </Container>
            <Grid gap="1rem" templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]} my="1.5rem">
                {posts.map((post, i) => {
                    return <Card key={i} post={post} />
                })}
            </Grid>
        </Container>
    )
}
