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
    link:"https://jayadipsahoo.github.io/CropStop/"
  },
  {
    img: fourth,
    langs: ["html", "css", "javascript", "Node.js", "Mongo","ExpressJS"],
    title: "Todo-List",
    disc: "Dynamic TodoList",
    link:""
  },

  
];

const smallProjects = [

  {
    img: fifth,
    langs: ["html", "css", "javascript", "Parallax","Vite"],
    title: "Terror Talks",
    disc: "Parrallax Website",
    link:'https://github.com/JayadipSahoo/Terror-Talk'
  },
  {
    img: sixth,
    langs: ["html", "css", "javascript", "React","Vite"],
    title: "Contact Card",
    disc: "Dynamic card for work purposes",
    link:'https://github.com/JayadipSahoo/Contact__card'
  },
  {
    img: seventh,
    langs: ["html", "css", "javascript", "React","Vite","MemeAPI"],
    title: "Meme Generator",
    disc: "Meme Generator using the prpos property of react",
    link:'meme-geno.netlify.app/'
  },
  {
    img: eigth,
    langs: ["html", "css","Basic","Freecode Camp"],
    title: "Survey Form",
    disc: "General form for any work purposes",
    link:'https://github.com/JayadipSahoo/SurveyForm'
  },
  {
    img: ninth,
    langs: ["html", "css", "javascript"],
    title: "Dice Game",
    disc: "Simple project with basic javascript functions",
    link:'https://github.com/JayadipSahoo/DiceGame'
  },
  {
    img: tenth,
    langs: ["html", "css", "javascript", "Saas"],
    title: "3D card hover",
    disc: "When you hover on the cards the characters come out of the card",
    link:'https://github.com/JayadipSahoo/SchoolHome'
  },
  
];

const Project_page = () => {
  return <>
    <div className=" min-h pb-[50px] mt-20 py-10 pt-[114px] px-5 max-w-[1560px] mx-auto">
  {/* top / title */}
  <div className="">
    {/* projects */}
    <div className=" text-white font-medium flex items-center gap-2 text-[32px]">
        <span className=" text-[#0FFF50]">/</span>
        <span>projects</span>
        <div className="line w-1/3 h-px bg-[#0FFF50]"></div>
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
          {mainProjects.map(({ img, langs, title, disc,link }) => {
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


        <div className=" text-white font-medium mt-[68px] text-[32px] mb-[48px]">
        <span className=" text-[#0FFF50]">#</span>
        <span>small-apps</span>
    </div>
    <div className="flex flex-wrap justify-between gap-10 my-12">
          {/* cards */}
          {smallProjects.map(({ img, langs, title, disc ,link}) => {
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
</div>
  </>;
};
export default Project_page;
