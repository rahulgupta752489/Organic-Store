import { Card, CardBody, Image, Stack, Heading, Text, Button, Divider, CardFooter, ButtonGroup } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

export const Cart = () => {
    const [data, setData] = useState([]);

    const getSingleData = () => {
        axios.get(`https://online-store-quc3.onrender.com/cartdata/`).then((res) => {
            setData(res.data);
        })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        getSingleData();
    }, []);

    const deleteFromCart = (id) => {
        axios.delete(`https://online-store-quc3.onrender.com/cartdata/${id}`).then((res) => {
            console.log(res);
            setData(data.filter((item) => item.id !== id));
        })
            .catch((err) => {
                console.log(err);
            });
    };

    const totalPrice = data.reduce((acc, item) => {
        return acc + item.price_inr;
    }, 0);


    return (
        <div style={{ margin: "auto" }}>
            <Heading style={{ textAlign: "center" }}>Cart Items</Heading>
            <Card maxW='sm' ml={{ base: "0px", md: "150px" }}>
                <CardBody>
                    <Stack mt='6' spacing='3'>
                        <Heading textAlign='center' size='lg'>Total Price</Heading>
                        <Text textAlign='center' color='orange' fontSize='2xl' fontWeight='bold'>
                            ₹{totalPrice}
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2' m={'auto'}>
                        <Button variant='solid' colorScheme='blue'>
                            PROCEED TO CHECKOUT
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
            {
                data.map((item) => {
                    return <Card
                        direction={{ base: 'column', sm: 'row' }}
                        overflow='hidden'
                        variant='outline'
                        m={{ base: "0", md: '30px 150px 50px 150px' }}
                        maxW={{ base: '100%', sm: '50%' }}
                        key={item.id}
                    >
                        <Image
                            objectFit='cover'
                            maxW={{ base: '100%', sm: '200px' }}
                            src={item.image}
                            alt='Caffe Latte'
                        />

                        <Stack>
                            <CardBody>
                                <Heading size='md'>{item.title}</Heading>
                                <Heading py='2' size='sm'>Price: ₹{item.price_inr}</Heading>
                                <Text py='2' size='sm'>
                                    {item.description}
                                </Text>
                                <Button onClick={() => deleteFromCart(item.id)} w='65px' colorScheme='blue' size='sm'>Delete</Button>
                            </CardBody>
                        </Stack>
                    </Card>
                })
            }
        </div>
    )
}
