import React, { useState, useRef } from 'react';
import { useDisclosure, Button, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogCloseButton, AlertDialogBody, AlertDialogFooter, Input, Text } from '@chakra-ui/react';
import { BiChat } from 'react-icons/bi';
import { Avatar, Card, CardBody } from '@chakra-ui/react';
import axios from 'axios';

function CommentDialog({ item }) {
  const cancelRef = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [comments, setComments] = useState(item.comments_users);
  const [newComment, setNewComment] = useState('');

  const postComment = async () => {
    const username = 'harsh'; // Update with the actual username
    try {
      const response = await axios.post('http://localhost:5000/mangal/comments', { _id: item._id, username: username, comment: newComment });
      if (response.status === 201) {
        console.log('Comment added successfully');
        setNewComment('');
      } else {
        console.error('Error adding comment');
      }
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  const handleAddComment = () => {
    const newCommentObj = { username: 'harsh', comment: newComment }; // Update with the actual username
    setComments([...comments, newCommentObj]);
    setNewComment('');
    postComment();
    onClose();
  };

  return (
    <>
      <Button flex="1" variant="ghost" onClick={onOpen} leftIcon={<BiChat />}>
        View Comments
      </Button>
      <AlertDialog leastDestructiveRef={cancelRef} onClose={onClose} isOpen={isOpen} isCentered>
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader>Comments</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody style={{ overflowY: 'scroll', maxHeight: '400px' }}>
            {comments.map((comment, index) => (
              <div style={{ display: 'flex', marginBottom: '30px', alignItems: 'flex-start' }}>
                <div style={{ position: 'relative', marginRight: '10px' }}>
                  <Avatar name={comment.username} src="https://bit.ly/tioluwani-kolawole" />
                  <div style={{ position: 'absolute', top: '50%', left: '100%', width: 0, height: 0, borderTop: '8px solid transparent', borderBottom: '8px solid transparent', borderLeft: '8px solid #EAFAF1', transform: 'translateY(-50%)' }} />
                </div>
                <Card p={0} style={{ backgroundColor: '#EAFAF1', padding: 0, width: '80%' }}>
                  <CardBody p={3}>
                    <Text>{comment.comment}</Text>
                  </CardBody>
                </Card>
              </div>
            ))}
            <Input placeholder="Add a comment..." value={newComment} onChange={(e) => setNewComment(e.target.value)} mt={3} />
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button onClick={onClose}>Close</Button>
            <Button colorScheme="blue" ml={3} onClick={handleAddComment}>
              Post Comment
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

export default CommentDialog;
