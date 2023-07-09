import Shapes from './imgs/shapes.png'
import'./style.css'
import MouseTrail from '../mouse/mouse' 
const Skills = () => {
  const skills = [
    {
      title: "Languages",
      languages: ["Python","Javascript","C++","Ansi C"],
    },
    {
      title: "Frameworks",
      languages: [
        
        "Vite",
        "React",
        "React Router",
        "Particle.js",
        "Flask",
        "Node.js",
        "Express.js",
        "JQuery",
        "SCSS","TailwindCSS",
        "BulmaCSS"

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
      languages: ["HTML", "CSS", "EJS", "SCSS","TailwindCSS"],
    },
    
  ];
  return (
    <>
      <div className="px-5 max-w-[1560px] mx-auto mt-20 py-10">
        {/* top */}
        <div className=" mb-10">
          <div data-aos="fade-right" data-aos-duration="500" className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
            <div className="">
              <span className="text-[#0FFF50]">#</span>skills
            </div>
            <div className="line w-2/3 h-px bg-[#0FFF50]"></div>
          </div>
        </div>
        {/* bottom */}
        <div className=" flex flex-wrap gap-10 justify-between items-center text-white">
          {/* left */}
          <div data-aos="fade-up-right"  className="mx-auto">
            <img className=" w-full mx-auto" src={Shapes} alt="" />
          </div>
          {/* right & mapping */}
          <div data-aos="fade-up-left"  className=" mx-auto flex justify-around md:justify-end flex-wrap w-10/12 md:w-1/2 gap-9">
            {skills.map(({ title, languages }) => {
              return (
                <>
                  <div className="w-[90%] sm:w-[45%] lg:w-[30%] border border-[#ABB2BF] box">
                    <div className=" p-2">
                      <h2 className=" font-semibold">{title}</h2>
                    </div>
                    <div className=" flex gap-2 border-t border-[#ABB2BF] flex-wrap p-2 text-[#0FFF50]">
                      {languages.map((e) => {
                        return <span key={''}>{e}</span>;
                      })}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
      <MouseTrail/>
    </>
  );
};

export default Skills;
