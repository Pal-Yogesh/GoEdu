"use client";

import Link from "next/link";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Goeduform3 = () => {
  const form = useRef();
  const router = useRouter();

  const [isChecked, setIsChecked] = useState(false);
  const handlecheckbox = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form1data = localStorage.getItem("formData");
    const form2data = localStorage.getItem("formData2");
    // console.log({
    //   Form1Data: JSON.parse(form1data),
    //   Form2Data: JSON.parse(form2data),
    // });
    
    const dataform2 = JSON.parse(form2data)
    const dataform1 = JSON.parse(form1data)
    const fulldata = {
      ...dataform1,...dataform2
    }

    if (isChecked) {
      emailjs
        .send(
          "service_7aklwae",
          "template_ox7ov6n",
          fulldata,
          "2pUaiU9zWRFb5vMlr"
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            localStorage.removeItem("formData");
            localStorage.removeItem("formData2");
            router.push('/Goedusuccess');
            // alert("Form submitted successfully!");
          },
          (error) => {
            console.log("FAILED...", error);
            alert("Failed to submit form. Please try again later.");
          }
        );
    }

  };

  return (
    <div className="w-full min-h-screen  overflow-hidden  bg-[#F9F9F9]">
      <div className="hidden md:w-full md:h-[60px] md:flex md:justify-center  md:items-center  md:gap-10 md:mt-14 bg-gray-[#F3F4F6] font-poppins bg-[#F3F4F6]">
        <Link href="/Goeduform">
          <div className="text-[#006269] md:w-[196px] md:h-[48px] bg-white md:flex  md:items-center md:justify-center">
            <Image
              className="w-[20px] h-[20px]"
              alt="check image"
              src="/check.svg"
              height={20}
              width={20}
            ></Image>
            &nbsp;&nbsp; Personal Details
          </div>
        </Link>

        <Link href="/Goeduform2">
          <div className="text-[#006269] md:w-[196px] md:h-[48px] bg-white md:flex  md:items-center md:justify-center">
            <Image
              className="w-[20px] h-[20px]"
              alt="check image"
              src="/check.svg"
              height={20}
              width={20}
            ></Image>
            &nbsp;&nbsp; Additional Details
          </div>
        </Link>

        <div className="md:w-[196px] md:h-[48px] bg-white md:flex  md:items-center md:px-4 ">
          <input type="radio" className="w-[20px] h-[20px]" disabled='disabled'/>
          &nbsp;&nbsp; Submit
        </div>
      </div>

      <div className="md:hidden font-poppins w-[100%] h-[30px] font-poppins flex justify-between items-center  pt-5 px-2">
        <Link href="/Goeduform">
          {" "}
          <h1 className=" text-[14px] text-[#006269] ">
            Personal Details
          </h1>
        </Link>
        <Link href="/Goeduform2">
          {" "}
          <h1 className=" text-[14px] text-[#006269] ">
            Additional Details
          </h1>
        </Link>
        <u>
          {" "}
          <h1 className=" text-[14px] ">Submit</h1>
        </u>
      </div>

      <div className=" lg:w-[1280px] md:h-full md:mx-7 md:p-6 font-poppins md:mt-6 bg-[#F9F9F9]">
        <form ref={form} className="md:space-y-6" onSubmit={handleSubmit}>
          <section>
            <div className="hidden  md:flex gap-48">
              <h2 className="text-lg font-semibold mb-4 text-[24px]">
                DISCLAIMER
              </h2>
              <div className="flex">
                <input
                  type="checkbox"
                  name="checkbox"
                  className="w-[18px]  h-[14px] px-3 py-2 mt-1 placeholder-[#667085]   border border-[#E7E7E7] rounded-md bg-white"
                  // value={checkbox}
                  onChange={handlecheckbox}
                />
                &nbsp; &nbsp;
                <p className="text-[16px]">
                Please Verify your all previous filled details while submitting the form, Once submit cannot change the details.

                </p>
              </div>
            </div>

            {/* mobile view */}
            <div className="md:hidden w-[390px] h-[160px] font-poppins mt-6 mx-4 ">
              <div className="w-[70%] h-[112px]  mx-2">
                <h2 className="text-lg font-semibold mb-4 text-[24px]">
                  DISCLAIMER
                </h2>
                <div className="  flex mt-3   ">
                  <input
                    type="checkbox"
                    name="checkbox"
                    className="w-[14px]  h-[14px] mt-1   bg-white"
                    // value={checkbox}
                    onChange={handlecheckbox}
                  />
                  &nbsp; &nbsp; &nbsp; &nbsp;
                  <p className="text-[12px]">
                    Please Verify your all previous filled details while submitting the form, Once submit cannot change the details.
                  </p>
                </div>
              </div>
            </div>
         
          </section>

          <div className="pb-3 md:pt-60    w-[1280px]  md:flex justify-center items-center  ">
           
            <div
              className={`hidden  w-[235px] h-[56px] mb-[70px] rounded font-poppins md:flex  items-center justify-center cursor-pointer 
                ${
                  isChecked
                    ? "bg-[#006269] text-white"
                    : "bg-[#006269] opacity-60"
                }
              `}
            >
              <button type="submit" disabled={!isChecked}>
                Submit
              </button>
            </div>
            <div className="flex justify-center items-center w-[330px] h-[48px] mt-[190px] ">
              
            
            <div
              className={`md:hidden  py-3 px-7   rounded font-poppins flex  items-center justify-center cursor-pointer ${
                isChecked
                  ? "bg-[#006269] text-white"
                  : "bg-[#006269] opacity-60"
              }`}
            >
              <button type="submit" disabled={!isChecked}>
                Submit & Continue
              </button>
            </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Goeduform3;
