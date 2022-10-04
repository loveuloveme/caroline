import { Avatar } from '@chakra-ui/react';

function TaskNodeUser({ name, img }){
    return (
        <Avatar size='xs' name={name} src={img} />
    );
}

export default TaskNodeUser;