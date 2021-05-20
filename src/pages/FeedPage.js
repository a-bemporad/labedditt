import React from "react";
import { Center } from "@chakra-ui/react";
import CreateNewPost from "../components/posts/CreateNewPost";
import useProtectedPage from "../hooks/useProtectedPage";
import { goToPostDetailsPage } from "../routes/Coordinator";
import { useHistory } from "react-router-dom";
import Post from "../components/posts/Post";
import { BASE_URL, token } from "../constants/requestsData";
import useRequestData from "../hooks/useRequestData";

const FeedPage = () => {
  useProtectedPage();
  const headers = {
    headers: { Authorization: token },
  };

  const getPostsRequest = useRequestData([], `${BASE_URL}/posts`, headers);
  const postsResponse = getPostsRequest[0].posts;
  console.log(postsResponse);

  const history = useHistory();

  const onClickPost = (postId) => {
    goToPostDetailsPage(history, postId);
  };

  return (
    <Center flexDirection="column">
      <CreateNewPost />
      {postsResponse &&
        postsResponse.map((post) => {
          return (
            <Post
              key={post.id}
              postId={post.id}
              username={post.username}
              title={post.title}
              text={post.text}
              votesCount={post.votesCount}
              commentsCount={post.commentsCount}
              userVoteDirection={post.userVoteDirection}
              onClick={() => onClickPost(post.id)}
            />
          );
        })}
    </Center>
  );
};

export default FeedPage;
