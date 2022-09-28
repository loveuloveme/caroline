import { Box, Heading } from "@chakra-ui/react";
import { useMemo } from "react";
import ReactFlow, { MiniMap } from "react-flow-renderer";
import TaskNode from "../TaskNode";

function Board({ tasks, edges }){
    const nodeTypes = useMemo(() => ({ task: TaskNode }), []);

    return (
        <Box
            bgColor='#f5f5f7'
            h='100%'
            flex='1'
            borderTopLeftRadius='3xl'
        >
            <ReactFlow nodeTypes={nodeTypes} defaultNodes={tasks} defaultEdges={edges} fitView>
                <MiniMap />
            </ReactFlow>
        </Box>
    );
}

export default Board;