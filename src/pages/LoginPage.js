import React, { useState } from "react";
import {
  FormControl,
  Button,
  Center,
  Flex,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import Input from "../components/CustomInput";
import { useHistory } from "react-router-dom";
import { goToSignUpPage } from "../routes/Coordinator";
import useForm from "../hooks/useForm";
import { loginRequest } from "../services/UserRequests";
import useUnprotectedPage from "../hooks/useUnprotectedPage";

const LoginPage = ({ logged, setLogged }) => {
  useUnprotectedPage();

  const history = useHistory();
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };

  const [form, onChange, clear] = useForm({
    email: "",
    password: "",
  });

  const onSubmitForm = (event) => {
    event.preventDefault();
    loginRequest(form, clear, history, setLogged);
  };

  return (
    <Center>
      <Flex w="30%" p="1em" flexDirection="column" border="1px solid black">
        <form onSubmit={onSubmitForm}>
          <FormControl id="email" isRequired>
            <Input
              name="email"
              value={form.email}
              onChange={onChange}
              placeholder="Email"
              type="email"
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <InputGroup>
              <Input
                name="password"
                value={form.password}
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
            Log In
          </Button>

          <Button
            isFullWidth
            colorScheme="orange"
            variant="outline"
            onClick={() => goToSignUpPage(history)}
          >
            Sign Up
          </Button>
        </form>
      </Flex>
    </Center>
  );
};

export default LoginPage;
