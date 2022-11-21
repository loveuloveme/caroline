import { chakra, shouldForwardProp } from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';

const FramerBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const FramerImage = chakra(motion.img, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const FramerPath = chakra(motion.path, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

export default FramerBox;

export { FramerBox, FramerPath, FramerImage };