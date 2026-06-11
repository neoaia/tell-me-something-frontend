"use client";

import { useEffect, useState } from "react";
import { PostInterface } from "../../features/browse/types";
import { useParams } from "next/navigation";
import { browseService } from "@/features/browse";
import { dateHandler } from "@/utils/dateHandler";

const PostPage = () => {
  const params = useParams();
  const postId = params.post as string;

  const [post, setPost] = useState<PostInterface>();

  useEffect(() => {
    console.log(postId);

    const fetchPost = async () => {
      try {
        const response = await browseService.getPostById(postId);

        console.log(response);
        setPost(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPost();
  }, [postId]);

  return (
    <div>
      <div className="mb-6 text-gray-400">To: {post?.recipient}</div>
      <div className="mb-6">{post?.content}</div>
      <div className="text-gray-400">From: {post?.signature}</div>
      <div className="text-gray-400">Posted on: {dateHandler(post?.createdAt as string)}</div>
    </div>
  );
};

export default PostPage;
