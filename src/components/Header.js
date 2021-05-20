import React from "react";
import { Flex, Image, Button, ButtonGroup } from "@chakra-ui/react";
import Logo from "../images/Logo.png";
import { useHistory } from "react-router-dom";
import { goToLoginPage } from "../routes/Coordinator";

const Header = ({ logged, setLogged }) => {
  const history = useHistory();
  const onClickLog = () => {
    if (logged === "Log Out") {
      localStorage.removeItem("token");
      setLogged("Log In");
      goToLoginPage(history);
    } else {
      goToLoginPage(history);
    }
  };

  return (
    <Flex align="center" display="flex" justify="space-between" m="10px 20px">
      <Image src={Logo} h="80px" />
      <ButtonGroup>
        <Button colorScheme="orange" variant="outline" onClick={onClickLog}>
          {logged}
        </Button>
        {/* <Button colorScheme="orange" variant="solid">
          Another button
        </Button> */}
      </ButtonGroup>
    </Flex>
  );
};

export default Header;
