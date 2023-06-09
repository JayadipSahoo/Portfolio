import Me from "./imgs/man.png"

import Shapes from './imgs/shapes.png'
const skills = [
  {
    title: "Languages",
    languages: ["Python","Javascript","C++","Ansi C"],
  },
  {
    title: "Frameworks/Librarys",
    languages: [
      
      "Vite",
      "React",
      "React Router",
      "Particle.js",
      "Flask",
      "Node.js",
      "Express.js",
      "JQuery",
     

    ],
  },
  {
    title: "Tools",
    languages: [
      "VSCode",
      "Figma",
      "Adobe Photoshop",
      "Git",
      "Bootstrap",
      "Font Awesome",
      "Linux",
    ],
  },
  { title: "Databases", languages: ["SQLite", "Mongo"] },
 
  {
    title: "Other",
    languages: ["HTML", "CSS", "EJS", "SCSS","TailwindCSS","BulmaCSS"],
  },
  
];
const About_page = () => {
  return <>
  <div className="px-5 max-w-[1560px] mx-auto mt-20 py-10">
        {/* bottom */}
        <div className=" flex-wrap flex items-center justify-between">
          {/* left */}
          <div className="md:w-[48%] w-full">
            {/* title */}
            <div className=" mb-12">
              <div className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
                <div className="">
                  <span className="text-[#0FFF50]">/</span>about-me
                </div>
               
                <div className="line w-1/3 h-px bg-[#0FFF50]"></div>
              </div>
              <p className="text-[#ABB2BF]">Who am i?</p>
            </div>
            {/* disc */}
            <p  className="text-[#ABB2BF] ">
              Hola, I am Jayadip
              <br />
              <br />
              I’m a self-taught front-end developer based in Odisha,India. I
              can develop responsive websites from scratch and raise them into
              modern user-friendly web experiences.
              <br />
              <br />
              I love transforming my creativity and knowledge into beautiful and functional web pages that delight the users. Developing websites has been my passion for the past two years and I am always eager to learn new skills and technologies to improve my craft.

            </p>
            {/* button */}
            <div className="mt-7">
              <a
                href="https://www.linkedin.com/in/jayadip-sahoo-166165228"
                className=" duration-150 hover:bg-[#C778DD33] border border-[#0FFF50] px-4 py-2 text-white "
              >
                <button>Learn more -{">"}</button>
              </a>
            </div>
          </div>
          {/* right */}
          <div className=" mx-auto">
            <img className="mx-auto" src={Me} alt="" />
          </div>
        </div>
      </div>
     
  
    <>
      <div className="px-5 max-w-[1560px] mx-auto mt-20 py-10">
        {/* top */}
        <div className=" mb-10">
          <div className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
            <div className="">
              <span className="text-[#0FFF50]">#</span>skills
            </div>
            <div className="line w-1/3 h-px bg-[#0FFF50]"></div>
          </div>
        </div>
        {/* bottom */}
        <div className=" flex flex-wrap gap-10 justify-between items-center text-white">
          {/* left */}
         
          {/* right & mapping */}
          <div className=" mx-auto flex justify-around md:justify-end flex-wrap w-10/12 md:w-1/2 gap-4">
            {skills.map(({ title, languages }) => {
              return (
                <>
                  <div className="w-[90%] sm:w-[45%] lg:w-[30%] border border-[#ABB2BF]">
                    <div className=" p-2">
                      <h2 className=" font-semibold">{title}</h2>
                    </div>
                    <div className=" flex gap-2 border-t border-[#ABB2BF] flex-wrap p-2 text-[#0FFF50]">
                      {languages.map((e) => {
                        return <span key={""}>{e}</span>;
                      })}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="mx-auto">
            <img className=" w-full mx-auto" src={Shapes} alt="" />
          </div>
        </div>
      </div>
    </>

</>;
};
export default About_page;
