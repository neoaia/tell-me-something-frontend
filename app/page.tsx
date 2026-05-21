import Link from "next/link";

const Home = () => {
  const navOptions = [
    { id: 1, title: "Go to Home", path: "/" },
    { id: 2, title: "Create a Post", path: "/create-post" },
    { id: 3, title: "Browse Posts", path: "/browse" },
    { id: 4, title: "View a Post", path: "/post" },
  ];

  return (
    <>
      <div className="mb-9">Landing Page</div>
      {navOptions.map((button) => (
        <Link
          className="p-2 bg-black text-white mr-2"
          key={button.id}
          href={button.path}
        >
          {button.title}
        </Link>
      ))}
    </>
  );
};

export default Home;
