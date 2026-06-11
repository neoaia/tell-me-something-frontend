"use client";

import PostsGrid from "@/features/browse/components/PostsGrid";
import Search from "../../features/browse/components/Search";
import { useEffect, useState } from "react";
import { browseService } from "@/features/browse";
import Button from "@/components/Button";

const BrowsePage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchDisplayValue, setSearchDisplayValue] = useState("");
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleRetry = async () => {
    if (searchDisplayValue) {
      handleSubmit(searchDisplayValue);
    }

    try {
      const response = await browseService.getPosts();

      setPosts(response);
    } catch (error) {
      setIsError(true);

      const apiError = error as Error;
      setErrorMessage(apiError.message);
    } finally {
      setIsLoading(false);
      setIsDisabled(false);
    }
  };

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
      setIsError(true);

      const apiError = error as Error;
      setErrorMessage(apiError.message);
    } finally {
      setIsLoading(false);
      setIsDisabled(false);
      setSearchDisplayValue(searchValue);
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await browseService.getPosts();

        setPosts(response);
      } catch (error) {
        setIsError(true);

        const apiError = error as Error;
        setErrorMessage(apiError.message);
      } finally {
        setIsLoading(false);
        setIsDisabled(false);
      }
    };

    fetchPosts();
  }, []);

  const renderContent = () => {
    if (isLoading) {
      return (
        <>
          {searchValue && (
            <div className="text-gray-500">
              Searching for &quot;{searchValue}&quot;
            </div>
          )}
          <div className="text-gray-500">Loading posts..</div>
        </>
      );
    }

    if (isError) {
      return (
        <>
          <div className="text-gray-500">{errorMessage}</div>
          <Button label="Retry" disabled={isDisabled} onClick={handleRetry} />
        </>
      );
    }

    const hasPosts = posts.length > 0;

    if (searchDisplayValue) {
      return (
        <>
          {hasPosts ? (
            <>
              <div className="text-gray-500 ml-2 mb-6">
                Searched for &quot;{searchDisplayValue}&quot;
              </div>
              <PostsGrid posts={posts} />
            </>
          ) : (
            <div className="text-gray-500 ml-2 ">No posts yet.</div>
          )}
        </>
      );
    }

    return hasPosts ? (
      <PostsGrid posts={posts} />
    ) : (
      <div className="text-gray-500 ml-2 ">No posts yet.</div>
    );
  };

  return (
    <>
      <div className="font-bold text-7xl mb-7">Browse</div>
      <Search
        value={searchValue}
        onChange={handleSearchChange}
        onSubmit={handleSubmit}
        isDisabled={isDisabled}
      />

      {renderContent()}
    </>
  );
};

export default BrowsePage;
