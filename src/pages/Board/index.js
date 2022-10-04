import { Box, Heading, Flex, position, VStack, Image, Text, HStack } from "@chakra-ui/react";
import BoardStat from "../../components/BoardStat/index.js";
import BoardComponent from '../../components/Board';

import data from '../data.js';
import React, { useEffect, useState } from "react";
import BoardProvider, { useBoard } from './context';

function Board(){
    const [tasks, setTasks] = useState([]);
    const [edges, setEdges] = useState([]);
    
    const { tags, states, users, title } = data;

    const boardContext = useBoard();
    
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
                    state: data.states.find(item => item.id == taskNode.state),
                    sourceCount: data.edges.reduce((prev, edge) => {
                        return prev + (edge.source === taskNode.id ? 1 : 0)
                    }, 0),
                    targetCount: data.edges.reduce((prev, edge) => {
                        return prev + (edge.target === taskNode.id ? 1 : 0)
                    }, 0)
                }
            }
        }));

        const source = new Map();
        
        setEdges(data.edges.map((item, index) => {
            if(!source.has(item.source)){
                source.set(item.source, 0);
            }else{
                source.set(item.source, source.get(item.source) + 1);
            }

            return {
                ...item,
                sourceHandle: `${source.get(item.source)}`
            };
        }));
    }, [data]);

    return (
        <BoardProvider>
            <Box>
                <Flex
                    alignItems='flex-end'
                    h='100vh'
                >
                    <BoardStat tags={tags} states={states} users={users} title={title} />
                    <Flex
                        direction='column'
                        h='100%'
                        flex='1'
                    >
                        <Flex
                            h='120px'
                            alignItems='center'
                        >
                            <VStack
                                alignItems='flex-start'
                                spacing='0'
                            >
                                <Text
                                    display='inline'
                                    fontWeight='900'
                                    color='apple.blue.dark'
                                    opacity='0.8'
                                    mt='-5px !important'
                                >
                                    доска trello
                                </Text>
                                <Heading
                                    letterSpacing='normal'
                                    fontSize='4xl'
                                    fontWeight='bold'
                                    color='apple.black'
                                    noOfLines={1}
                                >
                                    {title}
                                </Heading>
                            </VStack>
                        </Flex>
                        <BoardComponent tasks={tasks} edges={edges} />
                    </Flex>
                </Flex>
            </Box>
        </BoardProvider>
    );
}

export default Board;