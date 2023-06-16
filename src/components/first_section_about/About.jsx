import "./about.css";
import { useEffect } from "react";
import quote from "./imgs/quote.png"
import Man from "./imgs/me.png"
import Aos from "aos";
import 'aos/dist/aos.css'

const About = () => {
  useEffect (()=>{
    Aos.init({duration:1000})
  }, [])
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  return (
    <>
      <div className="px-10 max-w-[1560px] mx-auto min-h-screen pt-20 flex items-center justify-between flex-wrap">
        <div  className=" w-10/12 sm:w-8/12 mx-auto">
          <h1 className="font-semibold text-[32px] text-white mb-3">
           I am a <span className="text-[#0FFF50]">web designer</span> and{" "}
            <span className="text-[#0FFF50]">front-end developer</span>
          </h1>
          <p className="text-[#ABB2BF] my-6">
            I craft responsive websites where technologies meet creativity
          </p>
          <a href="#contact">
          <button className=" cybr-btn">
            Contact me!!<span aria-hidden>_</span>
                <span aria-hidden className="cybr-btn__glitch">Contact_</span>
 
          </button>
          </a>
        </div>
        <div className="mx-auto">
          <div  className="">
            <img src={Man} alt="" className="h-[600px]"  />
          </div>
          <div className="border flex items-center gap-2 ml-5 border-[#ABB2BF] p-2 text-[#ABB2BF]">
            <div className="w-4 h-4 bg-[#0FFF50]"></div>
            <div className="pl-8">
              Currently working on <span className="text-white">Full-Stack</span>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" className=" px-5 py-10">
        <img className="mx-auto" src={quote} alt="" />
      </div>
    </>
  );
};

export default About;
