import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { Box, IconButton, Link } from "@chakra-ui/react";
import NextLink from "next/Link";
import React from "react";
import { useDeletePostMutation, useMeQuery } from "../generated/graphql";

interface EditDeleteButtonProps {
  id: number;
  creatorId: number;
}

export const EditDeleteButton: React.FC<EditDeleteButtonProps> = ({
  id,
  creatorId,
}) => {
  const [, deletePost] = useDeletePostMutation();
  const [{ data: meData }] = useMeQuery();

  if (meData?.me?.id !== creatorId) {
    return null;
  }

  return (
    <Box>
      <NextLink href="/post/edit/[id]" as={`/post/edit/${id}`}>
        <IconButton
          as={Link}
          icon={<EditIcon />}
          aria-label="Edit Post"
          onClick={() => {}}
        />
      </NextLink>
      <IconButton
        icon={<DeleteIcon />}
        aria-label="Delete Post"
        onClick={() => {
          deletePost({ id });
        }}
      />
    </Box>
  );
};
