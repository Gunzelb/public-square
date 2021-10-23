//React
import React from 'react';

//Chakra
import { DeleteIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';

//Mutation
import { DELETE_POST } from '../utils/mutations';
import { useMutation } from '@apollo/client';

const DeleteBtn = ({post_id, onClose}) => {

    const [removePost, { error }] = useMutation(DELETE_POST);

    const deletePostHandler = async (e) =>{
        e.preventDefault();

    try {
      const payload = {
            postId: post_id 
      };
      console.log(payload);
      const { data } = await removePost({
        variables: { ...payload },
      });
      console.log(data);

    } catch (err) {
      console.log(err);
      console.log(error);
    }
    onClose();
    }

    return(
        <IconButton
        variant="ghost"
        colorScheme="pink"
        icon={<DeleteIcon />}
        onClick={(e) => {
          deletePostHandler(e, post_id);
        }}
        size="lg"
      />
    )
}

export default DeleteBtn;