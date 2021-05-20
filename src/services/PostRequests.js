import axios from "axios";
import { BASE_URL, token, headers } from "../constants/requestsData";

export const createPostRequest = (body, clear, toast) => {
  if (token) {
    axios
      .post(`${BASE_URL}/posts`, body, headers)
      .then((response) => {
        toast({
          position: "top",
          title: "Success!",
          description: "Your post was created!",
          status: "success",
          duration: 1300,
          isClosable: true,
        });
        clear();
      })
      .catch((error) => {
        toast({
          position: "top",
          title: "Ooops!",
          description: error.message,
          status: "error",
          duration: 1300,
          isClosable: true,
        });
      });
  }
};

export const votePostRequest = (body, postId, voteCount) => {
  axios
    .put(`${BASE_URL}/posts/${postId}/vote`, body, headers)
    .then((response) => {
      alert("ksjad");
    })
    .catch((error) => {
      alert(
        "ERROR Alert aqui só pra mostrar que o request está funcionando, porque não está atualizando automáticamente ainda"
      );
    });
};
