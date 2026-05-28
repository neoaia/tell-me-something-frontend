"use client";

import PostsGrid from "@/features/browse/components/PostsGrid";
import Search from "../../features/browse/components/Search";
import { useEffect, useState } from "react";
import { browseService } from "@/features/browse";
import { handleAxiosError } from "@/utils/axiosErrorHandler";

const BrowsePage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchDisplayValue, setSearchDisplayValue] = useState("");
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const handleSubmit = async (searchValue: string) => {
    setIsDisabled(true);
    setIsLoading(true);

    try {
      const response = await browseService.getPosts(searchValue);

      setPosts(response);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      setIsDisabled(false);
      setSearchDisplayValue(searchValue);
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      setIsDisabled(true);
      setIsLoading(true);
      try {
        const response = await browseService.getPosts();

        setPosts(response);
      } catch (error) {
        console.log(handleAxiosError(error));
      } finally {
        setIsLoading(false);
        setIsDisabled(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <Search
        value={searchValue}
        onChange={handleSearchChange}
        onSubmit={handleSubmit}
        isDisabled={isDisabled}
      />

      {isLoading ? (
        searchValue ? (
          <>
            <div className="text-gray-500">
              Searching for &quot;{searchValue}&quot;
            </div>
            <div className="text-gray-500">Loading posts..</div>
          </>
        ) : (
          <div className="text-gray-500">Loading posts..</div>
        )
      ) : posts.length > 0 ? (
        <PostsGrid posts={posts} />
      ) : searchValue ? (
        <>
          <div className="text-gray-500">
            Searched for &quot;{searchDisplayValue}&quot;
          </div>
          <div className="text-gray-500">No posts yet.</div>
        </>
      ) : (
        <div className="text-gray-500">No posts yet.</div>
      )}
    </>
  );
};

export default BrowsePage;
