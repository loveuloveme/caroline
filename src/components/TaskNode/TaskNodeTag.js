import { Tag } from '@chakra-ui/react';

function TaskNodeTag({ name = 'tag', color }) {
    return (
        <Tag
            size='md'
            variant='solid'
            fontSize='xs'
            bgColor={color}
            fontWeight='600'
            borderRadius='sm'
            py='1 !important'
            lineHeight='none'
        >
            {name || 'Безымянный'}
        </Tag>
    );
}


export default TaskNodeTag;