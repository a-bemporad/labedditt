import React from "react";
import { Box, Text, Heading } from "@chakra-ui/react";
import CommentCount from "../comments/CommentCount";
import VotesPost from "./VotesPost";

const Post = ({
  postId,
  username,
  title,
  text,
  votesCount,
  commentsCount,
  userVoteDirection,
  onClick,
}) => {
  return (
    <Box align="center" m="3px">
      <Box
        w="30vw"
        display="flex"
        border="1px solid black"
        borderRadius="4px 4px 0 0"
        p="2em"
        flexDirection="column"
        onClick={onClick}
        backgroundColor="#f5dbbd"
      >
        <Heading as="h3" size="md" textAlign="left">
          {username}
        </Heading>
        <Text w="100%" textAlign="justify">
          <strong>{title} </strong>
          {text}
        </Text>
      </Box>
      <Box
        w="30vw"
        display="flex"
        border="1px solid black"
        borderRadius="0 0 4px 4px"
        p="0.5em 0.8em"
      >
        <VotesPost
          justify="flex-start"
          postId={postId}
          votesCount={votesCount}
          userVoteDirection={userVoteDirection}
        />
        <CommentCount commentsCount={commentsCount} />
      </Box>
    </Box>
  );
};

export default Post;
