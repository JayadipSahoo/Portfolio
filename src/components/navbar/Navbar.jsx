import Logo from './imgs/js.png'
import Close from './imgs/close.png'
import { NavLink } from "react-router-dom";
import { useState} from "react";

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    
  return (
    <>

      <div className="mb-[20px] pt-0 z-30 fixed top-0 left-0 right-0 bg-[#282C33]">
        <div className=" px-10 max-w-[1560px] mx-auto flex items-center justify-between pt-6 my-2">
          <div className="left flex gap-2 items-center font-bold text-white text-base">
            {/* logo */}
            <NavLink to='/'>
            <div className="img">
              <img src={Logo} className='w-12 h-15' alt="" />
            </div>
            </NavLink>
          Jayadip Sahoo
          </div>
          <div className="right flex items-center">
            <div className={`menu duration-300 flex-col  justify-center md:flex-row flex fixed w-full ${!toggle ? `right-[-100%] top-0 bottom-0` : `right-0 top-0 bottom-0`} bg-[#282C33] md:static`}>
              
              <NavLink to="/">
                <li className="text-[#ABB2BF] text-[32px] my-4 md:my-auto md:text-base list-none mx-4 hover:border-b-2 border-[#0FFF50]-500 font-medium">
                  <span className="text-[#0FFF50] ">#</span>home
                </li>
              </NavLink>
              <NavLink to="/projects">
                <li className="text-[#ABB2BF] text-[32px] my-4 md:my-auto md:text-base list-none mx-4 hover:border-b-2 border-green-500 font-medium">
                  <span className="text-[#0FFF50] font-medium">#</span>work
                </li>
              </NavLink>
              <NavLink to="/about">
                <li className="text-[#ABB2BF] text-[32px] my-4 md:my-auto md:text-base list-none mx-4 hover:border-b-2 border-green-500 font-medium">
                  <span className="text-[#0FFF50] font-medium">#</span>about-me
                </li>
              </NavLink>
              <NavLink to="/contact">
                <li className="text-[#ABB2BF] text-[32px] my-4 md:my-auto md:text-base list-none mx-4 hover:border-b-2 border-green-500 font-medium">
                  <span className="text-[#0FFF50] font-medium">#</span>contacts
                </li>
              </NavLink>
              <div onClick={()=>setToggle(false)} className="close absolute block md:hidden right-3 top-3">
                <img src={Close} alt="" />
              </div>
            </div>
            {/* CLOSE&OPEN btns */}
            <div onClick={()=>setToggle(true)} className="">
                <div className="open block  md:hidden w-8 ">
                    <div className="w-full h-[1px] my-2 rounded-r-3xl bg-[#D9D9D9]"></div>
                    <div className="w-full h-[1px] my-2 rounded-r-3xl bg-[#D9D9D9]"></div>
                    <div className="w-full h-[1px] my-2 rounded-r-3xl bg-[#D9D9D9]"></div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
