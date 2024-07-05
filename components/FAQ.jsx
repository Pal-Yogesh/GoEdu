"use client";
import Image from "next/image";
import React, { useState } from "react";
import Faqdata from "./Faqdata";

const Faq = () => {

  const [activeQuestion, setActiveQuestion] = useState(false);

  const handleToggle = (id) => {
    setActiveQuestion(activeQuestion === id ? null : id);
  };

  return (
    <>
      <div className="md:flex md:justify-center md:items-center">
        <div className="flex flex-col justify-center md:ml-0 lg:ml-0 pt-16 h-auto md:w-[1300px] bg-[#006269] md:rounded-2xl">
          <div className="flex justify-center items-center">
            <Image
              src="/FAQ.svg"
              width={81}
              height={32}
              alt="FAQ"
              className=""
            />
          </div>
          <div className="mt-5 text-center">
            <h1 className="font-prociono text-[24px] md:text-[40px] text-[#FFFFFF]">
              Frequently Asked Questions
            </h1>
            <p className="mt-3 text-[12px] md:text-[16px] text-[#FFFFFF]">
              Find questions and answers related to the design system, <br />{" "}
              purchase, updates, and support.
            </p>
          </div>

          <div className="mt-5 flex justify-center items-center">
            <div className="px-5 py-5 flex flex-col gap-5">
              {Faqdata.map((item) => (
                <div
                  key={item.id}
                  className={`md:w-[610px] flex flex-col justify-between items-center bg-[#06656C] p-3 rounded-xl border border-[#FFFFFF10] transition-all ${
                    activeQuestion === item.id ? "h-auto bg-white" : "h-[62px] md:h-[52px] bg-[#06656C]"
                  }`}
                >
                  <div
                    className="w-full flex justify-between items-center cursor-pointer"
                    onClick={() => handleToggle(item.id)}
                  >
                    <h1
                      className={`text-[14px] md:text-[16px] ${
                        activeQuestion === item.id ? "text-[#010102]" : "text-[#EBEBEB]"
                      }`}
                    >{item.question}
                    </h1>
                    <Image
                      src={
                        activeQuestion === item.id
                          ? "/Minusicon.svg"
                          : "/Plusicon.svg"
                      }
                      alt="icon"
                      width={16}
                      height={16}
                    />
                  </div>
                  {activeQuestion === item.id && (
                    <div className="mt-2 w-full text-[#06656C]">
                      <p className="text-[14px] ">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 pb-10 md:pb-0 md:mt-5 flex justify-center items-center gap-2 md:mb-10">
            <p className="text-[16px] text-[#8F8F8F] ">Contact us at</p>
            <a href="mailto:info@goedu.in">
              <p className="text-[16px] text-[#D1D1D1] cursor-pointer ">
                info@goedu.in
              </p>
            </a>
            <p className=" text-[16px] text-[#8F8F8F] ">via email!</p>
          </div>
        </div>

        <div className="md:hidden w-full h-1 bg[#FFFFFF]"></div>
      </div>
    </>
  );
};

export default Faq;
