import { Card, Image, Stack, Heading, Center, Text, Divider, Button, ButtonGroup } from '@chakra-ui/react';
import React from 'react'
import { Link as RouterLink } from "react-router-dom";
import { addToCart } from './api';

const SingleFruit = ({ image, id, price_inr, title, description, category }) => {

    const handleAddToCart = () => {
        addToCart({ image, title, description, price_inr, category })
    }

    return (
        <Center boxShadow='md' p='6' rounded='md' bg='#f2fdff' >
            <Card w={"100%"} p={2}>
                <RouterLink to={`/fruit/${id}`}>
                    <Image
                        h={{ base: "300px", md: "250px" }}
                        w={"100%"}
                        src={image}
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                    />

                    <Divider />
                    <Heading color='black' size='md'>{title}</Heading>
                    <Text color='black' fontSize='xl' mb={"10px"}>
                        Price: ₹{price_inr}
                    </Text>
                </RouterLink>
                <ButtonGroup spacing='2' m='auto'>
                    <Button onClick={handleAddToCart} variant='solid' colorScheme='teal' size='sm' >
                        Add to cart
                    </Button>
                    <RouterLink to={`/vegetable/${id}`}>
                        <Button variant='solid' colorScheme='teal' size='sm' >
                            Know More
                        </Button>
                    </RouterLink>
                </ButtonGroup>

            </Card>
        </Center>
    )
}

export default SingleFruit;



{/* <GridItem>
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
                
                
 <Stack mt='6' spacing='3' h='60px'>
                        <Heading color='teal.300' size='md'>Living room Sofa</Heading>
                        <Text color='teal.300' fontSize='2xl' mb={"10px"}>
                            $450
                        </Text>
                    </Stack>               
                
                
                
                
                
                
                
                
                
                */}