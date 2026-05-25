"use client";

import { PostInterface } from "../types";

interface PostProps {
  post: PostInterface;
}

const PostItem = ({ post }: PostProps) => {
  const dateObj = new Date(post.dateCreated);

  function handleClick(id: string) {
    console.log(`Post ${id} clicked!`);
  }
  return (
    <div
      onClick={() => handleClick(post.id)}
      className="text-md border-gray-300 font-sans border shadow-md flex flex-col justify-between rounded-2xl overflow-hidden p-7 max-w-lg max-h-65 h-65 gap-7 cursor-pointer hover:shadow-xl hover:-translate-y-1 transition"
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
        <div className="text-gray-400">{dateObj.toDateString()}</div>
      </div>
    </div>
  );
};

export default PostItem;
