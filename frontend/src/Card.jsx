import {Card, Text, Box, CardBody, Stack, StackDivider} from "@chakra-ui/react";
import PropTypes from "prop-types";
import {CheckCircleIcon} from "@chakra-ui/icons";

ShowCard.propTypes = {
  title: PropTypes.string, desc: PropTypes.string, done: PropTypes.bool,
}

function ShowCard(props) {
  const done = props.done
  const desc = props.desc
  const title = props.title
  let bg = ''
  let color = ''

  if (done) {
    bg = 'green.700'
    color = 'gray.200'
  } else {
    bg='gray.700'
    color = 'gray.200'
  }

  return (<>
    <Card
      w='20rem'
      h='10rem'
      bg={bg}
      color={color}
    >
      <CardBody>
        <Stack divider={<StackDivider/>} spacing='1'>
          <Box>
            <Text
              h={'2rem'}
              fontSize='1.3rem'
              overflowY='scroll'
              sx={{'scrollbarWidth': 'none'}}
            >
              {done ? <p><CheckCircleIcon mr='1rem' fontSize='2rem'/> <s>{title}</s></p> : <p>{title}</p>}
            </Text>
          </Box>
          <Box>
            <Text
              h={'5rem'}
              mt='4'
              mb='0'
              fontSize='1rem'
              overflowY='scroll'
              sx={{'scrollbarWidth': 'none'}}
            >
              {done ? <p><s>{desc}</s></p> : <p>{desc}</p>}
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  </>)
}

export default ShowCard;