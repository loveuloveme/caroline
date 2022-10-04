import { Box, Button, Heading } from "@chakra-ui/react";
import { useMemo } from "react";
import ReactFlow, { MiniMap } from "react-flow-renderer";
import TaskNode from "../TaskNode";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { Icon } from '@chakra-ui/react'
import { IoMdResize } from 'react-icons/io'

function Board({ tasks, edges }){
    const handle = useFullScreenHandle();
    const nodeTypes = useMemo(() => ({ task: TaskNode }), []);

    return (
        <Box
            bgColor='#f5f5f7'
            h='100vh'
            flex='1'
            borderTopLeftRadius='3xl'
            position='relative'
        >
            <Button
                position='absolute'
                leftIcon={<Icon as={IoMdResize} />}
                colorScheme='blackAlpha'
                zIndex='10'
                top='5  '
                right='5'
                onClick={handle.enter}
            >
                Хе-хе
            </Button>
            <FullScreen handle={handle}>
                <ReactFlow nodeTypes={nodeTypes} defaultNodes={tasks} defaultEdges={edges} fitView>
                    <MiniMap />
                </ReactFlow>
            </FullScreen>
        </Box>
    );
}

export default Board;