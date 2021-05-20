import React from "react";
import { Box, Text, Heading } from "@chakra-ui/react";
import VotesComment from "./VotesComment";

const Comment = ({
  commentId,
  username,
  text,
  votesCount,
  userVoteDirection,
}) => {
  return (
    <Box align="center" m="3px">
      <Box
        w="30vw"
        display="flex"
        border="1px solid black"
        p="0.5em 3em"
        flexDirection="column"
        borderRadius="4px 4px 0 0"
      >
        <Heading as="h4" size="sm" textAlign="left">
          {username}
        </Heading>
        <Text textAlign="justify">{text}</Text>
      </Box>
      <Box
        w="30vw"
        display="flex"
        border="1px solid black"
        p="0.5em"
        borderRadius="0 0 4px 4px"
      >
        <VotesComment
          justify="flex-start"
          votesCount={votesCount}
          commentId={commentId}
          userVoteDirection={userVoteDirection}
        />
      </Box>
    </Box>
  );
};

export default Comment;
