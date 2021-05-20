import React from "react";
import { IconButton, Flex, Text, useToast } from "@chakra-ui/react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { voteCommentRequest } from "../../services/CommentRequests";
import { useParams } from "react-router-dom";

const VotesComment = ({ votesCount, commentId, userVoteDirection }) => {
  const params = useParams();
  const postId = params.postId;
  const toast = useToast();

  const onClickCommentVoteUp = () => {
    if (userVoteDirection === 1) {
      toast({
        position: "top",
        title: "Ooops",
        description: "You already upvoted this comment!",
        status: "warning",
        duration: 1500,
        isClosable: true,
      });
    } else if (userVoteDirection === 0) {
      const body = { direction: 1 };
      voteCommentRequest(body, postId, commentId);
    } else if (userVoteDirection === -1) {
      const body = { direction: 0 };
      voteCommentRequest(body, postId, commentId);
    }
  };

  const onClickCommentVoteDown = () => {
    if (userVoteDirection === 1) {
      const body = { direction: 0 };
      voteCommentRequest(body, postId, commentId);
    } else if (userVoteDirection === 0) {
      const body = { direction: -1 };
      voteCommentRequest(body, postId, commentId);
    } else if (userVoteDirection === -1) {
      toast({
        position: "top",
        title: "Ooops",
        description: "You already downvoted this comment!",
        status: "warning",
        duration: 1500,
        isClosable: true,
      });
    }
  };
  return (
    <Flex w="50%" justify="flex-start" px="3px">
      <IconButton
        size="xs"
        backgroundColor="white"
        fontSize="1.8em"
        icon={<IoIosArrowUp />}
        onClick={onClickCommentVoteUp}
      />
      <Text alignSelf="center" px="3px">
        {votesCount}
      </Text>
      <IconButton
        size="xs"
        backgroundColor="white"
        fontSize="1.8em"
        icon={<IoIosArrowDown />}
        onClick={onClickCommentVoteDown}
      />
    </Flex>
  );
};

export default VotesComment;
