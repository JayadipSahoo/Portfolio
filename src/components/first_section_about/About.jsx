import "./about.css";

import React from "react";
import { useEffect ,useRef} from "react";

import Man from "./imgs/me.png"
import Aos from "aos";
import 'aos/dist/aos.css'
import Typed from 'typed.js';

 
const About = () => {
  useEffect (()=>{
    Aos.init({duration:1000})
  }, [])
  window.addEventListener('scroll', function() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (window.pageYOffset > 100) {
      scrollToTopBtn.style.display = 'block';
      scrollToTopBtn.style.opacity = '1';
    } else {
      scrollToTopBtn.style.display = 'none';
      scrollToTopBtn.style.opacity = '0';
    }
  });
  
  document.getElementById('scrollToTopBtn').addEventListener('click', function() {
    const scrollToTop = window.setInterval(function() {
      const pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 20); 
        window.clearInterval(scrollToTop);
      }
    }, 15); 
  });


  const el =useRef(null);
   React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [ 'Front-end Developer','Back-end Developer', 'Full Stack Developer'],
      typeSpeed: 50,
      backSpeed:30,
    });
  return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="px-10 max-w-[1560px] mx-auto min-h-screen pt-20 flex items-center justify-between flex-wrap">
        <div  className=" w-10/12 sm:w-8/12 mx-auto">
          <h1 className="font-semibold text-[32px] text-white mb-3 ">
           I am a <span  className ="text-[#0FFF50] ">web designer</span> and{" "}
            <span  className="text-[#0FFF50]" ref={el}>front-end developer</span>
          </h1>
          
          <p className="text-[#ABB2BF] my-6 tracking-in-expand-fwd">
              I craft responsive websites where technologies meet creativity.
          </p>
          <a href="#contact">
          <button className=" cybr-btn">
            Contact me!!<span aria-hidden>_</span>
                <span aria-hidden className="cybr-btn__glitch">Contact_</span>
 
          </button>
          </a>
        </div>
        <div className="mx-auto">
          <div  className="shake-horizontal">
            <img src={Man} alt="" className="h-[600px]"  />
          </div>
          <div className="border flex items-center gap-2 ml-5 border-[#ABB2BF] p-2 mt-2 mb-2 text-[#ABB2BF] box">
            <div className="w-4 h-4 bg-[#0FFF50]"></div>
            <div className="pl-8  shake-horizontal">
              Currently working on <span className="text-white">Full-Stack</span>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default About;
