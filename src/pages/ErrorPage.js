import { Center, Image } from "@chakra-ui/react";
import React from "react";
import cat404 from "../images/404.jpg";

const ErrorPage = () => {
  return (
    <Center>
      <Image
        borderRadius="70px"
        src={cat404}
        alt="The page you requested could not be found."
      />
    </Center>
  );
};

export default ErrorPage;
