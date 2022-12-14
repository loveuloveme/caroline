import { Flex, Heading, HStack, Image, Text, Code, SimpleGrid } from '@chakra-ui/react';
import { useMemo } from 'react';
import { Position } from 'reactflow';
import { useBoard } from "../../pages/Board/context";
import ChakraBox from '../FramerElement';

import TaskNodeHandle from './TaskNodeHandle';
import TaskNodeTag from './TaskNodeTag';
import TaskNodeUser from './TaskNodeUser';

function TaskNode({ data }) {
    const {
        title, users, tags, description,
        state, sourceCount, targetCount, image
    } = data;

    const { query } = useBoard();

    const selected = useMemo(() => {
        return (query.user.length || query.tag.length || query.state.length)
            && query.user.every(elem => users.map(item => item.id).includes(elem))
            && query.tag.every(elem => tags.map(item => item.id).includes(elem))
            && (!query.state.length || query.state.some(elem => state.id === elem));
    }, [query]);

    return (
        <ChakraBox
            animate={{
                opacity: [0, 1],
            }}

            transition={{
                duration: 0.5,
                delay: 1.5
            }}
            shadow='sm'
        >
            <Flex
                direction='column'
                bgColor='#ffffff'
                w='350px'
                px='4'
                py='4'
                borderRadius='md'
                outline='2px solid'
                outlineColor={selected ? '#000000' : 'transparent'}
                transition='all 0.2s ease-in'
            >
                <TaskNodeHandle type='target' position={Position.Left} count={targetCount} />
                <TaskNodeHandle type='source' position={Position.Right} count={sourceCount} />

                <Code
                    color='apple.black'
                    fontSize='sm'
                    mb='1'
                    textTransform='uppercase'
                    fontWeight='600'
                    bgColor='transparent'
                    p='0'
                >
                    {state.name}
                </Code>
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
                    alignItems='flex-start'
                    mt='3'
                    justifyContent='space-between'
                >
                    <SimpleGrid columns='3' gap='1'>
                        {users.slice(0, 2).map(user => <TaskNodeUser name={user.name} img={user.img} key={user.name} />)}
                    </SimpleGrid>

                    <SimpleGrid columns='2' gap='1' style={{ direction: 'rtl' }}>
                        {tags.map(tag => <TaskNodeTag style={{ direction: 'ltr' }} display='inline-grid' name={tag.name} color={tag.color} key={tag.name} />)}
                    </SimpleGrid>
                    {/* <HStack
                        alignItems='center'
                        spacing='1'
                    >
                        {tags.slice(0, 2).map(tag => <TaskNodeTag name={tag.name} color={tag.color} key={tag.name} />)}
                    </HStack> */}
                </Flex>
            </Flex>
        </ChakraBox>
    );
}

export default TaskNode;