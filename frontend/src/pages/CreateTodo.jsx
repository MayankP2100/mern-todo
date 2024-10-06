import {Button, Divider, Heading, Input, Text, Textarea, useToast, VStack} from "@chakra-ui/react";
import {useRef} from "react";
import axios from "axios";

function CreateTodo() {
  const url = 'http://localhost:3000/todos';
  const titleRef = useRef();
  const descRef = useRef();
  const toast = useToast();

  async function postTodo() {
    if (titleRef.current.value === "" || descRef.current.value === "") {
      toast({
        title: "Failed to Create Todo",
        description: "Fields cannot be empty",
        status: 'error',
        duration: 4000,
        isClosable: true
      })
      return;
    }

    try {
      await axios.post(url, {
        title: titleRef.current.value, desc: descRef.current.value, done: false,
      });
      await toast({
        title: "Success",
        description: "Todo has been created",
        status: 'success',
        duration: 1000,
        isClosable: true
      })
    } catch (e) {
      console.log(e);
    }
  }

  return (<>
    <VStack spacing='1rem'>
      <Heading
        sx={{
          filter: 'drop-shadow(3px 3px rgba(0, 0, 0, 0.3))'
        }}
        bgGradient={['linear(to-tr, teal.300, yellow.400)', 'linear(to-t, blue.200, teal.500)', 'linear(to-b, orange.100, purple.300)',]}
        bgClip='text'
        color='transparent'
      >CREATE A TODO ✏️</Heading>
      <Divider></Divider>
      <Text color={'gray.200'} fontSize='1.5rem'>Todo Title</Text>
      <Input ref={titleRef} placeholder='Complete homework'></Input>
      <Text color={'gray.200'} fontSize='1.5rem'>Todo Description</Text>
      <Textarea ref={descRef} resize='none'
                placeholder='All homeworks due must be completed by next Sunday.'/>
      <Button
        bg={'gray.700'}
        _focus={{
          backgroundColor: 'gray.700'
        }}
        sx={{
          filter: 'drop-shadow(0 4px rgba(0, 0, 0, 0.3))'
        }}
        fontWeight='semibold' fontSize='1.5rem' color={['#98cd92', '#7fc2dd', '#c9abe7']} onClick={postTodo}
        py='8' px='6' mt='6'>Create Todo</Button>
    </VStack>
  </>)
}

export default CreateTodo;