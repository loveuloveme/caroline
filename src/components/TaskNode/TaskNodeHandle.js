import { VStack } from '@chakra-ui/react';
import { Handle, Position } from 'reactflow';

function TaskNodeHandle({ type = 'target', position, count }) {
    const size = 10;
    const style = {};

    style[Position.Left] = {};

    style[Position.Left].handle = {
        width: `${size / 2}px`,
        height: `${size}px`,
        borderRadius: '0 100% 100% 0 / 0 50% 50% 0'
    };

    style[Position.Left].stack = {
        left: 0,
        top: '50%',
        transform: 'translate(0, -50%)'
    };


    style[Position.Right] = {};

    style[Position.Right].handle = {
        width: `${size / 2}px`,
        height: `${size}px`,
        borderRadius: '100% 0 0 100% / 50% 0 0 50%',
    };

    style[Position.Right].stack = {
        right: 0,
        top: '50%',
        transform: 'translate(0, -50%)'
    };

    return (
        <VStack
            position='absolute'
            spacing='1'
            style={{
                ...style[position].stack
            }}
        >
            {new Array(count).fill(0).map((_, index) => {
                return (
                    <Handle
                        style={{
                            border: 'none',
                            position: 'static',
                            ...style[position].handle
                        }}
                        type={type}
                        position={position}
                        id={`${index}`}
                        key={index}
                    />
                );
            })}

        </VStack>


    );
}

export default TaskNodeHandle;