import React from "react";
import PostItem from "./PostItem";
import { PostInterface } from "../types";

interface PostGridProps {
  posts: PostInterface[];
}

const PostsGrid = ({ posts }: PostGridProps) => {
  return (
    <div className="grid grid-cols-1 gap-6 col-auto md:grid-cols-2 max-w-4xl">
        {posts.map((post) => (
            <PostItem key={post.id} post={post}/>
        ))}
    </div>
  );
};

export default PostsGrid;
