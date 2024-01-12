import {
    Box,
    Flex,
    Button,
    useColorModeValue,
    Stack,
    Show,
    HStack,
    useDisclosure,
    IconButton,
} from "@chakra-ui/react";
import {
    HamburgerIcon,
    CloseIcon,
} from "@chakra-ui/icons";
import Name from "./Name";
import "./Navbar.css";
import { FaCartPlus } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <div id="navFix">
            <Box
                boxShadow="md"
                bg={useColorModeValue("gray.100", "gray.900")}
                px={9}
                width={["100%"]}
            >
                <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
                    <HStack w="10%">
                        <Name />
                        <Show breakpoint="(min-width: 1000px)">
                            {" "}
                        </Show>
                    </HStack>

                    <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
                        <HStack spacing={8} alignItems={"center"}>
                            <HStack
                                as={"nav"}
                                spacing={4}
                                display={{ base: "none", md: "flex" }}
                                id="myDIV"
                            >
                                <Button className="btnRes">
                                    <RouterLink to="/">
                                        {" "}
                                        <b>Home</b>
                                    </RouterLink>
                                </Button>

                                <Button className="btnRes">
                                    <RouterLink to="/vegetable">
                                        <b>Vegetables</b>
                                    </RouterLink>
                                </Button>

                                <Button className="btnRes">
                                    <RouterLink to="/fruit">
                                        {" "}
                                        <b>Fruits</b>
                                    </RouterLink>
                                </Button>

                                <Button className="btnRes">
                                    <RouterLink to="/dairy">
                                        <b>Dairy</b>
                                    </RouterLink>
                                </Button>

                                <Button className="btnRes">
                                    <RouterLink to="/bakery">
                                        <b>Bakery</b>
                                    </RouterLink>
                                </Button>

                                <Button className="btnRes">
                                    <RouterLink to="/blogs">
                                        <b>Blogs</b>
                                    </RouterLink>
                                </Button>
                            </HStack>
                        </HStack>
                    </Flex>

                    <Flex alignItems={"center"}>
                        <Stack direction={"row"} spacing={7}>
                            <Button
                                m="10px"
                                backgroundColor="teal"
                                _hover={{ bg: "teal.500", color: "white" }}
                                color="white"
                                variant="solid"
                                display={{ base: "none", md: "flex" }}
                                size={["sm", "sm"]}
                            >
                                <RouterLink to="/cart">
                                    <FaCartPlus color="white" />
                                </RouterLink>
                            </Button>
                        </Stack>
                        <Stack direction={"row"} spacing={7}>
                            <RouterLink to="/login">
                                <Button
                                    backgroundColor="teal"
                                    _hover={{ bg: "teal.500", color: "white" }}
                                    color="white"
                                    variant="solid"
                                    display={{ base: "none", md: "flex" }}
                                    size={["sm", "sm"]}
                                >Login
                                </Button>
                            </RouterLink>
                        </Stack>
                    </Flex>
                    <IconButton
                        size={"md"}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={"Open Menu"}
                        display={{ md: "none" }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    {isOpen ? (
                        <Box pb={4} display={{ md: "none" }}>
                            <Stack as={"nav"} spacing={4}>
                                <Button onClick={isOpen ? onClose : onOpen}
                                    _hover={{
                                        textShadow: "#FC0 1px 0 10px",
                                        transform: "scale(1.2)",
                                    }}>
                                    <RouterLink to="/">
                                        {" "}
                                        <b>Home</b>
                                    </RouterLink>
                                </Button>
                                <Button onClick={isOpen ? onClose : onOpen}
                                    _hover={{
                                        textShadow: "#FC0 1px 0 10px",
                                        transform: "scale(1.2)",
                                    }}>
                                    <RouterLink to="/vegetable">
                                        {" "}
                                        <b>Vegetables</b>
                                    </RouterLink>
                                </Button>

                                <Button onClick={isOpen ? onClose : onOpen}
                                    _hover={{
                                        textShadow: "#FC0 1px 0 10px",
                                        transform: "scale(1.2)",
                                    }}>
                                    <RouterLink to="/fruit">
                                        {" "}
                                        <b>Fruits</b>
                                    </RouterLink>
                                </Button>
                                <Button onClick={isOpen ? onClose : onOpen}
                                    _hover={{
                                        textShadow: "#FC0 1px 0 10px",
                                        transform: "scale(1.2)",
                                    }}>
                                    <RouterLink to="/dairy">
                                        {" "}
                                        <b>Dairy</b>
                                    </RouterLink>
                                </Button>
                                <Button
                                    onClick={isOpen ? onClose : onOpen}
                                    _hover={{
                                        textShadow: "#FC0 1px 0 10px",
                                        transform: "scale(1.2)",
                                    }}
                                >
                                    <RouterLink to="/">
                                        {" "}
                                        <b>Home</b>
                                    </RouterLink>
                                </Button>

                                <Button
                                    onClick={isOpen ? onClose : onOpen}
                                    _hover={{
                                        textShadow: "#FC0 1px 0 10px",
                                        transform: "scale(1.2)",
                                    }}
                                >
                                    <RouterLink to="/vegetable">
                                        <b>Vegetables</b>
                                    </RouterLink>
                                </Button>

                                <Button
                                    onClick={isOpen ? onClose : onOpen}
                                    _hover={{
                                        textShadow: "#FC0 1px 0 10px",
                                        transform: "scale(1.2)",
                                    }}
                                >
                                    <RouterLink to="/fruit">
                                        {" "}
                                        <b>Fruit</b>
                                    </RouterLink>
                                </Button>

                                <Button
                                    onClick={isOpen ? onClose : onOpen}
                                    _hover={{
                                        textShadow: "#FC0 1px 0 10px",
                                        transform: "scale(1.2)",
                                    }}
                                >
                                    <RouterLink to="/dairy">
                                        <b>Dairy</b>
                                    </RouterLink>
                                </Button>

                                <Button
                                    onClick={isOpen ? onClose : onOpen}
                                    _hover={{
                                        textShadow: "#FC0 1px 0 10px",
                                        transform: "scale(1.2)",
                                    }}
                                >
                                    <RouterLink to="/bakery">
                                        <b>Bakery</b>
                                    </RouterLink>
                                </Button>

                                <Button
                                    onClick={isOpen ? onClose : onOpen}
                                    _hover={{
                                        textShadow: "#FC0 1px 0 10px",
                                        transform: "scale(1.2)",
                                    }}
                                >
                                    <RouterLink to="/blogs">
                                        <b>Blogs</b>
                                    </RouterLink>
                                </Button>
                            </Stack>
                        </Box>
                    ) : null}
                </Flex>
            </Box>
        </div>
    );
}
