import {
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Heading,
  HStack,
  IconButton,
  Show,
  useDisclosure,
  VStack
} from "@chakra-ui/react";
import {HamburgerIcon} from "@chakra-ui/icons";
import {useRef} from "react";
import usePageStore from "./store.js";

function Navbar() {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const btnRef = useRef();
  const updatePage = usePageStore((state) => state.updatePage);

  function setPage(page) {
    updatePage(page);
  }

  return (<>
    <Flex
      sx={{
        filter: 'drop-shadow(0 3px rgba(0, 0, 0, 0.3))'
      }}
      bg='gray.900'
      justify='space-between'
      py='1rem'
      px='2rem'
    >
      <Heading
        bgGradient={['linear(to-tr, teal.300, yellow.400)', 'linear(to-t, blue.200, teal.500)', 'linear(to-b, orange.100, purple.300)',]}
        bgClip='text'
        color='transparent'
        fontWeight='extrabold'
        size='2xl'
        sx={{
          filter: 'drop-shadow(3px 3px rgba(0, 0, 0, 0.3))'
        }}
      >MernTodo</Heading>
      <Show breakpoint='(max-width: 800px)'>
        <IconButton
          fontSize='1.5rem'
          ref={btnRef}
          bg='gray.700'
          color={['#98cd92', '#7fc2dd', '#c9abe7']}
          aria-label='Menu Button'
          onClick={onOpen}
          icon=<HamburgerIcon/>
        />
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay></DrawerOverlay>
          <DrawerContent px='0.5rem' bg='gray.900'>
            <DrawerCloseButton color={'gray.200'} p='1rem' size='3xl'></DrawerCloseButton>
            <DrawerBody px='0.5rem' py='4rem'>
              <Container>
                <VStack spacing='1rem' mt='1rem'>
                  <Button
                    onClick={() => setPage('create')}
                    w='100%'
                    bg={'gray.700'}
                    _focus={{
                      backgroundColor: 'gray.700'
                    }}
                    color={['#98cd92', '#7fc2dd', '#c9abe7']}
                  >
                    CREATE A TODO
                  </Button>
                  <Button
                    onClick={() => setPage('todos')}
                    w='100%'
                    bg={'gray.700'}
                    _focus={{
                      backgroundColor: 'gray.700'
                    }}
                    color={['#98cd92', '#7fc2dd', '#c9abe7']}
                  >
                    SEE ALL TODOS
                  </Button>
                  <Button
                    onClick={() => setPage('about')}
                    w='100%'
                    bg={'gray.700'}
                    _focus={{
                      backgroundColor: 'gray.700'
                    }}
                    color={['#98cd92', '#7fc2dd', '#c9abe7']}
                  >
                    ABOUT ME
                  </Button>
                  <Button
                    onClick={() => setPage('docs')}
                    w='100%'
                    bg={'gray.700'}
                    _focus={{
                      backgroundColor: 'gray.700'
                    }}
                    color={['#98cd92', '#7fc2dd', '#c9abe7']}
                  >
                    DOCUMENTATION
                  </Button>
                </VStack>
              </Container>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Show>
      <Show breakpoint='(min-width: 801px)'>
        <HStack spacing='1.5rem'>
          <Button
            sx={{
              filter: 'drop-shadow(3px 3px rgba(0, 0, 0, 0.3))'
            }}
            fontSize='1.2rem'
            variant='none'
            color='#c9abe7'
            onClick={() => setPage('create')}>CREATE</Button>
          <Button
            sx={{
              filter: 'drop-shadow(3px 3px rgba(0, 0, 0, 0.3))'
            }}
            fontSize='1.2rem'
            variant='none'
            color='#c9abe7'
            onClick={() => setPage('todos')}>TODOS</Button>
          <Button
            sx={{
              filter: 'drop-shadow(3px 3px rgba(0, 0, 0, 0.3))'
            }}
            fontSize='1.2rem'
            variant='none'
            color='#c9abe7'
            onClick={() => setPage('about')}>ABOUT</Button>
          <Button
            sx={{
              filter: 'drop-shadow(3px 3px rgba(0, 0, 0, 0.3))'
            }}
            fontSize='1.2rem'
            variant='none'
            color='#c9abe7'
            onClick={() => setPage('docs')}>DOCS</Button>
        </HStack>
      </Show>
    </Flex>
  </>)
}

export default Navbar;