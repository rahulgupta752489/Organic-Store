import {
    Box,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
} from '@chakra-ui/react';
import { MdLocalShipping } from 'react-icons/md';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link as RouterLink } from 'react-router-dom';
import { addToCart } from './api';

export const DairyDetails = () => {
    const { id } = useParams();
    const [dairy, setDairy] = useState([]);

    console.log(id);

    useEffect(() => {
        axios.get(`https://online-store-quc3.onrender.com/dairy/${id}`).then((res) => {
            setDairy(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }, [])


    const { category, image, description, price_inr, title, discount_percentage, discount_price_inr, ETA } = dairy;

    const handleAddToCart = () => {
        addToCart({ image, title, description, price_inr, category })
    };

    return (
        <Container maxW={'5xl'} boxShadow='xl' p='2' rounded='md' bg='white'>
            <SimpleGrid
                columns={{ base: 1, lg: 2 }}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 1, md: 4 }}
                mt={"55px"}>
                <Flex>
                    <Image
                        rounded={'md'}
                        alt={'product image'}
                        src={
                            image
                        }
                        fit={'cover'}
                        align={'center'}
                        w={'100%'}
                        h={{ base: '100%', sm: '400px', lg: '500px' }}
                    />
                </Flex>
                <Stack spacing={{ base: 6, md: 10 }}>
                    <Box as={'header'}>
                        <Heading
                            lineHeight={1.1}
                            fontWeight={600}
                            fontSize={{ base: 'xl', sm: 'xl', lg: '4xl' }}>
                            {title}
                        </Heading>
                        <Text
                            fontWeight={400}
                            fontSize={'2xl'}>
                            Price: ₹ {price_inr}
                        </Text>
                        <Text textDecoration={'line-through'} color={'gray.600'}>
                            ₹{discount_price_inr * Math.floor(Math.random() * 10)}
                        </Text>
                    </Box>

                    <Stack
                        spacing={{ base: 4, sm: 6 }}
                        direction={'column'}
                        divider={
                            <StackDivider
                                borderColor={useColorModeValue('gray.200', 'gray.600')}
                            />
                        }>
                        <VStack spacing={{ base: 4, sm: 6 }}>
                            <Text
                                color={useColorModeValue('gray.500', 'gray.400')}
                                fontSize={'xl'}
                                fontWeight={'500'}>
                                Description: {description}
                            </Text>
                            <Text fontSize={'lg'}>
                                Category: {category}
                            </Text>
                        </VStack>

                    </Stack>
                    <Flex m={'auto'}>
                        <Button
                            onClick={handleAddToCart}
                            mt={2}
                            m={2}
                            size={'md'}
                            py={'7'}
                            color={"black"}
                            backgroundColor={"teal"}
                            textTransform={'uppercase'}>
                            Add to Cart
                        </Button>
                        <Button
                            mt={2}
                            m={2}
                            size={'md'}
                            py={'7'}
                            color={"black"}
                            backgroundColor={"teal"}
                            textTransform={'uppercase'}
                        >
                            Buy Now
                        </Button>
                    </Flex>
                    <Stack direction="row" alignItems="center" justifyContent={'center'}>
                        <MdLocalShipping />
                        <Text>{ETA}</Text>
                    </Stack>
                </Stack>
            </SimpleGrid>
        </Container>
    )
}
