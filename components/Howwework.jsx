"use client";
import React, { useState } from "react";
import Image from "next/image";
import imageData from "./Data";

const Howwework = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [iconClicked, setIconClicked] = useState(false);

  const handlePrevClick = () => {
    if (currentIndex !== 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      if (nextIndex < imageData.length) {
        setIconClicked(true);
        return nextIndex;
      } else {
        return prevIndex;
      }
    });
  };

  return (
    <>
      <div id="howweworkid" className="bg-[#DFEEEF] ">
        <h1 className="text-[32px] pt-16 md:pt-10 text-[#000000] md:text-[56px] text-center font-prociono">
          How We Work
        </h1>

        <section>
          <div className="mt-10 grid grid-cols-1 px-10 md:flex md:justify-center md:items-center md:my-10 md:px-20 md:gap-24">
            <div>
              <Image
                className="w-[342px] h-[327px] md:w-[400px] md:h-[340px] md:pt-20 lg:pt-0"
                src={imageData[currentIndex].imageUrl}
                width={415}
                height={400}
                alt={imageData[currentIndex].title}
              />
            </div>

            <div className="w-[80%] h-[100px] md:h-[300px] md:w-[650px] lg:w-[500px]">
              <h1 className="text-[12px] mt-7 md:mt-0 md:text-[16px] text-[#000000]">
                STEP {currentIndex + 1}
              </h1>
              <h1 className="text-[24px] mt-3 md:text-[40px] text-[#006269] font-prociono md:leading-[50px]">
                {imageData[currentIndex].title}
              </h1>
              <h1 className="text-[14px]  md:pb-10 mt-4 md:text-[18px] text-[#010101] font-light">
                {imageData[currentIndex].description}
              </h1>
            </div>
          </div>
          <div className="hidden  md:flex  md:justify-end md:items-end md:pt-20 md:pr-20 gap-2">
            {!iconClicked ? (
              <>
                <Image
                  className="rounded-lg cursor-pointer"
                  src="/lefticon.svg"
                  height={38}
                  width={38}
                  alt="lefticon"
                  onClick={handlePrevClick}
                />
              </>
            ) : (
              <>
                <Image
                  src="/left2.svg"
                  alt="icon"
                  width={38}
                  height={38}
                  className="cursor-pointer"
                  onClick={handlePrevClick}
                />
              </>
            )}

            <Image
              className="cursor-pointer"
              src="/righticon.svg"
              height={38}
              width={38}
              alt="righticon"
              onClick={handleNextClick}
            />
          </div>
        </section>

        <div className="hidden md:block mt-8 bg-[#006269] border-b w-auto h-[2px]">
          {" "}
        </div>

        <div className="hidden md:mt-4 md:pb-10 md:flex md:justify-center md:items-center md:space-x-16 lg:space-x-28 lg:px-20 md:px-8 ">
          {imageData.map((step, index) => (
            <div key={index} className="md:h-[130px]">
              <div className="relative md:bottom-[30px] lg:bottom-7">
                <Image
                  className="absolute"
                  src="/Line 3.svg"
                  height={1}
                  width={2}
                  alt="horizontal line"
                />
              </div>
              <p
                className={`md:text-[14px] lg:text-[16px] ${
                  currentIndex === index ? "text-[#006269]" : "text-[#667085]"
                }`}
              >
                STEP {index + 1}
              </p>
              <h1
                className={`text-[30px] font-prociono   ${
                  currentIndex === index
                    ? "text-[#006269] font-bold "
                    : "text-[#66708560] font-light"
                }`}
              >
                {step.title}
              </h1>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#DFEEEF] md:hidden flex justify-center items-center pt-[300px] pb-20 gap-3 ">
        {!iconClicked ? (
          <>
            <Image
              className="rounded-lg cursor-pointer "
              src="/lefticon.svg"
              height={38}
              width={38}
              alt="lefticon"
              onClick={handlePrevClick}
            />
          </>
        ) : (
          <>
            <Image
              src="/left2.svg"
              alt="icon"
              width={38}
              height={38}
              className="cursor-pointer"
              onClick={handlePrevClick}
            />
          </>
        )}

        <Image
          className="cursor-pointer"
          src="/righticon.svg"
          height={38}
          width={38}
          alt="righticon"
          onClick={handleNextClick}
        />
      </div>
    </>
  );
};

export default Howwework;
