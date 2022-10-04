import { Flex, VStack } from "@chakra-ui/react";
import MenuList from "./MenuList";
import UserItem from "./UserItem";
import TagItem from "./TagItem";
import StateItem from "./StateItem";
import { useBoard } from "../../pages/Board/context";
import Logotype from "../Logotype";

function BoardStat({ users, tags, states }){
    const { query, clearUser, clearTag, clearState } = useBoard();

    return (
        <VStack
            w='350px'
            h='full'
            spacing='0'
            alignItems='flex-start'
            position='relative'
        >
            <Flex
                position='absolute'
                h='120px'
                w='full'
                alignItems='center'
                mb='2'
                pl='5'
                top='0'
                left='0'
                zIndex='10'
                bgColor='whiteAlpha.900'
            >
                <Logotype />
            </Flex>
            <VStack
                px='5'
                pb='10'
                w='full'
                pt='120px'
                flex='1'
                overflow='auto'
                spacing='7'
            >
                <MenuList
                    name='Исполнители'
                    active={query.user.length}
                    clear={clearUser}
                >
                    {users.map((user, index) => <UserItem id={user.id} name={user.name} img={user.img} isMe={user.isMe} key={index} />)}
                </MenuList>

                <MenuList
                    name='Тэги'
                    active={query.tag.length}
                    clear={clearTag}
                >
                    {tags.map((tag, index) => <TagItem id={tag.id} name={tag.name} color={tag.color} key={index} />)}
                </MenuList>

                <MenuList
                    name='Состояния'
                    active={query.state.length}
                    clear={clearState}
                >
                    {states.map((state, index) => <StateItem id={state.id} name={state.name} key={index} />)}
                </MenuList>
            </VStack>
        </VStack>
    );
}

export default BoardStat;