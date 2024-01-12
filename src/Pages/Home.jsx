import { Card, CardBody, Heading, Image, Stack, Grid, GridItem, Flex } from '@chakra-ui/react'
import React from 'react'
import { Link as RouterLink } from "react-router-dom";

export const Home = () => {
    return (
        <>
            <Flex>
                <Image m={0} p={0} w={"100%"} h={{ base: "150px", md: "400px" }} src='https://img.freepik.com/free-vector/flat-supermarket-social-media-cover-template_23-2149357204.jpg?w=1380&t=st=1701507253~exp=1701507853~hmac=98fb985a97b6f65341464ff4045ecaf28ae183fdc2454c44c414e7acd32d7b72' alt='carousel-img' />
            </Flex>
            <Heading color={"teal"} textAlign={"center"} m={10} as='h2' size={{ base: 'xl', md: '2xl' }}>SALE IS LIVE</Heading>
            <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }} gap={6} w={"80%"} m={"auto"} >
                <RouterLink to="/vegetable">
                    <GridItem>
                        <Card maxW='sm'>
                            <CardBody boxShadow='2xl' p='6' rounded='md' bg='white'>
                                <Image
                                    h={{ base: 140, md: 250 }}
                                    w={350}
                                    src='https://img.freepik.com/free-vector/multiple-fruits-vegetables-wallpaper_23-2148481554.jpg?size=626&ext=jpg&ga=GA1.1.1240297391.1672991747&semt=ais'
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading color={"teal.600"} boxShadow='2xl' p='6' rounded='md' bg='white' size='md'>Vegetables</Heading>
                                </Stack>
                            </CardBody>
                        </Card>
                    </GridItem>
                </RouterLink>
                <RouterLink to="/vegetable">
                    <GridItem>
                        <Card maxW='sm'>
                            <CardBody boxShadow='2xl' p='6' rounded='md' bg='white'>
                                <Image
                                    h={{ base: 180, md: 250 }}
                                    w={350}
                                    src='https://img.freepik.com/free-photo/assortment-vegetables-green-herbs-market-vegetables-basket_2829-14063.jpg?size=626&ext=jpg&ga=GA1.1.1240297391.1672991747&semt=ais'
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading color={"teal.600"} boxShadow='2xl' p='6' rounded='md' bg='white' size='md'>Vegetables</Heading>
                                </Stack>
                            </CardBody>
                        </Card>
                    </GridItem>
                </RouterLink>
                <RouterLink to="/fruit">
                    <GridItem>
                        <Card maxW='sm'>
                            <CardBody boxShadow='2xl' p='6' rounded='md' bg='white'>
                                <Image
                                    h={{ base: 180, md: 250 }}
                                    w={350}
                                    src='https://i.pinimg.com/564x/7a/aa/a5/7aaaa545e00e8a434850e80b8910dd94.jpg'
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading color={"teal.600"} boxShadow='2xl' p='6' rounded='md' bg='white' size='md'>Fruits</Heading>
                                </Stack>
                            </CardBody>
                        </Card>
                    </GridItem>
                </RouterLink>
                <RouterLink to="/vegetable">
                    <GridItem>
                        <Card maxW='sm'>
                            <CardBody boxShadow='2xl' p='6' rounded='md' bg='white'>
                                <Image
                                    h={{ base: 180, md: 250 }}
                                    w={350}
                                    src='https://img.freepik.com/premium-photo/organic-food-background-vegetables-basket_135427-232.jpg?size=626&ext=jpg&ga=GA1.1.1240297391.1672991747&semt=ais'
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading color={"teal.600"} boxShadow='2xl' p='6' rounded='md' bg='white' size='md'>Vegetables</Heading>
                                </Stack>
                            </CardBody>
                        </Card>
                    </GridItem>
                </RouterLink>
                <RouterLink to="/vegetable">
                    <GridItem>
                        <Card maxW='sm'>
                            <CardBody boxShadow='2xl' p='6' rounded='md' bg='white'>
                                <Image
                                    h={{ base: 180, md: 250 }}
                                    w={350}
                                    src='https://img.freepik.com/free-vector/multiple-fruits-vegetables-wallpaper_23-2148481554.jpg?size=626&ext=jpg&ga=GA1.1.1240297391.1672991747&semt=ais'
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading color={"teal.600"} boxShadow='2xl' p='6' rounded='md' size='md'>Vegetables</Heading>
                                </Stack>
                            </CardBody>
                        </Card>
                    </GridItem>
                </RouterLink>
                <RouterLink to="/vegetable">
                    <GridItem>
                        <Card maxW='sm'>
                            <CardBody boxShadow='2xl' p='6' rounded='md' bg='white'>
                                <Image
                                    h={{ base: 180, md: 250 }}
                                    w={350}
                                    src='https://img.freepik.com/free-photo/healthy-vegetables-wooden-table_1150-38014.jpg?size=626&ext=jpg&ga=GA1.1.1240297391.1672991747&semt=ais'
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading color={"teal.600"} boxShadow='2xl' p='6' rounded='md' size='md'>Vegetables</Heading>
                                </Stack>
                            </CardBody>
                        </Card>
                    </GridItem>
                </RouterLink>
                <RouterLink to="/fruit">
                    <GridItem>
                        <Card maxW='sm'>
                            <CardBody boxShadow='2xl' p='6' rounded='md' bg='white'>
                                <Image
                                    h={{ base: 180, md: 250 }}
                                    w={350}
                                    src='https://i.pinimg.com/564x/7a/8a/d9/7a8ad94f4d878ea16c795ee6142667d5.jpg'
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading color={"teal.600"} boxShadow='2xl' p='6' rounded='md' size='md'>Pears</Heading>
                                </Stack>
                            </CardBody>
                        </Card>
                    </GridItem>
                </RouterLink>
                <RouterLink to="/fruit">
                    <GridItem>
                        <Card maxW='sm'>
                            <CardBody boxShadow='2xl' p='6' rounded='md' bg='white'>
                                <Image
                                    h={{ base: 180, md: 250 }}
                                    w={350}
                                    src='https://img.freepik.com/free-photo/fresh-grape-wooden-table-nature-autumn-wine-celebration-generated-by-artificial-intelligence_25030-64703.jpg?size=626&ext=jpg&ga=GA1.1.1240297391.1672991747&semt=sph'
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading color={"teal.600"} boxShadow='2xl' p='6' rounded='md' size='md'>Grapes</Heading>
                                </Stack>
                            </CardBody>
                        </Card>
                    </GridItem>
                </RouterLink>
                <RouterLink to="fruit">
                    <GridItem>
                        <Card maxW='sm'>
                            <CardBody boxShadow='2xl' p='6' rounded='md' bg='white'>
                                <Image

                                    h={{ base: 180, md: 250 }}
                                    w={350}
                                    src='https://i.pinimg.com/564x/5f/23/52/5f2352717a7be25e2e0ec4d309edacaa.jpg'
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading color={"teal.600"} boxShadow='2xl' p='6' rounded='md' size='md'>Banana</Heading>
                                </Stack>
                            </CardBody>
                        </Card>
                    </GridItem>
                </RouterLink>
            </Grid>
            <Stack h={{ base: "200px", md: "400px" }} mt={10} boxShadow='4xl' p='6' rounded='md' bg='white'>
                <Image w={"100%"} h={{ base: "150px", md: "500px" }} src='https://img.crofarm.com/otipyecom/home/banner.png' alt='carl-img' />
            </Stack>
        </>
    )
}
