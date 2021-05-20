import React from "react";
import { Input as ChakraInput } from "@chakra-ui/react";

const Input = (props) => {
  return (
    <ChakraInput
      variant="outline"
      borderColor="gray"
      _hover="none"
      _focus={{ border: "1px solid orange" }}
      placeholder={props.placeholder}
      type={props.type}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
    ></ChakraInput>
  );
};

export default Input;
