import React, { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Router from "./routes/Router";
import { token } from "./constants/requestsData";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  const [logged, setLogged] = useState(token ? "Log Out" : "Log In");

  return (
    <ChakraProvider>
      <BrowserRouter>
        <Header logged={logged} setLogged={setLogged} />
        <Router logged={logged} setLogged={setLogged} />
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
