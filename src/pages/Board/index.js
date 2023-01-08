import { Box, Flex, Heading, Text, keyframes, usePrefersReducedMotion } from "@chakra-ui/react";
import BoardStat from "../../components/BoardStat/index.js";
import BoardComponent from '../../components/Board';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import React, { useEffect, useRef, useState } from "react";
import BoardProvider from './context';
import ChakraBox, { FramerBox } from "../../components/FramerElement/index.js";
import CarolineService from "../../services/CarolineService.js";
import { useParams } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "../../common/Layout.js";

const flash = keyframes`
  100% { opacity: 1; }
  50% { opacity: 0.5; }
  0% { opacity: 1; }
`

function Board() {
    const dataFetchedRef = useRef(false);
    const { boardId } = useParams();
    const [boardData, setBoardData] = useState({
        tags: [],
        states: [],
        users: [],
        title: '',
        url: ''
    });

    const [loading, setLoading] = useState(true);

    const [nodes, setNodes] = useState([]);
    const [edges, setEdges] = useState([]);
    const handle = useFullScreenHandle();

    useEffect(() => {
        if (dataFetchedRef.current) return;
        dataFetchedRef.current = true;

        async function fetchData() {
            const board = CarolineService.getBoard(boardId);
            const cards = CarolineService.getBoardCards(boardId);
            const members = CarolineService.getBoardMembers(boardId);
            const tags = CarolineService.getBoardTags(boardId);
            const states = CarolineService.getBoardStates(boardId);
            const edges = CarolineService.getBoardEdges(boardId);

            Promise.all([board, cards, members, tags, states, edges]).then(async data => {
                let [board, cards, members, tags, states, edges] = data.map(value => value.data);
                edges = edges.flat();

                const nodes = cards.map(card => ({
                    "id": card.id,
                    "position": {
                        "x": -100,
                        "y": 0
                    },
                    "type": "task",
                    "data": {
                        id: card.id,
                        title: card.title,
                        workers: [
                            1,
                            2,
                            3
                        ],
                        tags: card.tags.map(tag => tags.find(item => item.id === tag)),
                        position: {
                            "x": -100,
                            "y": 0
                        },
                        type: "task",
                        state: states.find(state => state.id === card.state),
                        description: card.description,
                        image: card?.img,
                        users: card.workers.map(user => members.find(item => item.id === user)),
                        sourceCount: edges.reduce((prev, edge) => {
                            return prev + (edge.source === card.id ? 1 : 0)
                        }, 0),
                        targetCount: edges.reduce((prev, edge) => {
                            return prev + (edge.target === card.id ? 1 : 0)
                        }, 0)
                    }
                }));

                setNodes(Layout.getLayoutedElements(nodes, edges).nodes);
                setEdges(Layout.parseEdges(edges));


                setBoardData(prev => ({
                    ...prev,
                    url: board.url,
                    title: board.title,
                    tags: tags,
                    states: states,
                    users: members
                }));

                setLoading(false);
            });
        };

        fetchData();
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
                    {loading ?
                        <FramerBox
                            key='loading'
                            animate={{
                                opacity: [0, 1]
                            }}
                            animation={`${flash} infinite 2s linear 1s`}

                            display='flex'
                            w='100%' h='100%'
                            justifyContent='center'
                            alignItems='center'
                        >
                            <Text fontSize='4xl' fontWeight='500' color='caroline.blue'>CAROLINE</Text>
                        </FramerBox>
                        :
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
                    }
                </Flex>
            </ChakraBox>
        </BoardProvider>
    );
}

export default Board;