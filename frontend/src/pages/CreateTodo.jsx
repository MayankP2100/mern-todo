import {Button, Divider, Heading, Input, Text, Textarea, VStack} from "@chakra-ui/react";
import {useRef} from "react";
import axios from "axios";

function CreateTodo() {
  const url = 'http://192.168.0.119:3000/todos';
  const titleRef = useRef();
  const descRef = useRef();

  async function postTodo() {
    try {
      await axios.post(url, {
        title: titleRef.current.value, desc: descRef.current.value, done: false,
      });
    } catch (e) {
      console.log(e);
    }
  }

  return (<>
    <VStack spacing='1rem'>
      <Heading
        bgGradient={['linear(to-tr, teal.300, yellow.400)', 'linear(to-t, blue.200, teal.500)', 'linear(to-b, orange.100, purple.300)',]}
        bgClip='text'
        color='transparent'
      >CREATE A TODO ✏️</Heading>
      <Divider></Divider>
      <Text fontSize='1.5rem'>Todo Title</Text>
      <Input ref={titleRef} placeholder='Complete homework'></Input>
      <Text fontSize='1.5rem'>Todo Description</Text>
      <Textarea ref={descRef} resize='none'
                placeholder='All homeworks due must be completed by next Sunday.'/>
      <Button fontWeight='semibold' fontSize='1.5rem' color={['#98cd92', '#7fc2dd', '#c9abe7']} onClick={postTodo}
              py='8' px='6' mt='6'>Create Todo</Button>
    </VStack>
  </>)
}

export default CreateTodo;