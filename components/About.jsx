import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <>
      <div id="heroid">
        <div className="bg-[#006269] ">
          <div className=" ">
          <h1 className=" md:hidden lg:hidden text-[16px] pt-10 pl-10 text-[#FFFFFF]">ABOUT</h1>

            <div className="flex ml-8 md:ml-20  md:flex gap-3  ">

              <h1 className="hidden md:block lg:block text-[16px] pt-10 md:pt-20 md:pr-20 md:text-[24px] text-[#FFFFFF]">ABOUT</h1>

              <div className="pl-[9px] ">
                <p className="w-[80%] text-[32px] pt-7 md:pt-20 md:w-[500px]  font-prociono md:text-[50px] text-[#FFFFFF] leading-none">
                  India&apos;s Premier AI-Driven College Counseling Portal
                </p>
                <p className="w-[80%] mt-12 text-[14px] md:mt-9 md:w-[500px] md:text-[16px] text-[#FFFFFF] font-light ">
                  At Go Edu, we harness the power of AI to transform the college
                  admissions process. Our innovative platform offers
                  personalized guidance, ensuring each student finds their ideal
                  college match. We analyze academic records, interests, and
                  career goals to provide tailored recommendations.
                </p>
                <p className="w-[80%] mt-4 pb-16 text-[14px] md:mt-9 md:w-[500px] md:text-[16px] text-[#FFFFFF] font-light ">
                  With Goedu, students receive comprehensive support throughout
                  their college journey. Our expert counselors offer invaluable
                  advice, from application tips to interview preparation. Join
                  thousands of successful students who have found their perfect
                  college fit with Goedu!
                </p>
              </div>

              <div className="hidden lg:block absolute right-0">
                <Image
                  className="mt-10 lg:opacity-50 xl:opacity-100 "
                  src="/hand.svg"
                  alt="bg image"
                  width={700}
                  height={400}
                  
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
