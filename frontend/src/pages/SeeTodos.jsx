import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  IconButton,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  Textarea,
  useDisclosure,
  VStack
} from "@chakra-ui/react";
import ShowCard from "../Card.jsx";
import {useEffect, useRef, useState} from "react";
import axios from "axios";
import {CheckIcon, DeleteIcon, EditIcon} from "@chakra-ui/icons";
import usePageStore from "../store.js";

function SeeTodos() {
  const titleRef = useRef();
  const descRef = useRef();
  const {isOpen, onOpen, onClose} = useDisclosure();
  const url = 'http://192.168.0.119:3000/todos/';
  const [data, setData] = useState([]);
  const [updateData, setUpdateData] = useState({});
  const updatePage = usePageStore((state) => state.updatePage);

  useEffect(() => {
    getTodo().then()
  })

  async function getTodo() {
    try {
      await axios.get(url)
        .then((res) => {
          setData(res.data);
        })

      return data;
    } catch (e) {
      console.error(e);
    }
  }

  async function deleteTodo(id) {
    try {
      await axios.delete(url + id);
    } catch (e) {
      console.error(e);
    }
  }

  async function updateTodo(id, title, desc, done) {
    try {
      await axios.put(url + id, {
        title: title, desc: desc, done: done
      })
    } catch (e) {
      console.error(e);
    }

    onClose();
  }

  return (<>
    <VStack>
      <Heading
        bgGradient={['linear(to-tr, teal.300, yellow.400)', 'linear(to-t, blue.200, teal.500)', 'linear(to-b, orange.100, purple.300)']}
        bgClip='text'
        color='transparent'
        p='4'
      >ALL TODOS 📃</Heading>
      <Divider></Divider>
      <Box>
        <Grid
          p={4}
          templateColumns={{
            base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', xl: 'repeat(3, 1fr)', '2xl': 'repeat(4, 1fr)',
          }}
          sx={{'scrollbarWidth': 'none'}}
          overflowY='scroll'
          h='60vh'
          gap='2rem'>
          {data.length === 0 && <Container w='80vw' textAlign='center'>
            <Text fontSize='2rem'>No todos are available 😢</Text>
            <Link
              fontSize='2rem'
              color={['#98cd92', '#7fc2dd', '#c9abe7']}
              textDecoration='underline'
              fontStyle='italic'
              onClick={() => updatePage('create')}
            >Create a Todo.</Link>
          </Container>}
          {data.map((data) => {
            return <GridItem key={data._id}>
              <ShowCard title={data.title} desc={data.desc} done={data.done}></ShowCard>
              <Flex justifyContent='center'>
                <ButtonGroup isAttached bg='gray.700' variant='outline'>
                  <IconButton
                    onClick={() => {
                      updateTodo(data._id, data.title, data.desc, !data.done)
                    }}
                    color='green.300'
                    aria-label='Mark todo as done'
                    title='check'
                    icon={<CheckIcon/>}>
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      onOpen();
                      setUpdateData({
                        id: data._id, title: data.title, desc: data.desc, done: data.done,
                      })
                    }}
                    color='blue.300'
                    aria-label='Edit todo'
                    title='edit'
                    icon={<EditIcon/>}>
                  </IconButton>
                  <IconButton
                    onClick={() => deleteTodo(data._id)}
                    color='red.300'
                    aria-label='Delete todo'
                    title='delete'
                    icon={<DeleteIcon/>}>
                  </IconButton>
                </ButtonGroup>

                <Modal
                  isOpen={isOpen}
                  onClose={onClose}
                  isCentered
                  motionPreset='slideInBottom'
                >
                  <ModalOverlay
                    bg=''
                    backdropFilter='blur(10px)'
                  />
                  <ModalContent>
                    <ModalCloseButton></ModalCloseButton>
                    <ModalBody>
                      <VStack spacing='1rem' my='8'>
                        <Heading
                          bgGradient={['linear(to-tr, teal.300, yellow.400)', 'linear(to-t, blue.200, teal.500)', 'linear(to-b, orange.100, purple.300)',]}
                          bgClip='text'
                          color='transparent'
                        >UPDATE A TODO ✍️</Heading>
                        <Divider></Divider>
                        <Text fontSize='1.5rem'>Todo Title</Text>
                        <Input
                          name='title'
                          ref={titleRef}
                          placeholder='Complete homework'
                          value={updateData.title}
                          onChange={() => {
                            setUpdateData({
                              id: updateData.id,
                              title: titleRef.current.value,
                              desc: descRef.current.value,
                              data: updateData.done
                            })
                          }}
                        />
                        <Text fontSize='1.5rem'>Todo Description</Text>
                        <Textarea
                          aria-label='Description'
                          name='desc'
                          ref={descRef}
                          resize='none'
                          placeholder='All homeworks due must be completed by next Sunday.'
                          value={updateData.desc}
                          onChange={() => {
                            setUpdateData({
                              id: updateData.id,
                              title: titleRef.current.value,
                              desc: descRef.current.value,
                              data: updateData.done
                            })
                          }}
                        />
                        <Button
                          onClick={() => updateTodo(updateData.id, updateData.title, updateData.desc)}
                          fontWeight='semibold'
                          fontSize='1.5rem'
                          color={['#98cd92', '#7fc2dd', '#c9abe7']}
                          py='8'
                          px='6'
                          mt='6'
                        >Update Todo</Button>
                      </VStack>
                    </ModalBody>
                  </ModalContent>
                </Modal>
              </Flex>
            </GridItem>
          })}
        </Grid>
      </Box>
    </VStack>
  </>)
}

export default SeeTodos;