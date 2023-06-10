import Logo from './imgs/js.png'
import discord from './imgs/Discord.png'
import github from './imgs/Github.png'


const Footer = () => {
  return (
    <>
      {/* line */}
      <div className="w-full h-px bg-[#ABB2BF] mt-20 mb-8"></div>
      {/* footer */}
      <div className="px-10 max-w-[1560px] mx-auto">
        {/* top */}
        <div className="flex justify-between gap-y-10 flex-wrap">
          {/* left */}
          <div className="mx-auto md:mx-0">
            <div className=" flex items-center gap-8 mb-3 ">
              {/* logo */}
              <div className=" flex gap-2 items-center text-2xl text-white font-bold">
                <img src={Logo} className='h-10' alt="" />
                <span>Jayadip Sahoo</span>
              </div>
              {/* email */}
              <span className="text-[#ABB2BF] text-[12px] ">jayadip360@gmail.com</span>
            </div>
            {/* disc */}
            <div className="text-[#ffffff]">
              <p>Web designer and front-end developer based in Odisha,India</p>
            </div>
          </div>
          {/* right */}
          <div className=" mx-auto md:mx-0">
            {/* title */}
            <h2 className=" text-white text-2xl font-medium mb-3">Media</h2>
            {/* media */}
            <div className="flex items-center gap-2">
              <a href="discord://discordapp.com/users/JayadipSahooo#3881">
                <img src={discord} alt="" />
              </a>
              <a href="https://github.com/JayadipSahoo">
                <img src={github} alt="" />
              </a>
            </div>
          </div>
        </div>
        {/* bottom */}
        <div className="text-center text-[#ABB2BF] pb-8 mt-12">
          © Copyright 2023. Made by JDS
        </div>
      </div>
    </>
  );
};

export default Footer;
