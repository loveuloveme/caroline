import { Flex, Heading, HStack, Text } from '@chakra-ui/react';
import { Position } from 'react-flow-renderer';

import TaskNodeHandle from './TaskNodeHandle';
import TaskNodeTag from './TaskNodeTag';
import TaskNodeUser from './TaskNodeUser';

function TaskNode({ data }) {  
    const { title, users, tags, description, state } = data;

    return (
        <Flex
            direction='column'
            bgColor='#ffffff'
            w='350px'
            maxH='170px'
            px='4'
            py='4'
            shadow='xs'
            borderRadius='md'
        >
            <TaskNodeHandle type='target' position={Position.Left} />
            <TaskNodeHandle type='source' position={Position.Right} />

            <Text
                color='apple.blue.light'
                fontSize='xs'
                mb='1'
                textTransform='uppercase'
                fontWeight='500'
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