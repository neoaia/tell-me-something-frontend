"use client";

import { Post } from "../types";

export const PostItem = ({
  id,
  recipient,
  content,
  dateCreated,
  signature,
}: Post) => {
  const dateObj = new Date(dateCreated);

  function handleClick(id: string) {
    console.log(`Post ${id} clicked!`);
  }
  return (
    <div
      onClick={() => handleClick(id)}
      className="text-md border-gray-300 font-sans border shadow-md flex flex-col justify-between rounded-2xl overflow-hidden p-7 max-w-lg max-h-65 h-65 gap-7 cursor-pointer hover:shadow-xl hover:-translate-y-1 transition"
    >
      <div>
        <div>
          <span className="text-gray-400 font-custom">hello </span>
          <span>{recipient},</span>
        </div>

        <div className="line-clamp-5">
          <span className="text-gray-400">let me tell you that </span>{" "}
          <span>{content}</span>
        </div>
      </div>

      <div className=" flex flex-row justify-between items-center text-sm">
        <div className="text-gray-400">{signature}</div>
        <div className="text-gray-400">{dateObj.toDateString()}</div>
      </div>
    </div>
  );
};
