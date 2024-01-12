import { Card, Image, Stack, CardBody, Heading, Text, Divider } from "@chakra-ui/react"

export const Blogs = () => {
    return (
        <div>
            <Heading mt={5}>Upcoming Products</Heading>
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                m={50}
            >
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '400px' }}
                    maxH={{ base: '100%', sm: '600px' }}
                    src='https://img.freepik.com/free-photo/view-allergens-commonly-found-nuts_23-2150170316.jpg?size=626&ext=jpg&ga=GA1.1.1240297391.1672991747&semt=ais'
                    alt='Caffe Latte'
                />

                <Stack>
                    <CardBody>
                        <Heading size='lg'>Glonuts Regular Almonds (Badaam)</Heading>

                        <Text fontSize={{ base: '18', md: '24' }} py='2'>
                            The almond is the edible kernel of the fruit of the sweet almond tree. It is a bright white fruit wrapped in a reddish brown cover. It is consumed as dry fruit, fried and/or salted. Many well-known products such as nougat and marzipan are made of almonds.
                        </Text>
                    </CardBody>
                </Stack>
            </Card>
            <Divider />
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                m={50}
            >
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '400px' }}
                    maxH={{ base: '100%', sm: '600px' }}
                    src='https://img.freepik.com/free-photo/walnuts-bowl_1127-119.jpg?size=626&ext=jpg&ga=GA1.1.1240297391.1672991747&semt=ais'
                    alt='Caffe Latte'
                />

                <Stack>
                    <CardBody>
                        <Heading size='lg'>California Inshell Walnuts (Sabut)</Heading>

                        <Text fontSize={{ base: '18', md: '24' }} py='2'>
                            Inshell walnuts means walnuts, the kernels or edible portions of which are contained in the shell.
                            There is no genetic difference between an English walnut and a California walnut. The real difference in walnut taste, shape, color, and size is due to the difference in walnut cultivars.                        </Text>
                    </CardBody>
                </Stack>
            </Card>
            <Divider />
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                m={50}
            >
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '400px' }}
                    maxH={{ base: '100%', sm: '600px' }}
                    src='https://img.freepik.com/free-photo/raw-cashews-nuts-bowl-dark-background_1150-45357.jpg?size=626&ext=jpg&ga=GA1.1.1240297391.1672991747&semt=sph'
                    alt='Caffe Latte'
                />

                <Stack>
                    <CardBody>
                        <Heading size='lg'>Nutraj Special Cashews (Kaju)</Heading>

                        <Text fontSize={{ base: '18', md: '24' }} py='2'>
                            The cashew nut hangs from the end of the cashew apple, and is kidney-shaped and about 2.5 cm long. It consists of an edible kernel, surrounded by two shells. The outer shell is smooth and of a bright brown color.
                        </Text>
                    </CardBody>
                </Stack>
            </Card>
            <Divider />
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                m={50}
            >
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '400px' }}
                    maxH={{ base: '100%', sm: '600px' }}
                    src='https://img.freepik.com/free-photo/raisin-currant_1339-7227.jpg?size=626&ext=jpg&ga=GA1.1.1240297391.1672991747&semt=ais'
                    alt='Caffe Latte'
                />

                <Stack>
                    <CardBody>
                        <Heading size='lg'>One Farm Raisins - Long (Kishmish)</Heading>

                        <Text fontSize={{ base: '18', md: '24' }} py='2'>
                            Raisins kismis are dried grapes and which are known for its sweet taste and variety of usage. Kismis are rich in energy, minerals and vitamins as it is in concentrated form of grapes. This makes raisins more nutritious than the fresh grapes.
                        </Text>
                    </CardBody>
                </Stack>
            </Card>
        </div>
    )
}
