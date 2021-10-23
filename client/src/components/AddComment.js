import React, { useState } from 'react';
import {
  useDisclosure,
  Button,
  HStack,
  Input,
  FormControl,
} from '@chakra-ui/react';
import { Collapse } from '@chakra-ui/transition';
import { AddIcon } from '@chakra-ui/icons';

function AddComment({ bg, comment_bg }) {
  //Collapse variables
  const { isOpen, onToggle } = useDisclosure();

  const [comment, setComment] = useState('');
  // const [commentsArray, setCommentsArray] = useState(comments)

  //Form Handlers
  const handleInputChange = e => {
    setComment(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    //Empty the field(s)
    setComment('');
  };

  return (
    <>
      <Button
        size="xs"
        width="max-content"
        bg={bg}
        variant="solid"
        onClick={onToggle}
      >
        Add Comment <AddIcon ms={2} />
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <FormControl width="80%" mt={4}>
          <HStack>
            <Input
              id="newComment"
              type="text"
              border="1px"
              placeholder="Enter comment"
              p={2}
              value={comment}
              bg={comment_bg}
              rounded="md"
              shadow="md"
              fontSize="70%"
              onChange={handleInputChange}
            />
            <Button
              for="newComment"
              type="submit"
              ms={2}
              fontSize="70%"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </HStack>
        </FormControl>
      </Collapse>
    </>
  );
}

export default AddComment;
