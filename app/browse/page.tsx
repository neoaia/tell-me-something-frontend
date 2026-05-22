import { PostItem } from "@/features/browse/components/Post";

const BrowsePage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="grid grid-cols-1 gap-6 col-auto md:grid-cols-2 max-w-4xl">
        <PostItem
          id="1"
          recipient="ronah"
          content="miss na kita baby ko sana magkita n tayo. sorry kung malayo ako miss na kita baby ko sana magkita n tayo. sorry kung malayo ako miss na kita baby ko sana magkita n tayo. sorry kmiss na kita baby ko sana magkita n tayo. sorry kung malayo ako miss na kita baby ko sana miss na kita baby ko sana magkita n tayo. sorry kung malayo ako"
          dateCreated="2026-05-21T08:53:20.000Z"
          signature="angelo"
        />
        <PostItem
          id="2"
          recipient="Neo"
          content="ambaho mo bai"
          dateCreated="2026-05-21T08:53:20.000Z"
          signature="coween"
        />
        <PostItem
          id="3"
          recipient="David"
          content="may crush ako sayo"
          dateCreated="2026-05-21T08:53:20.000Z"
          signature="ur one and only"
        />
        <PostItem
          id="4"
          recipient="Allan"
          content="ako ay isang batang mabantut"
          dateCreated="2026-05-21T08:53:20.000Z"
          signature="bnidik"
        />
        <PostItem
          id="5"
          recipient="ronah"
          content="miss na kita baby ko sana magkita n tayo. sorry kung malayo ako"
          dateCreated="2026-05-21T08:53:20.000Z"
          signature="angelo"
        />
        <PostItem
          id="5"
          recipient="Neo"
          content="ambaho mo bai"
          dateCreated="2026-05-21T08:53:20.000Z"
          signature="coween"
        />
        <PostItem
          id="6"
          recipient="David"
          content="may crush ako sayo"
          dateCreated="2026-05-21T08:53:20.000Z"
          signature="ur one and only"
        />
        <PostItem
          id="7"
          recipient="Allan"
          content="ako ay isang batang mabantut"
          dateCreated="2026-05-21T08:53:20.000Z"
          signature="bnidik"
        />
      </div>
    </div>
  );
};

export default BrowsePage;
