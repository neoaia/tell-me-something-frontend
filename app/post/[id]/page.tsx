"use client";

import { useEffect, useState } from "react";
import { PostInterface } from "../../../features/browse/types";
import { useParams } from "next/navigation";
import { browseService } from "@/features/browse";
import { dateHandler } from "@/utils/dateHandler";

const PostPage = () => {
  const params = useParams();
  const postId = params.id as string;

  const [post, setPost] = useState<PostInterface>();
  const [notFound, setNotFound] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    console.log("Post: ", postId);

    const fetchPost = async () => {
      try {
        const response = await browseService.getPostById(postId);

        console.log(response);

        if (response.status === 404) {
          setNotFound(true);
          return;
        }

        setPost(response.data.post);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [postId]);

  const renderPost = () => {
    if (isLoading) {
      return <div className="mb-6 text-gray-400">Loading..</div>;
    }

    return notFound ? (
      <div className="mb-6 text-gray-400">Post not found</div>
    ) : (
      <div>
        <div className="mb-6 text-gray-400">To: {post?.recipient}</div>
        <div className="mb-6">{post?.content}</div>
        <div className="text-gray-400">From: {post?.signature}</div>
        <div className="text-gray-400">
          Posted on: {dateHandler(post?.createdAt as string)}
        </div>
      </div>
    );
  };

  return renderPost();
};

export default PostPage;
