"use client";

import PostsGrid from "@/features/browse/components/PostsGrid";
import Search from "../../features/browse/components/Search";
import { useEffect, useState } from "react";
import { browseService } from "@/features/browse";

const BrowsePage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [posts, setPosts] = useState([]);

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const handleSubmit = () => {
    setSearchValue("");
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await browseService.getPosts();
      setPosts(response);
    };

    fetchPosts();
  }, []);

  return (
    <>
      <Search
        value={searchValue}
        onChange={handleSearchChange}
        onSubmit={handleSubmit}
      />
      {posts && posts.length > 0 ? (
        <PostsGrid posts={posts} />
      ) : (
        <div className="text-gray-500">No posts yet.</div>
      )}
    </>
  );
};

export default BrowsePage;
