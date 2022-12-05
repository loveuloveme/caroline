import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Heading,
} from '@chakra-ui/react';


function ModalLayout({ isOpen, onClose, title, children }) {
    return (
        <>
            <Modal
                size='2xl'
                isCentered
                onClose={onClose}
                isOpen={isOpen}
                motionPreset='slideInBottom'
            >
                <ModalOverlay bgColor='rgba(0, 0, 0, 0.6)' backdropFilter='blur(23px)' />
                <ModalContent
                    shadow='none'
                >
                    <ModalHeader>
                        <Heading
                            fontSize='6xl'
                            fontWeight='bold'
                            color='apple.black'
                        >
                            {title}
                        </Heading>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pt='20px'>
                        {children}
                    </ModalBody>
                    <ModalFooter>
                        {/* <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant='ghost'>Secondary Action</Button> */}
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ModalLayout;