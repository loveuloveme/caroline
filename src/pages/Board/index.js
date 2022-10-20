import { Box, Flex } from "@chakra-ui/react";
import BoardStat from "../../components/BoardStat/index.js";
import BoardComponent from '../../components/Board';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import React, { useEffect, useState } from "react";
import BoardProvider from './context';
import ChakraBox from "../../components/FramerElement/index.js";
import { temp_ParseData } from "../../helpers.js";

function Board() {
    const [boardData, setBoardData] = useState({
        tags: [],
        states: [],
        users: [],
        title: ''
    });

    const [nodes, setNodes] = useState([]);
    const [edges, setEdges] = useState([]);
    const handle = useFullScreenHandle();

    useEffect(() => {
        const { tags, states, users, title, nodes, edges } = temp_ParseData();

        setNodes(nodes);
        setEdges(edges);
        setBoardData({ tags, states, users, title });
    }, []);

    return (
        <BoardProvider>
            <ChakraBox
                exit={{
                    opacity: 0
                }}
                transition={{
                    delay: 0.5
                }}
            >
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
                            <BoardStat {...boardData} handle={handle} />
                            <BoardComponent nodes={nodes} edges={edges} />
                        </Box>
                    </FullScreen>
                </Flex>
            </ChakraBox>
        </BoardProvider>
    );
}

export default Board;