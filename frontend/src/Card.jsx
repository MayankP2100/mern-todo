import {Card, Text, Box, CardBody, Heading, Stack, StackDivider, Flex} from "@chakra-ui/react";
import PropTypes from "prop-types";

ShowCard.propTypes = {
  title: PropTypes.string, desc: PropTypes.string,
}

function ShowCard(props) {
  const title = props.title
  const desc = props.desc
  return (<>
    <Card w='20rem' h='10rem'>
      <CardBody>
        <Stack divider={<StackDivider/>} spacing='1'>
          <Box>
            <Text
              h={'2rem'}
              fontSize='1.3rem'
              overflowY={'scroll'}
              sx={{'scrollbar-width': 'none'}}
            >
              {title}
            </Text>
          </Box>
          <Box>
            <Text
              h={'5rem'}
              mt='4'
              mb='0'
              fontSize='1rem'
              overflowY={'scroll'}
              sx={{'scrollbar-width': 'none'}}
            >
              {desc}
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  </>)
}

export default ShowCard;