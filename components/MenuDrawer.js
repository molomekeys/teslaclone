import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay, Button, Input,
    DrawerContent, List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
    DrawerCloseButton, useDisclosure
} from '@chakra-ui/react'
import React from 'react'
import Link from 'next/link'
export default function MenuDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <>
            <Button ref={btnRef} colorScheme='blackAlpha100' className='hover:bg-slate-200 hover:text-black' onClick={onOpen}>
                Menu
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader></DrawerHeader>

                    <DrawerBody>
                        <List>
                            <Link href="/models" onClick={onClose}>
                                <ListItem>Model S</ListItem>
                            </Link>
                            <ListItem>Model 3</ListItem>
                            <ListItem>Model Y</ListItem>
                            <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                        </List>
                    </DrawerBody>

                    <DrawerFooter>

                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}