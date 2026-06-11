"use client";

import { PostInterface } from "../types";
import { dateHandler } from "@/utils/dateHandler";

interface PostProps {
  post: PostInterface;
}

const PostItem = ({ post }: PostProps) => {

  function handleClick(id: string) {
    console.log(`Navigating to Post ${id}`);

    window.open(`/${id}`, "_blank", "noopener,noreferrer")
  }
  return (
    <div
      onClick={() => handleClick(post._id)}
      className="text-md border-gray-200 font-sans border shadow-sm flex flex-col justify-between rounded-2xl overflow-hidden p-7 max-w-lg max-h-65 h-65 gap-7 cursor-pointer hover:shadow-xl hover:-translate-y-1 transition"
    >
      <div>
        <div>
          <span className="text-gray-400 font-custom">hello </span>
          <span>{post.recipient},</span>
        </div>

        <div className="line-clamp-5">
          <span className="text-gray-400">let me tell you that </span>{" "}
          <span>{post.content}</span>
        </div>
      </div>

      <div className=" flex flex-row justify-between items-center text-sm">
        <div className="text-gray-400">{post.signature}</div>
        <div className="text-gray-400">{dateHandler(post.createdAt)}</div>
      </div>
    </div>
  );
};

export default PostItem;
