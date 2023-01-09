import React from 'react'
import { useNodes, getBezierPath } from 'reactflow'
import { pathfindingAStarNoDiagonal } from '@tisoap/react-flow-smart-edge'
import { FramerPath } from '../FramerElement';

function TaskEdge(props) {
    const {
        sourcePosition,
        targetPosition,
        sourceX,
        sourceY,
        targetX,
        targetY,
        style,
        markerStart,
        markerEnd
    } = props;

    const nodes = useNodes();

    const getSmartEdgeResponse = getBezierPath({
        sourcePosition,
        targetPosition,
        sourceX,
        sourceY,
        targetX,
        targetY,
        nodes,
        options: {
            nodePadding: 20,
            gridRatio: 5,
            generatePath: pathfindingAStarNoDiagonal
        }
    })

    return (
        <>
            <FramerPath
                style={style}
                className='react-flow__edge-path'
                d={getSmartEdgeResponse}
                markerEnd={markerEnd}
                markerStart={markerStart}
                strokeWidth='10'
                stroke='#323232'

                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: [0, 1]
                }}

                transition={{
                    delay: 2,
                    duration: 1
                }}
            />
        </>
    )
}

export default React.memo(TaskEdge);