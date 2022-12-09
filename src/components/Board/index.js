import { Box } from "@chakra-ui/react";
import { useMemo } from "react";
import ReactFlow, { MiniMap } from "react-flow-renderer";
import TaskNode from "../TaskNode";
import TaskEdge from "../TaskEdge";

function Board({ nodes, edges, miniMap = false, ...rest }) {
    const nodeTypes = useMemo(() => ({ task: TaskNode }), []);
    const edgeTypes = useMemo(() => ({ custom: TaskEdge }), []);

    return (
        <Box
            w='100%'
            h='100%'
            flex='1'
        >
            <ReactFlow
                nodeTypes={nodeTypes}
                edgeTypes={edgeTypes}
                defaultNodes={nodes}
                defaultEdges={edges}
                fitView

                {...rest}
            >
                {miniMap && <MiniMap />}
            </ReactFlow>
        </Box >
    );
}

export default Board;