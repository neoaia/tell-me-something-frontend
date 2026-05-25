"use client";

import PostsGrid from "@/features/browse/components/PostsGrid";
import PostsData from "../../features/browse/data/posts.json";
import Search from "../../features/browse/components/Search";
import { useState } from "react";

const BrowsePage = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const handleSubmit = () => {
    setSearchValue("");
  };

  return (
    <div className="flex flex-col justify-center items-center mx-auto min-h-screen max-w-4xl">
      <Search
        value={searchValue}
        onChange={handleSearchChange}
        onSubmit={handleSubmit}
      />
      <PostsGrid posts={PostsData} />
    </div>
  );
};

export default BrowsePage;
