import './App.css'
import Navbar from "./Navbar.jsx";
import {
  Box, Container, Flex
} from "@chakra-ui/react";
import CreateTodo from "./pages/CreateTodo.jsx";
import SeeTodos from "./pages/SeeTodos.jsx";
import usePageStore from "./store.js";
import About from "./pages/About.jsx";

function App() {
  const currentPage = usePageStore((state) => state.page);

  return (<>
    <Box
      minH="100vh"
      w='1fr'
      bg='gray.800'
    >
      <Navbar/>
      <Box w='90vw' m={'auto'} h='80vh'>
        <Flex h='100%' alignContent='center' alignItems='center'>
          <Container
            maxW={{base: '90vw', md: '70vw', lg: '50vw'}}
            maxH='80vh'
          >
            {currentPage === 'todos' && <SeeTodos></SeeTodos>}
            {currentPage === 'create' && <CreateTodo></CreateTodo>}
            {currentPage === 'about' && <About></About>}
          </Container>
        </Flex>
      </Box>
    </Box>
  </>)
}

export default App
