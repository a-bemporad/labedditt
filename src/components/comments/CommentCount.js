import React from "react";
import { Flex, Text } from "@chakra-ui/react";

const CommentCount = ({ commentsCount }) => {
  return (
    <Flex w="50%" justify="flex-end" px="3px">
      <Text alignSelf="center">{commentsCount} comments</Text>
    </Flex>
  );
};

export default CommentCount;
