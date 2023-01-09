import { Box, Flex, keyframes, Icon } from "@chakra-ui/react";
import BoardStat from "../../components/BoardStat/index.js";
import BoardComponent from '../../components/Board';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import React, { useEffect, useRef, useState } from "react";
import BoardProvider from './context';
import ChakraBox, { FramerBox } from "../../components/FramerElement/index.js";
import CarolineService from "../../services/CarolineService.js";
import { useParams } from "react-router-dom";
import Layout from "../../common/Layout.js";
import { SERVICES } from "../../common/Service.js";
import { useCallback } from "react";
import { useEdgesState, useNodesState } from "reactflow";

const flash = keyframes`
  100% { opacity: 1; }
  50% { opacity: 0.5; }
  0% { opacity: 1; }
`

function Board() {
    const dataFetchedRef = useRef(false);
    const { boardId, service } = useParams();
    const [boardData, setBoardData] = useState({
        tags: [],
        states: [],
        users: [],
        title: '',
        url: ''
    });

    const [loading, setLoading] = useState(true);

    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges] = useEdgesState([]);
    const handle = useFullScreenHandle();

    useEffect(() => {
        if (dataFetchedRef.current) return;
        dataFetchedRef.current = true;

        async function fetchData() {
            const board = CarolineService.getBoard(boardId, service);
            const cards = CarolineService.getBoardCards(boardId, service);
            const members = CarolineService.getBoardMembers(boardId, service);
            const tags = CarolineService.getBoardTags(boardId, service);
            const states = CarolineService.getBoardStates(boardId, service);
            const edges = CarolineService.getBoardEdges(boardId, service);

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
                        tags: card.tags.map(tag => tags.find(item => item.id === tag)),
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

                if (!localStorage.getItem(`${boardId}-nodes`)) {
                    arrangeNodes(nodes, edges);
                } else {
                    const positions = getSavedPosition();

                    setNodes(nodes.map(node => {
                        return {
                            ...node,
                            position: positions[node.id]
                        }
                    }))
                }

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);




    const getSavedPosition = useCallback(() => {
        return JSON.parse(localStorage.getItem(`${boardId}-nodes`)) || {};
    }, [boardId]);

    const savePosition = useCallback((changes, node) => {
        const nodesPositions = getSavedPosition();
        nodesPositions[node.data.id] = node.position;

        localStorage.setItem(`${boardId}-nodes`, JSON.stringify(nodesPositions));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const arrangeNodes = useCallback((nodes, edges) => {
        let layoutedNodes = Layout.getLayoutedElements(nodes, edges).nodes.map(node => {
            savePosition(null, node);
            return {
                ...node,
                positionAbsolute: node.position
            }
        })

        setNodes(layoutedNodes);
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                            <Icon w='50px' h='50px' as={SERVICES[service].icon} color={SERVICES[service].color} />
                        </FramerBox>
                        :
                        <FullScreen className='board-content' handle={handle}>
                            <Box
                                h='100%'
                                position='relative'
                                shadow='lg'
                            >
                                <BoardStat {...boardData} handle={handle} arrangeNodes={() => arrangeNodes(nodes, edges)} />
                                <BoardComponent nodes={nodes} edges={edges} onNodeDragStop={savePosition} onNodesChange={onNodesChange} />
                            </Box>
                        </FullScreen>
                    }
                </Flex>
            </ChakraBox>
        </BoardProvider>
    );
}

export default Board;