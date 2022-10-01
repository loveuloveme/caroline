import { Flex, Heading, HStack, Text } from '@chakra-ui/react';
import { Position } from 'react-flow-renderer';
import { useBoard } from '../../pages/BoardContext';

import TaskNodeHandle from './TaskNodeHandle';
import TaskNodeTag from './TaskNodeTag';
import TaskNodeUser from './TaskNodeUser';

function TaskNode({ data }) {  
    const { title, users, tags, description, state } = data;

    const { query } = useBoard();
    const selected = (query.user.length || query.tag.length || query.state.length) && query.user.every(elem => users.map(item => item.id).includes(elem))
    && query.tag.every(elem => tags.map(item => item.id).includes(elem))
    && (!query.state.length || query.state.some(elem => state.id == elem));

    console.log(query.state, state, query.state.some(elem => state.id == elem))
    return (
        <Flex
            direction='column'
            bgColor='#ffffff'
            w='350px'
            //maxH='170px'
            px='4'
            py='4'
            shadow='xs'
            borderRadius='md'
            outline={selected ? '2px solid #000000' : 'none'}
        >
            <TaskNodeHandle type='target' position={Position.Left} />
            <TaskNodeHandle type='source' position={Position.Right} />

            <Text
                color='apple.black'
                fontSize='sm'
                mb='1'
                textTransform='uppercase'
                fontWeight='600'
                fontFamily='"JetBrains Mono", monospace'
            >
                {state.name}
            </Text>
            <Heading
                fontSize='xl'
                maxW='80%'
                noOfLines={2}
                color='apple.black'
            >
                {title}
            </Heading>
            {description &&
                <Text
                    fontSize='xs'
                    color='blackAlpha.700'
                    noOfLines={2}
                    mt='1'
                    mb='1'
                >
                    {description}
                </Text>
            }
            <Flex
                alignItems='center'
                mt='2'
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
    );
}

export default TaskNode;