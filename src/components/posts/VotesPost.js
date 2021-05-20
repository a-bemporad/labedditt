import React from "react";
import { IconButton, Flex, Text, useToast } from "@chakra-ui/react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { votePostRequest } from "../../services/PostRequests";

const VotesPost = ({ postId, votesCount, userVoteDirection }) => {
  const toast = useToast();

  const onClickPostVoteUp = () => {
    if (userVoteDirection === 1) {
      toast({
        position: "top",
        title: "Ooops",
        description: "You already upvoted this post!",
        status: "warning",
        duration: 1500,
        isClosable: true,
      });
    } else if (userVoteDirection === 0) {
      const body = { direction: 1 };
      votePostRequest(body, postId, votesCount);
    } else if (userVoteDirection === -1) {
      const body = { direction: 0 };
      votePostRequest(body, postId, votesCount);
    }
  };

  const onClickPostVoteDown = () => {
    if (userVoteDirection === 1) {
      const body = { direction: 0 };
      votePostRequest(body, postId);
    } else if (userVoteDirection === 0) {
      const body = { direction: -1 };
      votePostRequest(body, postId);
    } else if (userVoteDirection === -1) {
      toast({
        position: "top",
        title: "Ooops",
        description: "You already downvoted this post!",
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
        onClick={onClickPostVoteUp}
      />
      <Text alignSelf="center" px="3px">
        {votesCount}
      </Text>
      <IconButton
        size="xs"
        backgroundColor="white"
        fontSize="1.8em"
        icon={<IoIosArrowDown />}
        onClick={onClickPostVoteDown}
      />
    </Flex>
  );
};

export default VotesPost;
