import {Box, Grid, GridItem, Heading, VStack} from "@chakra-ui/react";
import ShowCard from "../Card.jsx";
import {useEffect, useState} from "react";
import axios from "axios";

function SeeTodos() {
  const url = 'http://192.168.0.119:3000/todos';
  const [data, setData] = useState([]);

  useEffect(() => {
    getTodo().then(() => {
      console.log('Data Fetched');
    });
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

  return (<>
    <VStack>
      <Heading
        bgGradient={['linear(to-tr, teal.300, yellow.400)', 'linear(to-t, blue.200, teal.500)', 'linear(to-b, orange.100, purple.300)',]}
        bgClip='text'
        color='transparent'
        p='4'
      >ALL TODOS 📃</Heading>
      <Box>
        <Grid
          p={4}
          templateColumns={{
            base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', xl: 'repeat(3, 1fr)', '2xl': 'repeat(4, 1fr)',
          }}
          sx={{'scrollbar-width': 'none'}}
          overflowY={'scroll'}
          h={'60vh'}
          gap='2rem'>
          {data.map((data, index) => {
            return <GridItem key={index}>
              <ShowCard title={data.title} desc={data.desc}></ShowCard>
            </GridItem>
          })}
        </Grid>
      </Box>
    </VStack>
  </>)
}

export default SeeTodos;