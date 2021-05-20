import React, { useState } from "react";
import {
  FormControl,
  Button,
  Center,
  InputGroup,
  InputRightElement,
  Flex,
} from "@chakra-ui/react";
import Input from "../components/CustomInput";
import { useHistory } from "react-router-dom";
import useForm from "../hooks/useForm";
import { signUpRequest } from "../services/UserRequests";
import useUnprotectedPage from "../hooks/useUnprotectedPage";

const SignUpPage = ({ logged, setLogged }) => {
  useUnprotectedPage();

  const history = useHistory();
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };

  const [form, onChange, clear] = useForm({
    email: "",
    username: "",
    password: "",
  });
  const onSubmitForm = (event) => {
    event.preventDefault();
    signUpRequest(form, clear, history, setLogged);
  };

  return (
    <Center>
      <Flex w="30%" p="1em" flexDirection="column" border="1px solid black">
        <form onSubmit={onSubmitForm}>
          <FormControl id="usernameSU" isRequired>
            <Input
              name="username"
              value={form.username}
              onChange={onChange}
              placeholder="Name"
              type="text"
            />
          </FormControl>
          <FormControl id="emailSU" isRequired>
            <Input
              name="email"
              value={form.email}
              onChange={onChange}
              placeholder="Email"
              type="email"
            />
          </FormControl>
          <FormControl id="passwordSU" isRequired>
            <InputGroup>
              <Input
                name="password"
                value={form.value}
                onChange={onChange}
                placeholder="Password"
                type={show ? "text" : "password"}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Button
            isFullWidth
            type="submit"
            colorScheme="orange"
            variant="solid"
          >
            Sign Up
          </Button>
        </form>
      </Flex>
    </Center>
  );
};

export default SignUpPage;
