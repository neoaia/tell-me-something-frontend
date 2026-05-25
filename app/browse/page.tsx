import PostsGrid from "@/features/browse/components/PostsGrid";
import PostsData from "../../features/browse/data/posts.json";

const BrowsePage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <PostsGrid posts={PostsData} />
    </div>
  );
};

export default BrowsePage;
