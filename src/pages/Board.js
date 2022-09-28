import { Box, Heading, Flex, position } from "@chakra-ui/react";
import BoardStat from "../components/BoardStat/index.js";
import BoardComponent from '../components/Board';

import data from './data.js';
import { useEffect, useState } from "react";

function Board(){
    const [tasks, setTasks] = useState([]);
    const [edges, setEdges] = useState([]);
    const { tags, states, users, title } = data;

    useEffect(() => {
        setTasks(data.nodes.map(taskNode => {
            return {
                id: taskNode.id,
                position: taskNode.position,
                type: 'task',
                data: {
                    ...taskNode,
                    users: taskNode.workers.map(user => {
                        return (
                            data.users.find(item => item.id == user)
                        );
                    }),
                    tags: taskNode.tags.map(tag => {
                        return (
                            data.tags.find(item => item.id == tag)
                        );
                    }),
                    state: data.states.find(item => item.id == taskNode.state)
                }
            }
        }));

        setEdges(data.edges);
    }, [data])

    return (
        <Box>
            <Flex
                h='80px'
                alignItems='center'
            >
                <Flex
                    w='350px'
                    alignItems='center'
                    justifyContent='center'
                >
                    <Box
                        ml='-5'
                        w='35px'
                        h='35px'
                        bgColor='red'
                        //transform='rotate(20deg)'
                        borderRadius='md'
                        bgGradient='linear(to-tr, #ff4e50, #f9d423)'
                    ></Box>
                    <Heading
                        fontWeight='700'
                        letterSpacing='tight'
                        fontSize='4xl'
                        zIndex='10'
                        ml='3'
                        bgGradient='linear(to-r, #ff4e50, #f9d423)'
                        bgClip='text'
                    >
                        DISSENT.
                    </Heading>
                </Flex>
            </Flex>
            <Flex alignItems='flex-end' h='calc(100vh - 80px)'>
                <BoardStat tags={tags} states={states} users={users} title={title} />
                <BoardComponent tasks={tasks} edges={edges} />
            </Flex>
        </Box>
    );
}

export default Board;