import { PostItem } from "@/features/browse/components/Post";

const BrowsePage = () => {
  return (
    <>
      <div>Browse Page</div>
      <div className="gap-3 flex flex-col ">
        <PostItem
          recipient="Angelo"
          content="hoy putanginamo"
          dateCreated="2026-05-21T08:53:20.000Z"
        />
        <PostItem
          recipient="Angelo"
          content="hoy putanginamo"
          dateCreated="2026-05-21T08:53:20.000Z"
        />
        <PostItem
          recipient="Angelo"
          content="hoy putanginamo"
          dateCreated="2026-05-21T08:53:20.000Z"
        />
        <PostItem
          recipient="Angelo"
          content="hoy putanginamo"
          dateCreated="2026-05-21T08:53:20.000Z"
        />
      </div>
    </>
  );
};

export default BrowsePage;
