import Link from "next/link";

const Home = () => {
  const navOptions = [ 
    { id: 2, title: "Create a Post", path: "/create-post" },
    { id: 3, title: "Browse Posts", path: "/browse" }, 
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
