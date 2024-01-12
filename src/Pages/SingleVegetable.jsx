import { Card, Image, Heading, Center, Text, Divider, Button, ButtonGroup } from '@chakra-ui/react';
import React from 'react'
import { Link as RouterLink } from "react-router-dom";
import { addToCart } from './api';

const SingleVegetable = ({ image, id, price_inr, title, description, category }) => {

    const handleAddToCart = () => {
        addToCart({ image, title, description, price_inr, category })
    };


    return (
        <Center boxShadow='md' p='6' rounded='md' bg='#f2fdff' >
            <Card w={"100%"} p={2}>
                <RouterLink to={`/vegetable/${id}`}>
                    <Image
                        h={{ base: "250px", md: "250px" }}
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

export default SingleVegetable;
