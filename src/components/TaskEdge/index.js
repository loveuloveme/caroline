import React from 'react'
import { useNodes, getBezierPath } from 'react-flow-renderer'
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
                strokeDasharray='100%'
                strokeDashoffset='100%'
                strokeWidth='8'
                stroke='#000000'

                animate={{
                    strokeDashoffset: ['100%', '0%']
                }}

                transition={{
                    delay: 2,
                    duration: 1.5,
                    type: 'spring',
                    bounce: '0.20'
                }}
            />
        </>
    )
}

export default React.memo(TaskEdge);