import Project_card from "../components/project_card/Project_card";
import first from "../components/projects_section/imgs/Project1.png";
import second from "../components/projects_section/imgs/project2.png";
import third from './projects/cropstop.png';
import fourth from "../components/projects_section/imgs/project3.png";
import fifth from './projects/terror.png';
import sixth from './projects/Contact card.png';
import seventh from './projects/meme.png';
import eigth from './projects/survey.png';
import ninth from './projects/dice.png';
import tenth from './projects/hover.png';


 const mainProjects = [
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
    langs: ["html", "css", "javascript", "Saas", "Gsap"],
    title: "Crop Stop",
    disc: "A stop for farmers, to help them analyse the climate and soil for better harvest",
  },
  {
    img: fourth,
    langs: ["html", "css", "javascript", "Node.js", "Mongo","ExpressJS"],
    title: "Todo-List",
    disc: "Dynamic TodoList",
  },

  
];

const smallProjects = [

  {
    img: fifth,
    langs: ["html", "css", "javascript", "Parallax","Vite"],
    title: "Terror Talks",
    disc: "Parrallax Website",
  },
  {
    img: sixth,
    langs: ["html", "css", "javascript", "React","Vite"],
    title: "Contact Card",
    disc: "Dynamic card for work purposes",
  },
  {
    img: seventh,
    langs: ["html", "css", "javascript", "React","Vite","MemeAPI"],
    title: "Meme Generator",
    disc: "Meme Generator using the prpos property of react",
  },
  {
    img: eigth,
    langs: ["html", "css","Basic","Freecode Camp"],
    title: "Survey Form",
    disc: "General form for any work purposes",
  },
  {
    img: ninth,
    langs: ["html", "css", "javascript"],
    title: "Dice Game",
    disc: "Simple project with basic javascript functions",
  },
  {
    img: tenth,
    langs: ["html", "css", "javascript", "Saas"],
    title: "3D card hover",
    disc: "When you hover on the cards the characters come out of the card",
  },
  
];

const Project_page = () => {
  return <>
    <div className=" min-h pb-[50px] pt-[114px] px-5 max-w-[1560px] mx-auto">
  {/* top / title */}
  <div className="">
    {/* projects */}
    <div className=" text-white font-bold text-[32px]">
        <span className=" text-[#0FFF50]">/</span>
        <span>projects</span>
    </div>
    {/* list */}
    <div className=" text-white mt-[14px]">List of my projects</div>
  </div>
  {/* completed tasks */}
  <div className="">
     { /* title */}
    <div className=" text-white font-medium mt-[68px] text-[32px] mb-[48px]">
        <span className=" text-[#0FFF50]">#</span>
        <span>completed-apps</span>
    </div>
    <div className="flex flex-wrap justify-between gap-10 my-12">
          {/* cards */}
          {mainProjects.map(({ img, langs, title, disc }) => {
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


        <div className=" text-white font-medium mt-[68px] text-[32px] mb-[48px]">
        <span className=" text-[#0FFF50]">#</span>
        <span>small-apps</span>
    </div>
    <div className="flex flex-wrap justify-between gap-10 my-12">
          {/* cards */}
          {smallProjects.map(({ img, langs, title, disc }) => {
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
</div>
  </>;
};
export default Project_page;
