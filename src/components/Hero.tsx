import { Link } from "react-router-dom";

import hero_img from "../assets/hero-img.png";

const Hero = () => {
  return (
    <section
      className="flex justify-between items-center px-[24px] pt-[24px] gap-[10px] rounded-[48px]"
      style={{
        background: "linear-gradient(90deg, #3a1c0f, #5a2a14)",
      }}
    >
      <div className=" flex flex-col lg:max-w-[600px]">
        <h1 className="text-[64px] text-[#ffffff] leading-[120%] tracking-[-2%] font-[600] mb-[24px]">
          Hire Verified Interns with Ease
        </h1>
        <p className="text-[22px] text-[#c7c7c7] leading-[150%] mb-[32px]">
          A smart platform that connects you to skilled interns who fits your
          business needs.
        </p>
        <div className="mb-[30px]">
          <Link to="/post-job">
            <span className="border-2 border-solid border-[var(--primary-orange)] bg-[#ffffff] rounded-[10px] p-[16px] text-[var(--primary-orange)]">
              Post Job
            </span>
          </Link>
        </div>
      </div>
      <div className="h-full">
        <img src={hero_img} alt="Professional woman holding a laptop" />
      </div>
    </section>
  );
};
export default Hero;
