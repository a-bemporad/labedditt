import React from "react";
import { Box, Textarea, Button, useToast } from "@chakra-ui/react";
import useForm from "../../hooks/useForm";
import Input from "../CustomInput";
import { createPostRequest } from "../../services/PostRequests";

const CreateNewPost = () => {
  const [form, onChange, clear] = useForm({
    title: "",
    text: "",
  });

  const toast = useToast();
  const onSubmitForm = (event) => {
    event.preventDefault();
    console.log(form);
    createPostRequest(form, clear, toast);
  };

  return (
    <Box
      w="30vw"
      border="1px solid black"
      p="1em"
      display="flex"
      flexDirection="column"
    >
      <form onSubmit={onSubmitForm}>
        <Input
          placeholder="Type your post's title"
          name="title"
          value={form.title}
          onChange={onChange}
        ></Input>
        <Textarea
          name="text"
          value={form.text}
          onChange={onChange}
          placeholder="Write your post in here"
          variant="outline"
          borderColor="gray"
          _hover="none"
          _focus={{ border: "1px solid orange" }}
          isRequired
        ></Textarea>
        <Button type="submit" colorScheme="orange" variant="solid">
          Post
        </Button>
      </form>
    </Box>
  );
};

export default CreateNewPost;
