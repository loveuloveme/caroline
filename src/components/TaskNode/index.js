import { Flex, Heading, HStack, Image, Text } from '@chakra-ui/react';
import { useMemo } from 'react';
import { Position } from 'react-flow-renderer';
import { useBoard } from "../../pages/Board/context";
import ChakraBox from '../ChakraBox';

import TaskNodeHandle from './TaskNodeHandle';
import TaskNodeTag from './TaskNodeTag';
import TaskNodeUser from './TaskNodeUser';

function TaskNode({ data }) {
    const {
        id, title, users, tags, description,
        state, sourceCount, targetCount, image
    } = data;

    const { query } = useBoard();

    const selected = useMemo(() => {
        return (query.user.length || query.tag.length || query.state.length)
            && query.user.every(elem => users.map(item => item.id).includes(elem))
            && query.tag.every(elem => tags.map(item => item.id).includes(elem))
            && (!query.state.length || query.state.some(elem => state.id == elem));
    }, [query]);

    return (
        <ChakraBox
            animate={{
                opacity: [0, 1],
            }}

            transition={{
                duration: 0.5,
                delay: 1.5
                // delay: 0.1 * parseInt(id)
            }}
            shadow='sm'
        >
            <Flex
                direction='column'
                bgColor='#ffffff'
                w='350px'
                px='4'
                py='4'
                // shadow='xs'
                borderRadius='md'
                outline='2px solid'
                outlineColor={selected ? '#000000' : 'transparent'}
                transition='all 0.2s ease-in'
            >
                <TaskNodeHandle type='target' position={Position.Left} count={targetCount} />
                <TaskNodeHandle type='source' position={Position.Right} count={sourceCount} />

                <Text
                    color='apple.black'
                    fontSize='sm'
                    mb='1'
                    textTransform='uppercase'
                    fontWeight='600'
                    fontFamily='"Roboto Mono", monospace'
                >
                    {state.name}
                </Text>
                <Heading
                    letterSpacing='tight'
                    fontSize='2xl'
                    maxW='80%'
                    noOfLines={3}
                    color='apple.black'
                >
                    {title}
                </Heading>
                {description &&
                    <Text
                        fontWeight='500'
                        fontSize='sm'
                        color='blackAlpha.700'
                        noOfLines={2}
                        mt='2'
                    >
                        {description}
                    </Text>
                }
                {image &&
                    <Image
                        src={image}
                        borderRadius='md'
                        mt='3'
                        objectFit='cover'
                    />
                }
                <Flex
                    alignItems='center'
                    mt='3'
                    justifyContent='space-between'
                >
                    <HStack
                        spacing='2px'
                        alignItems='center'
                    >
                        {users.map(user => <TaskNodeUser name={user.name} img={user.img} key={user.name} />)}
                    </HStack>
                    <HStack
                        alignItems='center'
                        spacing='1'
                    >
                        {tags.map(tag => <TaskNodeTag name={tag.name} color={tag.color} key={tag.name} />)}
                    </HStack>
                </Flex>
            </Flex>
        </ChakraBox>
    );
}

export default TaskNode;