import axios from "axios";
import { BASE_URL } from "../constants/requestsData";
import { goToFeedPage } from "../routes/Coordinator";

export const loginRequest = (body, clear, history, setLogged) => {
  axios
    .post(`${BASE_URL}/login`, body)
    .then((response) => {
      console.log("entrou no then", response.data);
      localStorage.setItem("token", response.data.token);
      clear();
      goToFeedPage(history);
      setLogged("Log Out");
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export const signUpRequest = (body, clear, history, setLogged) => {
  axios
    .post(`${BASE_URL}/signup`, body)
    .then((response) => {
      console.log("entrou no then", response.data);
      localStorage.setItem("token", response.data.token);
      clear();
      goToFeedPage(history);
      setLogged("Log Out");
    })
    .catch((error) => {
      console.log(error.message);
    });
};
