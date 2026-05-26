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
    <>
      <Search
        value={searchValue}
        onChange={handleSearchChange}
        onSubmit={handleSubmit}
      />
      <PostsGrid posts={PostsData} />
    </>
  );
};

export default BrowsePage;
