import './App.css'
// import {useEffect, useRef, useState} from "react";
// import axios from "axios";
import Navbar from "./Navbar.jsx";
import {
  Box, Container, Flex
} from "@chakra-ui/react";
import CreateTodo from "./pages/CreateTodo.jsx";
import SeeTodos from "./pages/SeeTodos.jsx";
import usePageStore from "./store.js";
import {useEffect} from "react";

function App() {
  const currentPage = usePageStore((state) => state.page);

  useEffect(() => {
  }, [currentPage]);

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
          </Container>
        </Flex>
      </Box>
    </Box>
  </>)
}

export default App
