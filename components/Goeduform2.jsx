
"use client";
import Link from "next/link";

import React, {  useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Goeduform2 = () => {

  const router = useRouter()


  const [formData, setFormData] = useState({
    location1: "",
    location2: "",
    location3: "",
    location4: "",
    location5: "",
    collegebudget: "",
    textmessage: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const requiredFields = ["location1"];
    const isValid = requiredFields.every(
      (field) => formData[field].trim() !== ""
    );

    setIsFormValid(isValid);
  }, [formData]);

  useEffect(()=>{
    const data = localStorage.getItem("formData2");
    console.log(Boolean(data));
    if(data){
      const prefilldata = JSON.parse(data);
      setFormData(prefilldata)
    }

  },[])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("formData2", JSON.stringify(formData));
    router.push('/Goeduform3')
    // if (isFormValid) {
    //   setCurrentStep(2);
    // }
  };

 

  return (
    <div className="w-full min-h-screen overflow-hidden  bg-[#F9F9F9] font-poppins">
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

        <div className="md:w-[196px] md:h-[48px] bg-white md:flex  md:items-center md:justify-center">
          <input type="radio" className="w-[20px] h-[20px]" disabled='disabled'/>
          &nbsp;&nbsp; Additional Details
        </div>

          <div className="md:w-[196px] md:h-[48px] bg-white md:flex  md:items-center md:px-4 ">
            <input type="radio" className="w-[20px] h-[20px]" disabled='disabled'/>
            &nbsp;&nbsp; Submit
          </div>
      </div>
      <div className="md:hidden font-poppins flex items-center justify-center gap-5 mt-5">
        <Link href="/Goeduform">
          <h1 className="w-[112px] h-[21px] text-[12px] text-[#006269] ">
            Personal Details
          </h1>
        </Link>

        <u>
          {" "}
          <h1 className="w-[112px] h-[21px] text-[12px] ">
            Additional Details
          </h1>
        </u>
          <h1 className="w-[112px] h-[21px] text-[12px] ">Submit</h1>
      </div>

      <div className="mx-6 mt-6  md:w-[1280px] md:h-full md:mx-7 md:p-6 font-poppins md:mt-6 bg-[#F9F9F9]">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <section>
            <div className="grid grid-cols-1 space-y-6 md:space-y-9 md:grid-cols-4 md:gap-4">
              <h2 className="text-[16px] md:text-lg font-semibold  md:mt-9 md:text-[24px]">
                PREFERRED LOCATIONS
              </h2>
              <div>
                <input
                  type="text"
                  name="location1"
                  placeholder="Location 1*"
                  required
                  className="w-[342px] h-[40px] px-5 py-3 md:w-[300px]  md:h-[56px] md:px-3 md:py-2 placeholder-[#667085] text-[16px] border border-[#E7E7E7] rounded-md"
                  value={formData.location1}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="location2"
                  placeholder="Location 2"
                  className="w-[342px] h-[40px] px-5 py-3 md:w-[300px]  md:h-[56px] md:px-3 md:py-2 placeholder-[#667085] text-[16px] border border-[#E7E7E7] rounded-md"
                  value={formData.location2}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="location3"
                  placeholder="Location 3"
                  className="w-[342px] h-[40px] px-5 py-3 md:w-[300px]  md:h-[56px] md:px-3 md:py-2 placeholder-[#667085] text-[16px] border border-[#E7E7E7] rounded-md"
                  value={formData.location3}
                  onChange={handleChange}
                />
              </div>
              <div className="hidden md:block">
                <input
                  hidden
                  type="text"
                  placeholder="Location 4"
                  className="w-[342px] h-[40px] px-5 py-3 md:w-[300px]  md:h-[56px] md:px-3 md:py-2 placeholder-[#667085] text-[16px] border border-[#E7E7E7] rounded-md"
                  value={formData.location4}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="location4"
                  placeholder="Location 4"
                  className="w-[342px] h-[40px] px-5 py-3 md:w-[300px]  md:h-[56px] md:px-3 md:py-2 placeholder-[#667085] text-[16px] border border-[#E7E7E7] rounded-md"
                  value={formData.location4}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="location5"
                  placeholder="Location 5"
                  className="w-[342px] h-[40px] px-5 py-3 md:w-[300px]  md:h-[56px] md:px-3 md:py-2 placeholder-[#667085] text-[16px] border border-[#E7E7E7] rounded-md"
                  value={formData.location5}
                  onChange={handleChange}
                />
              </div>
            </div>
          </section>
          <div className="border border-[#F9F9F9] md:border-gray-100"></div>

          <section>
            <div className="grid grid-cols-1 md:grid-cols-4 md:gap-4">
              <h2 className="text-[16px] md:text-lg font-semibold mb-4 md:text-[24px]">
                COLLEGE BUDGET
              </h2>
              <div>
                <select
                  name="collegebudget"
                  className="w-[342px] h-[40px]  md:w-[300px]  md:h-[56px] px-3 py-2 text-[#677085] md:text-[16px] border border-[#E7E7E7] rounded-md"
                  value={formData.collegebudget}
                  onChange={handleChange}
                >
                  <option value="" hidden>
                    College Budget(Yearly)
                  </option>
                  <option value="Budget1">0-3 Lakhs</option>
                  <option value="Budget2">3-6 Lakhs</option>
                  <option value="Budget3">6-9 Lakhs</option>
                  <option value="Budget4">9-12 Lakhs</option>
                  <option value="Budget5">12-15 Lakhs</option>
                </select>
              </div>
            </div>
          </section>

          <div className="border border-gray-100"></div>
          <section>
            <div className="grid grid-cols-1 md:flex md:gap-20">
              <h2 className="text-[16px] md:text-lg font-semibold mb-4 md:text-[24px]">
                MESSAGE FOR OUR COUNSELLOR
              </h2>
              <div>
                <textarea
                  name="textmessage"
                  type="text"
                  placeholder="Message for our Counsellor (Atmost 250 words)"
                  className="w-[342px] h-[138px] md:w-[920px]  md:h-[229px] px-3 py-2 placeholder-[#667085] text-[16px] border border-[#E7E7E7] rounded-md resize-none"
                  maxLength={1500}
                  value={formData.textmessage}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
          </section>

          <div className="hidden md:pt-14  md:w-[1280px] md:flex md:justify-center md:items-center ">
            <div
              className={`w-[235px] h-[56px] bg-[#006269]  rounded font-poppins flex text-white items-center justify-center cursor-pointer
              
               ${
                 isFormValid
                   ? "bg-[#006269] text-white"
                   : "bg-[#006269] opacity-60"
               } `}
            >
              {/* <Link href={isFormValid ? "/AiForm3" : "#"} passHref> */}
                <button type="submit" className="" disabled={!isFormValid}>
                  Continue
                </button>
              {/* </Link> */}
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div
              className={`md:hidden w-[330px] h-[48px] mb-[70px] mx-11 rounded font-poppins flex justify-center  items-center  cursor-pointer text-white bg-[#006269]  ${
                isFormValid
                  ? "bg-[#006269] text-white"
                  : "bg-[#006269] opacity-60"
              } `}
            >
                <button type="submit">Submit & Continue</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Goeduform2;
