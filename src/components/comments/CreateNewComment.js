import React from "react";
import { Box, Textarea, Button, useToast } from "@chakra-ui/react";
import useForm from "../../hooks/useForm";
import { createCommentRequest } from "../../services/CommentRequests";
import { useParams } from "react-router-dom";

const CreateNewComment = () => {
  const [form, onChange, clear] = useForm({
    text: "",
  });

  const toast = useToast();

  const params = useParams();

  const onSubmitForm = (event) => {
    event.preventDefault();
    console.log(form);
    const postId = params.postId;
    createCommentRequest(postId, form, clear, toast);
  };
  return (
    <Box
      w="30vw"
      border="1px solid black"
      p="1em"
      display="flex"
      flexDirection="column"
      alignSelf="center"
    >
      <form onSubmit={onSubmitForm}>
        <Textarea
          name="text"
          value={form.text}
          onChange={onChange}
          placeholder="Write your comment in here"
          variant="outline"
          borderColor="gray"
          _hover="none"
          _focus={{ border: "1px solid orange" }}
          isRequired
        ></Textarea>
        <Button type="submit" colorScheme="orange" variant="solid">
          Comment
        </Button>
      </form>
    </Box>
  );
};

export default CreateNewComment;
