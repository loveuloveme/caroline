import { Handle, Position } from 'react-flow-renderer';

function TaskNodeHandle({ type = 'target', position }){
    const size = 10;
    const style = {};

    style[Position.Left] = {
        width: `${size/2}px`,
        height: `${size}px`,
        borderRadius: '0 100% 100% 0 / 0 50% 50% 0',
        left: 0
    };

    style[Position.Right] = {
        width: `${size/2}px`,
        height: `${size}px`,
        borderRadius: '100% 0 0 100% / 50% 0 0 50%',
        right: 0
    };

    return (
        <Handle
            style={{
                border: 'none',
                ...style[position]
            }}
            type={type}
            position={position}
        />
    );
}

export default TaskNodeHandle;