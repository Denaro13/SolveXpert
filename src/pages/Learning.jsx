import { Link, Outlet, useParams } from "react-router-dom";
import topics from "../assets/utils/Topics";
import { contents } from "../assets/utils/data";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const Learning = () => {
  const [sidebar, setSidebar] = useState(false);
  const { topic } = useParams();

  const subtopics = contents
    .filter((content) => content.topic === topic)
    .map((subtopic) => subtopic.subtopics);

  if (!topic) {
    return (
      <div>
        <header className="bg-black h-10 pl-4 text-white flex items-center gap-6 overflow-y-hidden">
          {topics.map((topic) => {
            const { id, name, path } = topic;
            return (
              <Link key={id} to={path} className="uppercase ">
                {name}
              </Link>
            );
          })}
        </header>
        <div className="w-[90%] mx-auto mt-10">
          <h1 className="text-3xl mb-4">Learning Center</h1>
          <p>
            The learning center contains resources created by our experts to
            help you understand the concepts of mathematics.
          </p>
        </div>
      </div>
    );
  }
  return (
    <div>
      <header className="bg-black h-10 pl-4 text-white flex items-center gap-6 overflow-y-hidden">
        <button onClick={() => setSidebar(!sidebar)} className="md:hidden">
          <RxHamburgerMenu size={30} />
        </button>
        {topics.map((topic) => {
          const { id, name, path } = topic;
          return (
            <Link key={id} to={path} className="uppercase ">
              {name}
            </Link>
          );
        })}
      </header>
      <div className="flex">
        <div
          className={
            sidebar
              ? " mt-4 pl-4 flex flex-col gap-4 capitalize text-xl w-[17rem] bg-slate-100 h-[calc(100vh-6.5rem)] shadow-lg"
              : "hidden md:flex md:flex-col gap-4 capitalize mt-4 pl-4 text-xl w-[17rem] bg-slate-100 h-[calc(100vh-6.5rem)] shadow-lg z-10 md:z-0"
          }
        >
          {subtopics[0].map((topic) => {
            const { id, subtopic } = topic;
            return (
              <Link key={id} to="/">
                {subtopic}
              </Link>
            );
          })}
        </div>
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Learning;
