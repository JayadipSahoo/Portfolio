import Me from "./imgs/man.png"

const AboutSec = () => {
  return (
    <>
      <div className="px-5 max-w-[1560px] mx-auto mt-20 py-10">
        {/* bottom */}
        <div className=" flex-wrap flex items-center justify-between">
          {/* left */}
          <div className="md:w-[48%] w-full">
            {/* title */}
            <div className=" mb-12">
              <div className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
                <div className="">
                  <span className="text-[#0FFF50]">#</span>about-me
                </div>
                <div className="line w-1/3 h-px bg-[#0FFF50]"></div>
              </div>
            </div>
            {/* disc */}
            <p className="text-[#ABB2BF] ">
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
                href="#"
                className=" duration-150 hover:bg-[#C778DD33] border border-[#0FFF50] px-4 py-2 text-white "
              >
                <button>Read more -{">"}</button>
              </a>
            </div>
          </div>
          {/* right */}
          <div className=" mx-auto">
            <img className="mx-auto" src={Me} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSec;
