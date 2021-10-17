import React, { useState } from "react"
import { useDisclosure, Button, HStack, Input, FormControl } from "@chakra-ui/react"
import { Collapse } from "@chakra-ui/transition"
import { AddIcon } from "@chakra-ui/icons"




function AddComment({ bg, comment_bg, comments }) {
  
  //Collapse variables
  const { isOpen, onToggle } = useDisclosure()

  const [comment, setComment] = useState("");

  //Form Handlers
  const handleInputChange = (e) => { setComment(e.target.value) }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(comment);

    console.log(comments);
    
    const newComment = {name: "Timmy Turner", message: comment} 
    comments.push(newComment);

    console.log("Comment added!");
    console.log(comments);

    //Empty the field(s)
    setComment("")
  }

  return (
    <>
      <Button size="xs" width="max-content" bg={bg} variant="solid" onClick={onToggle}>
        Add Comment <AddIcon ms={2} />
      </Button>
      <Collapse in={isOpen} animateOpacity >
        <FormControl width="80%" mt={4}>
          <HStack>
            <Input id="newComment" type="text" border="1px" placeholder="Enter comment" p={2} value={comment}
              bg={comment_bg} rounded="md" shadow="md" fontSize="70%" onChange={handleInputChange}/>
            <Button for="newComment" type="submit" ms={2} fontSize="70%" onClick={handleSubmit} >
              Submit
            </Button>
          </HStack>
        </FormControl>
      </Collapse>
    </>
  )
}

export default AddComment;