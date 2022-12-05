import { Tag } from '@chakra-ui/react';

function TaskNodeTag({ name = 'tag', color, ...rest }) {
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
            {...rest}
        >
            {name || 'Безымянный'}
        </Tag>
    );
}


export default TaskNodeTag;