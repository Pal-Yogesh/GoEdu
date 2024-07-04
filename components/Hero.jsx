import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <>
      {/* mobile ui */}
      <div id="example" className="lg:hidden">
        <Image
          className="h-[667px] w-full bg-cover object-cover "
          src="/bgmobile.svg"
          alt="bg image"
          width={100}
          height={100}
        />
        <div className="absolute inset-0 top-[380px]"> 
          <h1 className="px-10 w-[342px] h-[117px] text-[32px] text-[#333333] font-prociono">
            No. 1 AI College Counseling
          </h1>
          <p className="px-10 w-[342px] h-[60px] text-[12px] text-black ">
            Go Edu, India&apos;s No. 1 AI counseling portal, revolutionizes
            college admissions with personalized guidance and expert support.
            Our AI-driven platform ensures students find their perfect college
            match effortlessly.
          </p>
          <div className="mt-12 mx-10 w-[163px] h-[37px] bg-[#006269] rounded  flex">
            <button className="text-[12px] text-[#FFFFFF] my-2 mx-3 ">
            <Link href="/AiForm">Take This First Step  </Link>  
            </button>
            <Image
              src="/arrow.svg"
              alt="arrow"
              width={15}
              height={14}
              className=""
            />
          </div>
        </div>
      </div>

      {/* laptop ui */}
      <div className="hidden lg:block bg-[#FFFFFF]">
        <div>
          <div className="">
            <Image
              className="h-[100vh] w-full bg-cover object-cover "
              src="/back.svg"
              alt="bg image"
              width={100}
              height={100}
            />

            <div className="mt-20 mx-20 absolute inset-y-0 top-[195px]  ">
              <p className="w-[443px] h-[165px] font-prociono text-[50px] text-[#333333] leading-[45px]">
                No. 1 AI College Counseling <br /> in India
              </p>

              <p className=" text-[16px] text-[#203535] w-[470px] h-[96px]">
                Go Edu, India&apos;s No. 1 AI counseling portal, revolutionizes
                college admissions with personalized guidance and expert
                support. Our AI-driven platform ensures students find their
                perfect college match effortlessly.
              </p>

              <div className="mt-9 w-[201px] h-[47px] bg-[#006269] rounded  flex">
                <button className="text-[15px] text-[#FFFFFF] my-3 mx-3 ">
                <Link href="/AiForm">Take This First Step  </Link>  
                </button>
                <Image
                  src="/arrow.svg"
                  alt="arrow"
                  width={15}
                  height={14}
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
