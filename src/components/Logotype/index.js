import { Heading } from "@chakra-ui/react";

function Logotype(){
    return (
        <Heading
            fontWeight='700'
            letterSpacing='tight'
            fontSize='4xl'
            zIndex='10'
            color='apple.black'
            // ml='2'
            bgGradient='linear(to-r, #ff4e50, #f9d423)'
            bgClip='text'
        >
            CAROLINE
        </Heading>
    );
}

export default Logotype;