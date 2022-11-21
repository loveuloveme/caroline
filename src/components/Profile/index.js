import { Box, Heading, SimpleGrid, Text, Flex, Container, Avatar, HStack, useBoolean, Divider } from "@chakra-ui/react";
import { useSelector } from "react-redux";

function Profile() {
    const { userInfo, userId } = useSelector((state) => state.user);

    return (
        <HStack
            cursor='pointer'
        >
            <Text onClick={() => localStorage.setItem('user-id', '')} fontSize='xl' fontWeight='bold'>{userInfo?.username}</Text>
        </HStack>
    );
}

export default Profile;