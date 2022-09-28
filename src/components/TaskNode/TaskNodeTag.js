import { Tag } from '@chakra-ui/react';

function TaskNodeTag({name = 'тэг', color}){
    return (
        <Tag
            size='sm'
            variant='solid'
            fontSize='xs'
            bgColor={color}
            fontWeight='600'
            borderRadius='sm'
        >
            {name}
        </Tag>
    );
}


export default TaskNodeTag;