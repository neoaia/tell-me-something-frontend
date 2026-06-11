import React from "react";
import Link from "next/link";

const Header = () => {
  const navOptions = [
    { id: 2, title: "Post", path: "/create-post" },
    { id: 3, title: "Browse", path: "/browse" },
  ];

  return (
    <header className="w-full bg-white flex justify-center py-4 fixed border-b border-gray-300 z-50">
      <div className="w-full max-w-4xl flex flex-row justify-between">
        <div className="flex justify-center items-center italic text-lg">
          Tell Me Something..
        </div>
        <div className="flex flex-row justify-evenly">
          {navOptions.map((button) => (
            <Link
              className="p-2 mr-3 text-gray-400 hover:text-black transition"
              key={button.id}
              href={button.path}
            >
              {button.title}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
