import {
  Card,
  CardBody,
  Container,
  Divider,
  Heading,
  HStack,
  Image,
  Link,
  Text,
  VStack
} from "@chakra-ui/react";

function About() {
  return (<>
    <VStack w='100%' mt='1rem'>
      <Heading
        sx={{
          filter: 'drop-shadow(3px 3px rgba(0, 0, 0, 0.3))'
        }}
        textAlign='center'
        bgGradient={['linear(to-tr, teal.300, yellow.400)', 'linear(to-t, blue.200, teal.500)', 'linear(to-b, orange.100, purple.300)',]}
        bgClip='text'
        color='transparent'
      >About Me 👤</Heading>
      <Divider></Divider>
      <Container>
        <Card borderRadius='lg' bg={'gray.700'} color={'gray.200'}>
          <CardBody>
            <Image
              w={'100%'}
              objectFit='fill'
              m='auto'
              src='https://avatars.githubusercontent.com/u/74498800'
              borderRadius='lg'
            />
            <Divider my={1}></Divider>
            <Heading
              my='0.5rem'
              size={'lg'}
              bgGradient={['linear(to-tr, teal.300, yellow.400)', 'linear(to-t, blue.200, teal.500)', 'linear(to-b, orange.100, purple.300)',]}
              bgClip='text'
              color='transparent'
              sx={{
                filter: 'drop-shadow(0 4px rgba(0, 0, 0, 0.3))'
              }}
            >Dev - Mayank Pal</Heading>
            <Text fontSize={'0.8rem'} color='gray.400'>Kalyani, West Bengal</Text>
            <Text fontSize={'0.7rem'} color='gray.400'>Studying Data Science in B.Tech-CSE</Text>
            <Divider my={2}></Divider>
            <Text>Some of my projects are on my
              <Link href={'https://github.com/MayankP2100'} color={['#98cd92', '#7fc2dd', '#c9abe7']}> github.</Link>
            </Text>
            <Divider my={1}></Divider>
            <Text>How to reach me:</Text>
            <HStack justifyContent={'space-around'} mt={'0.2rem'}>
              <Link
                display='flex'
                justifyContent='center'
                p='0.5rem'
                borderRadius='lg'
                border='2px'
                borderColor={['#98cd92', '#7fc2dd', '#c9abe7']}
                w='full'
                href='https://www.instagram.com/mayank._.2100/'
                isExternal
              >
                <Image w='2rem' src='../public/instagram.png'></Image>
                Instagram
              </Link>
              <Link
                display='flex'
                justifyContent='center'
                p='0.5rem'
                borderRadius='lg'
                border='2px'
                borderColor={['#98cd92', '#7fc2dd', '#c9abe7']}
                w='full'
                href='https://x.com/MayP2100/'
                isExternal
              >
                <Image w='1.5rem' src='../public/twitter.png'></Image>
                Twitter/X
              </Link>
            </HStack>
          </CardBody>
        </Card>
      </Container>
    </VStack>
  </>)
}

export default About;