"use client";
import Image from "next/image";
import React, { useState } from "react";
import Data2 from "./Data2";

const Work = () => {
  const [step, setStep] = useState(1);
  const [iconClicked, setIconClicked] = useState(false);

  const handleNext = () => {
    if (step < Data2.length) {
      setStep(step + 1);
      setIconClicked(true);
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <>
      {/* laptop ui */}
      <div id="featuresid" className="hidden md:block  h-[85%] w-auto ">
        <section>
          <div className="flex">
            <div className="md:w-[65%] lg:w-[70%] md:h-[700px] lg:h-[580px] bg-[#FAFAFA]">
              <div className="mt-[70px] flex justify-center items-center space-x-20">
                <p className=" md:pb-32 md:px-3 lg:pb-7 text-[14px]  text-[#333333] ">
                  WHY CHOOSE US
                </p>

                <h1 className="text-[50px] text-[#333333] font-prociono">
                  India&apos;s 1st AI College
                </h1>
              </div>
              <h1 className=" hidden lg:block text-[50px] text-[#0099A3] text-center font-prociono leading-none">
                &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
                Counselling Portal!
              </h1>
              <h1 className="hidden lg:hidden md:block text-[50px] text-[#0099A3] text-center font-prociono ">
                &nbsp; &nbsp; &nbsp; &nbsp; Counselling Portal!
              </h1>

              {/* <div className="mt-16 md:px-5 lg:pr-2 space-x-2 flex justify-center items-center">
                {Data2.map((item, index) => (
                  <React.Fragment key={item.id}>
                    <Image
                      src="/dot1.svg"
                      alt="timeline"
                      width={step === item.id ? 40 : 28}
                      height={step === item.id ? 40 : 28}
                    />
                    {index < Data2.length - 1 && (
                      <div className="bg-[#BFD9DA] h-[2px] w-[72px]"></div>
                    )}
                  </React.Fragment>
                ))}
              </div> */}

              <div className=" relative mt-16 md:mr-20  flex justify-between items-center ">
                {Data2.map((item, index) => (
                  <div
                    key={item.id}
                    className="flex flex-col items-center mx-4  "
                  >
                    <Image
                      src="/dot1.svg"
                      alt="timeline"
                      width={step === item.id ? 42 : 30}
                      height={step === item.id ? 42 : 30}
                      onClick={() => setStep(item.id)}
                      className=" cursor-pointer mb-5 "
                    />
                    {index < Data2.length - 1 && (
                      <div className="absolute md:pl-[80px] md:my-[15px]  lg:pl-[120px] lg:my-[17px] ">
                        <div className="bg-[#BFD9DA] h-[2px] md:w-[30px] lg:w-[46px]   "></div>
                      </div>
                    )}
                    <p
                      className={`mt-4 md:text-[10px] lg:text-[14px] lg:px-[9px] ${
                        step === item.id ? "text-[#006269]" : "text-[#20353560]"
                      }`}
                    >
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>

              {/* <div className=" mt-4 flex justify-center items-center md:px-1 md:space-x-4 lg:space-x-10 lg:px-20">
                {Data2.map((item) => (
                  <p
                    key={item.id}
                    className={`md:text-[12px] lg:text-[14px] ${
                      step === item.id ? "text-[#006269]" : "text-[#203535]"
                    }`}
                  >
                    {item.title}
                  </p>
                ))}
              </div> */}
            </div>

            <div className="bg-[#DFEEEF] md:w-[35%] lg:w-[30%] md:[520px] lg:h-[580px]">
              <div className="mx-12 flex justify-center items-center mt-[75px] w-[170px] h-[40px] text-[14px] text-[#0099A3] border border-[#0099A3] rounded-3xl">
                <ul className="custom-list">
                  <li className="px-1 relative">
                    &nbsp;&nbsp;&nbsp;&nbsp; 2-3 Business Days
                  </li>
                </ul>
              </div>

              <div className="md:w-[220px] md:h-[60px] lg:w-[250px] lg:h-[70px]  mx-12 mt-6">
                <p className="text-[14px] text-[#0099A3]">
                  STEP {step.toString().padStart(2, "0")}
                </p>
                <h1 className="mt-4 text-[32px] text-[#203535]">
                  {Data2[step - 1].title}
                </h1>
                <p className="mt-4 text-[17px] text-[#333333]">
                  {Data2[step - 1].description}
                </p>
              </div>
              <div className="flex space-x-4 md:pt-[400px] md:pl-10 lg:pt-80 lg:pl-10">
                <Image
                  className="rounded-lg cursor-pointer"
                  src={iconClicked ? "/left2.svg" : "/lefticon.svg"}
                  height={38}
                  width={38}
                  alt="lefticon"
                  onClick={handlePrev}
                />

                <Image
                  className="cursor-pointer"
                  src="/righticon.svg"
                  height={38}
                  width={38}
                  alt="righticon"
                  onClick={handleNext}
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* mobile ui */}

      <div className="md:hidden bg-[#DFEEEF] ">
        <section>
          <div className="px-10">
            <p className="pt-12 text-[12px]  text-[#333333] ">WHY CHOOSE US</p>
            <h1 className=" mt-5 text-[32px] text-[#333333] font-prociono">
              India&apos;s 1st AI College
            </h1>

            <h1 className="text-[32px] text-[#0099A3]  font-prociono leading-none">
              Counselling Portal!
            </h1>
          </div>
          <div className=" mx-10 mt-8">
            <div className="w-[80%] h-[300px]">
            <p className="text-[14px] text-[#0099A3]">
              STEP {step.toString().padStart(2, "0")}
            </p>
            <h1 className="mt-4 text-[24px] text-[#203535]">
              {Data2[step - 1].title}
            </h1>
            <p className="mt-4 text-[14px] text-[#333333]">
              {Data2[step - 1].description}
            </p>
            </div>
            <div className="flex space-x-4 mt-10 pb-16 ">
              <Image
                className="rounded-lg cursor-pointer"
                src={iconClicked ? "/left2.svg" : "/lefticon.svg"}
                height={38}
                width={38}
                alt="lefticon"
                onClick={handlePrev}
              />

              <Image
                className="cursor-pointer"
                src="/righticon.svg"
                height={38}
                width={38}
                alt="righticon"
                onClick={handleNext}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Work;
