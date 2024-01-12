import { Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Name = () => {
    return (
        <RouterLink to='/'>
            <Text
                as="b"
                fontSize={{ base: "12 px", md: "14px", lg: "22px" }}
                style={{ textShadow: "#ff0000" }}
                color={"teal"}
            >
                Online Store
            </Text>
        </RouterLink>
    );
};

export default Name;
