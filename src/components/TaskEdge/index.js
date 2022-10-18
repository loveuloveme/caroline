import React from 'react'
import { useNodes, BezierEdge, getBezierPath } from 'react-flow-renderer'
import { getSmartEdge, pathfindingAStarNoDiagonal } from '@tisoap/react-flow-smart-edge'
import { ChakraPath } from '../ChakraBox';

function TaskEdge(props) {
    const {
        id,
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

    const nodes = useNodes()

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
            <ChakraPath
                style={style}
                className='react-flow__edge-path'
                d={getSmartEdgeResponse}
                markerEnd={markerEnd}
                markerStart={markerStart}
                strokeDasharray='100%'
                strokeDashoffset='100%'
                strokeWidth='5'

                animate={{
                    strokeDashoffset: ['100%', '0%']
                }}

                transition={{
                    delay: 0.1 * parseInt(id),
                    duration: 1.5,
                    type: 'spring',
                    bounce: '0.20'
                }}

            />
        </>
    )
}

export default React.memo(TaskEdge);