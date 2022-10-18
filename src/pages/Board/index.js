import { Box, Heading, Flex, position, VStack, Image, Text, HStack } from "@chakra-ui/react";
import BoardStat from "../../components/BoardStat/index.js";
import BoardComponent from '../../components/Board';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import data1 from '../data.js';
import React, { useEffect, useState } from "react";
import BoardProvider, { useBoard } from './context';
import Logotype from "../../components/Logotype/index.js";
import ChakraBox from "../../components/ChakraBox/index.js";

const data = data1[0];

function Board() {
    const [tasks, setTasks] = useState([]);
    const [edges, setEdges] = useState([]);
    const [isStatOpen, setStatOpen] = useState(true);

    const handle = useFullScreenHandle();

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

        setTimeout(() => {
            const source = new Map();

            setEdges(data.edges.sort((a, b) => parseInt(a.source) - parseInt(b.source)).map((item, index) => {
                if (!source.has(item.source)) {
                    source.set(item.source, 0);
                } else {
                    source.set(item.source, source.get(item.source) + 1);
                }

                return {
                    id: `${index}`,
                    ...item,
                    type: 'custom',
                    sourceHandle: `${source.get(item.source)}`
                };
            }));
        }, 100 * data.nodes.length + 1000)

    }, []);

    return (

        <BoardProvider>
            <Flex
                direction='column'
                h='100vh'
                position='relative'
            >
                <FullScreen className='board-content' handle={handle}>
                    <Box
                        h='100%'
                        position='relative'
                        shadow='lg'
                    >
                        <BoardStat onChange={setStatOpen} tags={tags} states={states} users={users} title={title} handle={handle} />
                        <BoardComponent tasks={tasks} edges={edges} />
                    </Box>
                </FullScreen>
            </Flex>
        </BoardProvider>
    );
}

export default Board;