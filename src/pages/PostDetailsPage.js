import React from "react";
import { Center, Button } from "@chakra-ui/react";
import CreateNewComment from "../components/comments/CreateNewComment";
import Post from "../components/posts/Post";
import { goToFeedPage } from "../routes/Coordinator";
import { useHistory, useParams } from "react-router-dom";
import useProtectedPage from "../hooks/useProtectedPage";
import useRequestData from "../hooks/useRequestData";
import { BASE_URL } from "../constants/requestsData";
import Comment from "../components/comments/Comment";

const PostDetailsPage = () => {
  useProtectedPage();

  const params = useParams();
  const postId = params.postId;
  const postDetailsGet = useRequestData([], `${BASE_URL}/posts/${postId}`);
  const postData = postDetailsGet.post;

  const history = useHistory();
  return (
    <Center flexDirection="column">
      <Button
        alignSelf="flex-start"
        m="0 20px"
        colorScheme="orange"
        variant="outline"
        onClick={() => goToFeedPage(history)}
      >
        Go back to feed
      </Button>
      {postData && (
        <Post
          key={postData.id}
          postId={postData.id}
          username={postData.username}
          title={postData.title}
          text={postData.text}
          votesCount={postData.votesCount}
          commentsCount={postData.commentsCount}
          userVoteDirection={postData.userVoteDirection}
        />
      )}
      <CreateNewComment />
      {/* Map para os comments */}
      {postDetailsGet &&
        postDetailsGet.post &&
        postDetailsGet.post.comments.map((comment) => {
          return (
            <Comment
              key={comment.id}
              commentId={comment.id}
              username={comment.username}
              text={comment.text}
              votesCount={comment.votesCount}
              userVoteDirection={comment.userVoteDirection}
            />
          );
        })}
    </Center>
  );
};

export default PostDetailsPage;
