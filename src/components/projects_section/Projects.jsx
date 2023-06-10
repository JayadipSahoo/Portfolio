import Project_card from "../project_card/Project_card";
import first from "./imgs/Project1.png";
import second from "./imgs/project2.png";
import third from "./imgs/cropstop.png";

const Projects = () => {
  // date
  const projects = [
    {
      img: first,
      langs: ["html", "css", "javascript", "react", "tailwind css","Vite","OpenApi"],
      title: "Sum It Ai",
      disc: "Summarize Any Article or About Any Website",
      link:"https://sum-it-ai.netlify.app"
    },
    {
      img: second,
      langs: ["html", "css", "javascript", "Tailwind","AOS","Vite"],
      title: "ShushiMan",
      disc: "Fully Responsive Animated Sushi Restuarant",
      link:"https://chinese-restuarant.netlify.app"
    },
    {
      img: third,
      langs: ["html", "css", "javascript", "Saas", "Gsap"],
      title: "Crop Stop",
      disc: "A stop for farmers, to help them analyse the climate and soil for better harvest",
      link:"https://jayadipsahoo.github.io/CropStop"
    },
  ];

  return (
    <>
      <div className="px-5 max-w-[1560px] mx-auto mt-20 py-10">
        {/* top */}
        <div className=" flex justify-between items-center gap-5">
          {/* left */}
          <div data-aos="fade-right" data-aos-duration="500" className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
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
        <div data-aos="zoom-in"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1500" className="flex flex-wrap justify-between gap-4 my-12">
          {/* cards */}
          {projects.map(({ img, langs, title, disc,link }) => {
            return (
              <>
                <Project_card
                  img={img}
                  langs={langs}
                  title={title}
                  disc={disc}
                  link={link}
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
