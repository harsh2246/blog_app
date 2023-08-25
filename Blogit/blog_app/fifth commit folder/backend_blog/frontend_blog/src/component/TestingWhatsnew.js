import React from 'react';
import CommentDialog from './CommentDialog';
import { Card, CardHeader, Flex, Box, Heading, Text, CardBody, Image, CardFooter, Button } from '@chakra-ui/react';
import { FiExternalLink } from 'react-icons/fi';
import { addElipsis, addElipsistitle } from './utils/common-utils';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
export default function TestinsWhatsnew({ item, betterStyle }) {
  const boxShadowStyle = '0px 3px 8px rgba(0, 0, 0, 0.24)';
  const navigate=useNavigate()
  return (
     
    <Card maxW="md" boxShadow={boxShadowStyle} borderRadius="lg" style={{ width: 400, marginLeft: 20 }}>
      <CardHeader>
        <Flex justify="space-between" align="center" height="18">
          <Heading size="md" fontFamily="Montserrat, sans-serif" fontWeight="extrabold" color="CaptionText">
            {addElipsistitle(item.title)}
          </Heading>
        </Flex>
      </CardHeader>
      <CardBody boxShadow={boxShadowStyle}  >
        <Text>{addElipsis(item.post)}</Text>
        <Text>{addElipsis(item.content)}</Text>
      </CardBody>
      <Image
        h="200px"
        objectFit="cover"
        boxShadow={boxShadowStyle}
        src={item.image}
        alt="Chakra UI"
      />
      <CardFooter boxShadow={boxShadowStyle} justify="space-between" flexWrap="wrap">
        <CommentDialog item={item} />
        <Link to={`/random-whatsnew/${item._id}`}>
        <Button
          flex="1"
          variant="outline"
          colorScheme="blue"
          leftIcon={<FiExternalLink />}
        >Read more
        </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
