import Discord from './imgs/linkedIn.jpg' 
import Email from './imgs/Email.png' 


const Contact = () => {
  return (
    <>
      <div className="px-5 max-w-[1560px] mx-auto mt-20 py-10" id='contact'>
        {/* top */}
        <div className="">
          {/* header */}
          <div className=" mb-10">
            <div data-aos='fade-right' data-aos-duration='500' className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
              <div className="">
                <span className="text-[#0FFF50]">#</span>contacts
              </div>
              <div className="line w-1/3 h-px bg-[#0fff50]"></div>
            </div>
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
            <div className="mt-7">
              <a
                href="/contact"
                className=" duration-150 hover:bg-[#10fff3d0] border border-[#0FFF50] px-4 py-2 text-white "
              >
                <button>Others -{">"}</button>
              </a>
            </div>
          </div>
          
          {/* right */}
          <div className=" mx-auto">
            {/* box */}
            <div  data-aos='fade-left' data-aos-duration='1500' className="border border-[#ABB2BF] p-4">
              <h2 className=" mb-4 text-white font-semibold">
                Message me here
              </h2>
              {/* get in touch */}
              <div className="">
                {/* links */}
                <div className="flex gap-1 items-center">
                  <img src={Discord} className='h-6 ml-1.5' alt="" />
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
      </div>
    </>
  );
};

export default Contact;
