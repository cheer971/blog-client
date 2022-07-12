import React from "react";
import Post from "./Post/Post";
import useStyles from "./styles";

function PostsWrapper() {
  const classes = useStyles();
  return (
    <div>
      PostsWrapper
      <Post />
    </div>
  );
}

export default PostsWrapper;
