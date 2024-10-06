import {
  Highlight, AccordionButton, AccordionPanel, Box, Container, Divider, Heading, UnorderedList, VStack, Text, Code
} from "@chakra-ui/react";
import {Accordion, AccordionIcon, AccordionItem, ListItem, OrderedList} from "@chakra-ui/icons";

function Docs() {
  return (<>
    <VStack bg={'gray.800'}>
      <Heading
        sx={{
          filter: 'drop-shadow(3px 3px rgba(0, 0, 0, 0.3))'
        }}
        bgGradient={['linear(to-tr, teal.300, yellow.400)', 'linear(to-t, blue.200, teal.500)', 'linear(to-b, orange.100, purple.300)']}
        bgClip='text'
        color='transparent'
        p='4'
      >DOCUMENTATION 📄</Heading>
      <Divider></Divider>
      <Container maxW={'container.md'} bg={'gray.800'} color={'gray.200'}>
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box fontSize='1.3rem' as='span' flex='1' textAlign='left' color={['#98cd92', '#7fc2dd', '#c9abe7']}>
                  Your Ultimate To-Do Management Solution
                </Box>
                <AccordionIcon color={'gray.200'}/>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Streamline your productivity with MernTodo, a comprehensive platform that allows you to:
              <br/><br/>
              <UnorderedList>
                <ListItem>
                  <Text as='b' color={['#98cd92', '#7fc2dd', '#c9abe7']}>
                    Create&nbsp;
                  </Text>
                  new tasks effortlessly
                </ListItem>
                <ListItem>
                  <Text as='b' color={['#98cd92', '#7fc2dd', '#c9abe7']}>
                    View&nbsp;
                  </Text>
                  and track all your to-dos in one place
                </ListItem>
                <ListItem>
                  <Text as='b' color={['#98cd92', '#7fc2dd', '#c9abe7']}>
                    Check off&nbsp;
                  </Text>
                  completed tasks with satisfaction
                </ListItem>
                <ListItem>
                  <Text as='b' color={['#98cd92', '#7fc2dd', '#c9abe7']}>
                    Edit&nbsp;
                  </Text>
                  and update tasks as needed
                </ListItem>
                <ListItem>
                  <Text as='b' color={['#98cd92', '#7fc2dd', '#c9abe7']}>
                    Delete&nbsp;
                  </Text>
                  tasks that are no longer relevant
                </ListItem>
              </UnorderedList>
              <br/>
              Experience seamless task management with MernTodo, your go-to tool for staying organized and efficient.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box fontSize='1.3rem' as='span' flex='1' textAlign='left' color={['#98cd92', '#7fc2dd', '#c9abe7']}>
                  Built with Modern Technologies
                </Box>
                <AccordionIcon color={'gray.200'}/>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              MernTodo leverages cutting-edge technologies to deliver a seamless task management experience. My stack
              includes:
              <br/><br/>
              <UnorderedList>
                <ListItem>
                  <Text as='b' color={['#98cd92', '#7fc2dd', '#c9abe7']}>
                    MongoDB&nbsp;
                  </Text>
                  for robust database management
                </ListItem>
                <ListItem>
                  <Text as='b' color={['#98cd92', '#7fc2dd', '#c9abe7']}>
                    Express&nbsp;
                  </Text>
                  for efficient backend development
                </ListItem>
                <ListItem>
                  <Text as='b' color={['#98cd92', '#7fc2dd', '#c9abe7']}>
                    React&nbsp;
                  </Text>
                  for a dynamic and responsive user interface
                </ListItem>
                <ListItem>
                  <Text as='b' color={['#98cd92', '#7fc2dd', '#c9abe7']}>
                    Node&nbsp;
                  </Text>
                  for scalable and fast server-side operations
                </ListItem>
                <ListItem>
                  <Text as='b' color={['#98cd92', '#7fc2dd', '#c9abe7']}>
                    ChakraUI&nbsp;
                  </Text>
                  for an elegant and consistent design system
                </ListItem>
              </UnorderedList>
              <br/>
              I use
              <Text as='b' color={['#98cd92', '#7fc2dd', '#c9abe7']}>
                &nbsp;Oswald&nbsp;
              </Text>
              for headings and
              <Text as='b' color={['#98cd92', '#7fc2dd', '#c9abe7']}>
                &nbsp;Hind&nbsp;
              </Text>
              for body text, ensuring a visually appealing and professional appearance.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box fontSize='1.3rem' as='span' flex='1' textAlign='left' color={['#98cd92', '#7fc2dd', '#c9abe7']}>
                  Easy Local Installation
                </Box>
                <AccordionIcon color={'gray.200'}/>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              You can locally install MernTodo from my GitHub repository. Follow these steps to get started:
              <br/><br/>
              <Text as='b' color={['#98cd92', '#7fc2dd', '#c9abe7']}>
                For general installation:
              </Text>
              <br/>
              <Code variant={'outline'} colorScheme={'gray'}>
                PS: MernTodo{'>'} pnpm i</Code>
              <br/><br/>
              <Text as='b' color={['#98cd92', '#7fc2dd', '#c9abe7']}>
                For backend:
              </Text>
              <br/>
              <Code variant={'outline'} colorScheme={'gray'}>
                PS: MernTodo{'>'} cd backend <br/>
                PS: MernTodo{'>'} npm i <br/>
                PS: MernTodo{'>'} node index.js <br/>
              </Code>
              <br/><br/>
              <Text as='b' color={['#98cd92', '#7fc2dd', '#c9abe7']}>
                For frontend:
              </Text>
              <br/>
              <Code variant={'outline'} colorScheme={'gray'}>
                PS: MernTodo{'>'} cd frontend <br/>
                PS: MernTodo{'>'} pnpm i <br/>
                PS: MernTodo{'>'} pnpm run dev <br/>
                PS: MernTodo{'>'} pnpm run dev --host 0.0.0.0 //for running locally on wifi<br/>
              </Code>
              <br/><br/>
              <Text as='b' color={['#98cd92', '#7fc2dd', '#c9abe7']}>
                Setting up the database:&nbsp;
              </Text>
              <OrderedList>
                <ListItem>Go to MongoDB and create a cluster.</ListItem>
                <ListItem>Paste the MongoDB URI into your .env file.</ListItem>
              </OrderedList>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box fontSize='1.3rem' as='span' flex='1' textAlign='left' color={['#98cd92', '#7fc2dd', '#c9abe7']}>
                  API Details
                </Box>
                <AccordionIcon color={'gray.200'}/>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Highlight
                query='/todos'
                styles={{
                  px: '0.5rem', py: '0.1rem', rounded: 'lg', bg: ['#98cd92', '#7fc2dd', '#c9abe7'], fontWeight: 'bold'
                }}
              >
                MernTodo uses a CRUD API with the endpoint /todos. The MongoDB schema includes:
              </Highlight>
              <br/><br/>
              <UnorderedList>
                <ListItem>
                  <Text as='b' color={['#98cd92', '#7fc2dd', '#c9abe7']}>
                    title:&nbsp;
                  </Text>
                  A string representing the title of the todo
                </ListItem>
                <ListItem>
                  <Text as='b' color={['#98cd92', '#7fc2dd', '#c9abe7']}>
                    desc (description):
                  </Text>
                  A string containing the todo description
                </ListItem>
                <ListItem>
                  <Text as='b' color={['#98cd92', '#7fc2dd', '#c9abe7']}>
                    done:&nbsp;
                  </Text>
                  A boolean indicating whether the todo is checked off
                </ListItem>
                <ListItem>
                  <Text as='b' color={['#98cd92', '#7fc2dd', '#c9abe7']}>
                    _id:&nbsp;
                  </Text>
                  A unique identifier generated by MongoDB
                </ListItem>
              </UnorderedList>
              <br/>
              <Highlight
                query={['DELETE', 'PUT', '_id', '/todos/[id]']}
                styles={{
                  px: '0.5rem',
                  py: '0.1rem',
                  rounded: 'lg',
                  bg: ['#98cd92', '#7fc2dd', '#c9abe7'],
                  fontWeight: 'bold',
                  lineHeight: '2.5rem'
                }}
              >
                For DELETE and PUT methods, the _id must be included in the endpoint as /todos/[id].
              </Highlight>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>
    </VStack>
  </>)
}

export default Docs