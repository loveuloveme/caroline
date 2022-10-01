import { Box, Heading, Flex, position } from "@chakra-ui/react";
import BoardStat from "../components/BoardStat/index.js";
import BoardComponent from '../components/Board';

import data from './data.js';
import React, { useEffect, useState } from "react";
import BoardProvider, { useBoard } from './BoardContext';

function Board(){
    const [tasks, setTasks] = useState([]);
    const [edges, setEdges] = useState([]);
    
    const { tags, states, users, title } = data;

    const boardContext = useBoard();

    console.log(1, boardContext)
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
                    //search_selected: boardContext.user.every(elem => taskNode.workers.includes(elem))
                }
            }
        }));

        setEdges(data.edges);
    }, [data]);

    return (
        <BoardProvider>
            <Box>
                <Flex alignItems='flex-end' h='calc(100vh)' position='relative'>
                    <BoardStat tags={tags} states={states} users={users} title={title} />
                    <BoardComponent tasks={tasks} edges={edges} />
                </Flex>
            </Box>
        </BoardProvider>
    );
}

export default Board;