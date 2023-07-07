import './style.css'
const Project_card = ({ img, langs, title, disc ,link}) => {
  return (
    <>

      <div className="border mx-auto w-[90%] md:w-[48%] lg:w-[30%] border-[#ABB2BF]  p-0 box">
        {/* img */}
        <div className="">
          <img className=" w-full" src={img} alt="" />
        </div>
        {/* skills */}
        <div className="flex gap-2 flex-wrap p-2 border-y border-[#ABB2BF] ">
          {langs.map((e) => {
            return <span key={''} className=" text-[#ABB2BF]">{e}</span>;
          })}
        </div>
        {/* disc */}
        <div className=" p-4">
          <h2 className="text-[#FFFFFF] text-2xl font-medium">{title}</h2>
          <p className=" py-4 text-[#ABB2BF]">{disc}</p>
          {/* btns */}
          <div className="">
          <a href={link}>
            <button className=" py-2 px-4 text-white border border-[#0FFF50] hover:bg-[#0cffebc5] duration-150">
              Check {"<"}~{">"}
            </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project_card;
