import { Post } from "../types";

export const PostItem = ({ recipient, content, dateCreated }: Post) => {
  const dateObj = new Date(dateCreated);
  return (
    <div className="border-black border max-w-xl flex flex-col rounded-2xl overflow-hidden">
      <div className="bg-gray-400 flex flex-row px-4 py-3">
        <div>To: </div>
        <div>{recipient}</div>
      </div>

      <div className="py-10 px-4">{content}</div>

      <div className="bg-gray-400 flex flex-row px-4 py-3">
        <div>Date posted: </div>
        <div>{dateObj.toLocaleDateString()}</div>
      </div>
    </div>
  );
};
