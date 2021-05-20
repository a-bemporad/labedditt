import axios from "axios";
import { BASE_URL, headers } from "../constants/requestsData";

export const createCommentRequest = (postId, body, clear, toast) => {
  axios
    .post(`${BASE_URL}/posts/${postId}/comment`, body, headers)
    .then((response) => {
      clear();
      toast({
        position: "top",
        title: "Success!",
        description: "Your comment was created!",
        status: "success",
        duration: 1500,
        isClosable: true,
      });
    })
    .catch((error) => {
      toast({
        position: "top",
        title: "There was a problem",
        description: error.message,
        status: "error",
        duration: 1500,
        isClosable: true,
      });
    });
};

export const voteCommentRequest = (body, postId, commentId) => {
  axios
    .put(`${BASE_URL}/posts/${postId}/comment/${commentId}/vote`, body, headers)
    .then((response) => {
      alert(
        "THEN Alert aqui só pra mostrar que o request está funcionando, porque não está atualizando automáticamente ainda"
      );
    })
    .catch((error) => {
      alert(
        "ERROR Alert aqui só pra mostrar que o request está funcionando, porque não está atualizando automáticamente ainda"
      );
    });
};
