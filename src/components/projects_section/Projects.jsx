import Project_card from "../project_card/Project_card";
import first from "./imgs/Project1.png";
import second from "./imgs/project2.png";
import third from "./imgs/project3.png";

const Projects = () => {
  // date
  const projects = [
    {
      img: first,
      langs: ["html", "css", "javascript", "react", "tailwind css","Vite","OpenApi"],
      title: "Sum It Ai",
      disc: "Summarize Any Article or About Any Website",
    },
    {
      img: second,
      langs: ["html", "css", "javascript", "Tailwind","AOS","Vite"],
      title: "ShushiMan",
      disc: "Fully Responsive Animated Sushi Restuarant",
    },
    {
      img: third,
      langs: ["html", "css", "javascript", "Node.js", "Mongo","ExpressJS"],
      title: "Todo-List",
      disc: "Dynamic TodoList",
    },
  ];

  return (
    <>
      <div className="px-5 max-w-[1560px] mx-auto mt-20 py-10">
        {/* top */}
        <div className=" flex justify-between items-center gap-5">
          {/* left */}
          <div className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
            <div className="">
              <span className="text-[#0FFF50]">#</span>projects
            </div>
            <div className="line w-2/3 h-px bg-[#0FFF50]"></div>
          </div>
          {/* right */}
          <div className=" text-white font-medium">
            <a href="/projects">
              <span>View all ~~&gt;</span>
            </a>
          </div>
        </div>
        {/* bottom */}
        <div className="flex flex-wrap justify-between gap-4 my-12">
          {/* cards */}
          {projects.map(({ img, langs, title, disc }) => {
            return (
              <>
                <Project_card
                  img={img}
                  langs={langs}
                  title={title}
                  disc={disc}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
