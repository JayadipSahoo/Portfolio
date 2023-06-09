import LinkedIn from './imgs/linkedIn.jpg' 
import Email from './imgs/Email.png' 
import Discord from './imgs/discord.png' 
import Telegram from './imgs/telegram.png' 
import Instagram from './imgs/instagram.png' 


const Contact_page = () => {
    return <>
     <div className="px-5 max-w-[1560px] mx-auto mt-20 py-40 ">
        {/* top */}
        <div className="">
          {/* header */}
          <div className=" mb-10">
            <div className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
              <div className="">
                <span className="text-[#0FFF50]">/</span>contacts
              </div>
                <div className="line w-1/3 h-px bg-[#0FFF50]"></div>
                </div>
            <p className="text-[#ABB2BF]">Who am i?</p>
          </div>
        </div>
        {/* bottom */}
        <div className=" flex items-start flex-wrap gap-10 justify-between">
          {/* left */}
          <div className="left w-full md:w-1/2">
            <p className=" text-[#ABB2BF]">
              I’m interested in freelance opportunities. However, if you have
              other request or question, don’t hesitate to contact me
            </p>
          </div>
          {/* right */}
          <div className=" mx-auto">
            {/* box */}
            <div className="border border-[#ABB2BF] p-4">
              <h2 className=" mb-4 text-white font-semibold">
                Message me here
              </h2>
              {/* get in touch */}
              <div className="">
                {/* links */}
                <div className="flex gap-1 items-center">
                  <img src={LinkedIn} className='h-6 ml-1.5' alt="" />
                  <span className="text-[#ABB2BF]" ><a href='https://www.linkedin.com/in/jayadip-sahoo-166165228'>Jayadip Sahoo</a></span>
                </div>
                <div className="flex gap-1 items-center">
                  <img src={Email}  alt="" />
                  <span className="text-[#ABB2BF]"><a href="mailto:jayadip360@gmail.com">jayadip360@gmail.com</a></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" text-white font-light mt-[68px] flex items-center gap-2  text-[26px] mb-[48px]">
        <span className=" text-[#0FFF50]">#</span>
        <span>Other-Media</span>
        <div className="line w-1/5 h-px bg-[#0FFF50]"></div>
    </div>
    {/*Buttonss*/}
    <div className='gap m-5 flex gap-10'>
    <div className="flex gap-1 items-center">
                  <img src={Telegram} className='h-6 ml-1.5' alt="" />
                  <span className="text-[#ABB2BF]" ><a href='https://www.linkedin.com/in/jayadip-sahoo-166165228'>Jayadip Sahoo</a></span>
                </div>

    <div className="flex gap-1 items-center ">
                  <img src={Instagram} className='h-6 ml-1.5' alt="" />
                  <span className="text-[#ABB2BF]" ><a href='https://instagram.com/jds_infinite?igshid=ZGUzMzM3NWJiOQ=='>Jayadip Sahoo</a></span>
                </div>

    <div className="flex gap-1 items-center">
                  <img src={Discord} className='h-6 ml-1.5' alt="" />
                  <span className="text-[#ABB2BF]" ><a href="discord://discordapp.com/users/JayadipSahooo#3881">Jayadip Sahoo</a></span>
                </div>

    </div>
      </div>
   
    
    </>;
  };
  export default Contact_page;
  