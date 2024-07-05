"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
const Goeduform = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    email: "",
    mobile: "",
    otherNumber: "",
    schoolBoard: "",
    percentage: "",
    stream: "",
    course1: "",
    course2: "",
    course3: "",
    course4: "",
    course5: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const requiredFields = [
      "firstName",
      "lastName",
      "gender",
      "email",
      "mobile",
      "percentage",
      "stream",
      "course1",
    ];
    const isValid = requiredFields.every(
      (field) => formData[field] && formData[field].trim() !== ""
    );

    setIsFormValid(isValid);
  }, [formData]);

  useEffect(() => {
    const data = localStorage.getItem("formData");
    if (data) {
      const prefilldata = JSON.parse(data);
      setFormData(prefilldata);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      router.push("/Goeduform2");
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 10) {
      setFormData({ ...formData, mobile: value });
    }
  };
  

  const handlePercentageChange = (e) => {
    let value = e.target.value;
  
    // Allow the user to delete all characters
    if (value === "") {
      setFormData({ ...formData, percentage: value });
      return;
    }
  
    // Validate input
    if (/^\d{0,3}(\.\d{0,1})?$/.test(value)) {
      // Ensure value does not exceed 100
      if (parseFloat(value) <= 100) {
        setFormData({ ...formData, percentage: value });
      }
    }
  };

  
  return (
   
    <div className="w-full min-h-screen overflow-hidden bg-[#F9F9F9]">

      
      <div className="hidden md:w-full md:h-[60px] md:flex md:justify-center md:items-center md:gap-10 md:mt-14 bg-gray-[#F3F4F6] font-poppins bg-[#F3F4F6]">
        
        <div className="md:w-[196px] md:h-[48px] bg-white md:flex md:items-center md:justify-center">
          <input
            type="radio"
            className="w-[20px] h-[20px]"
            disabled="disabled"
          />
          &nbsp;&nbsp; Personal Details
        </div>

        <div className="md:w-[196px] md:h-[48px] bg-white md:flex md:items-center md:justify-center">
          <input
            type="radio"
            className="w-[20px] h-[20px]"
            disabled="disabled"
          />
          &nbsp;&nbsp; Additional Details
        </div>

        <div className="md:w-[196px] md:h-[48px] bg-white md:flex md:items-center md:px-4">
          <input
            type="radio"
            className="w-[20px] h-[20px]"
            disabled="disabled"
          />
          &nbsp;&nbsp; Submit
        </div>
      </div>


      <div className="md:hidden w-[200px] h-[30px] font-poppins px-8 pt-3 flex gap-14  ">
        
          <u>
          <h1 className=" text-[12px]">Personal Details</h1></u>
        

        <h1 className=" text-[12px]">Additional Details</h1>

        <h1 className=" text-[12px]">Submit</h1>
      </div>

      <div className="md:w-[1280px] md:h-full mx-6 mt-10 md:mx-7 md:p-6 font-poppins md:mt-6 bg-[#F9F9F9]">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <section>
            <div className="grid grid-cols-1 space-y-5 md:space-y-0   md:grid-cols-4 md:gap-10">
              <h2 className="text-[16px] md:text-lg font-semibold mb-4 md:text-[24px] font-poppins">
                PERSONAL DETAILS
              </h2>
              <div>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name*"
                  required
                  className="w-[100%] h-[40px] md:w-[300px] md:h-[56px] px-3 py-2 placeholder-[#667085] text-[16px] border border-[#E7E7E7] font-poppins bg-white rounded-md"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="middleName"
                  placeholder="Middle Name"
                  className="w-[100%] h-[40px] md:w-[300px] md:h-[56px] px-3 py-2 placeholder-[#667085] text-[16px] border border-[#E7E7E7] font-poppins rounded-md"
                  value={formData.middleName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name*"
                  required
                  className="w-[100%] h-[40px] md:w-[300px] md:h-[56px] px-3 py-2 placeholder-[#667085] text-[16px] font-poppins border border-[#E7E7E7] rounded-md"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>

              <div className="md:hidden">
                <div>
                  <select
                    name="gender"
                    required
                    className="w-[100%] h-[40px] px-3 py-2 text-[#677085] text-[16px] border border-[#E7E7E7] rounded-md"
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <option value="" hidden>
                      Gender*
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
              </div>
            </div>
          </section>

          <div className="hidden md:block">
            <div className="mt-4">
              <select
                name="gender"
                required
                className="w-[342px] h-[56px] ml-[317px] px-3 py-2 text-[#677085] text-[16px] border border-[#E7E7E7] rounded-md"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="" hidden>
                  Gender*
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>

          <div className="border border-gray-100"></div>

          <section>
            <div className="grid grid-cols-1 space-y-5 md:space-y-0 md:grid-cols-4 md:gap-4">
              <h2 className="text-[16px] md:text-lg font-semibold md:mb-4 md:text-[24px]">
                CONTACT DETAILS
              </h2>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  required
                  className="w-[100%] h-[40px] md:w-[300px] md:h-[56px] px-3 py-2 placeholder-[#667085] text-[16px] border border-[#E7E7E7] rounded-md"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile*"
                  required
                  className="w-[100%] h-[40px] md:w-[300px] md:h-[56px] px-3 py-2 placeholder-[#667085] text-[16px] border border-[#E7E7E7] rounded-md"
                  value={formData.mobile}
                  onChange={handlePhoneChange}
                  maxLength={10}
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="otherNumber"
                  placeholder="Other Number"
                  className="w-[100%] h-[40px] md:w-[300px] md:h-[56px] px-3 py-2 placeholder-[#667085] text-[16px] border border-[#E7E7E7] rounded-md"
                  value={formData.otherNumber}
                  onChange={handlePhoneChange}
                />
              </div>
            </div>
          </section>

          <div className="border border-gray-100"></div>

          <section>
            <div className="grid grid-cols-1 space-y-5 md:space-y-0 md:grid-cols-4 md:gap-4">
              <h2 className="text-[16px] md:text-lg font-semibold md:mb-4 md:text-[24px]">
                ACADEMIC DETAILS
              </h2>
              <div>
                <select
                  name="schoolBoard"
                  className="w-[100%] h-[40px] md:w-[300px] md:h-[56px] px-3 py-2 text-[#677085] text-[16px] border border-[#E7E7E7] rounded-md"
                  value={formData.schoolBoard}
                  onChange={handleChange}
                >
                  <option value="" hidden>
                    School Board
                  </option>
                  <option value="School Board 1">ICSE/ISC</option>
                 
                  <option value="School Board 2">CBSE</option>
                 
                  <option value="School Board 3">IGCSE</option>
                  <option value="School Board 4">CIE</option>
                  <option value="School Board 5">IB</option>
                </select>
              </div>
              <div>
                <input
                  type="tel"
                  name="percentage"
                  placeholder="12th Percentage*"
                  required
                  className="w-[100%] h-[40px] md:w-[300px] md:h-[56px] px-3 py-2 placeholder-[#667085] text-[16px] border border-[#E7E7E7] rounded-md"
                  value={formData.percentage}
                  onChange={handlePercentageChange}
                />
              </div>
              <div>
                <select
                  name="stream"
                  required
                  className="w-[100%] h-[40px] md:w-[300px] md:h-[56px] px-3 py-2 text-[#677085] text-[16px] border border-[#E7E7E7] rounded-md"
                  value={formData.stream}
                  onChange={handleChange}
                >
                  <option value="" hidden className="">
                    Stream*
                  </option>
                  <option value="Stream 1">Science</option>
                  <option value="Stream 2">Commerce</option>
                  <option value="Stream 3">Arts</option>
                  <option value="Stream 4">Others</option>
                </select>
              </div>
            </div>
          </section>

          <div className="border border-gray-100"></div>

          <section>
            <div className="grid grid-cols-1 space-y-5 md:space-y-0 md:grid-cols-4 md:gap-4">
              <h2 className="text-[16px] md:text-lg font-semibold md:mb-4 md:text-[24px]">
                PREFERRED COURSES
              </h2>
              <div>
                <input
                  type="text"
                  name="course1"
                  placeholder="Course 1*"
                  required
                  className="w-[100%] h-[40px] md:w-[300px] md:h-[56px] px-3 py-2 placeholder-[#667085] text-[16px] border border-[#E7E7E7] rounded-md"
                  value={formData.course1}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="course2"
                  placeholder="Course 2"
                  className="w-[100%] h-[40px] md:w-[300px] md:h-[56px] px-3 py-2 placeholder-[#667085] text-[16px] border border-[#E7E7E7] rounded-md"
                  value={formData.course2}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="course3"
                  placeholder="Course 3"
                  className="w-[100%] h-[40px] md:w-[300px] md:h-[56px] px-3 py-2 placeholder-[#667085] text-[16px] border border-[#E7E7E7] rounded-md"
                  value={formData.course3}
                  onChange={handleChange}
                />
              </div>
              <div className="hidden md:block">
                <div>
                  <input
                    hidden
                    type="text"
                    name="course4"
                    placeholder="Course 4"
                    className="w-[100%] h-[40px] md:w-[300px] md:h-[56px] px-3 py-2 placeholder-[#667085] text-[16px] border border-[#E7E7E7] rounded-md"
                    value={formData.course4}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <input
                  type="text"
                  name="course4"
                  placeholder="Course 4"
                  className="w-[100%] h-[40px] md:w-[300px] md:h-[56px] px-3 py-2 placeholder-[#667085] text-[16px] border border-[#E7E7E7] rounded-md"
                  value={formData.course4}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="course5"
                  placeholder="Course 5"
                  className="w-[100%] h-[40px] md:w-[300px] md:h-[56px] px-3 py-2 placeholder-[#667085] text-[16px] border border-[#E7E7E7] rounded-md"
                  value={formData.course5}
                  onChange={handleChange}
                />
              </div>
            </div>
          </section>

          <div className="hidden md:pt-14 md:w-[1280px] md:flex md:justify-center md:items-center">
            <div
              className={`w-[235px] h-[56px] bg-[#006269]  rounded font-poppins flex text-white items-center justify-center cursor-pointer 
            ${
              isFormValid
                ? "bg-[#006269] text-white"
                : "bg-[#006269] opacity-60"
            } `}
            >
              <button
                type="submit"
                className=""
                disabled={!isFormValid}
                onClick={() => {
                  localStorage.setItem("formData", JSON.stringify(formData));
                }}
              >
                Continue
              </button>
            </div>
          </div>

          <div className="flex justify-center items-center pt-10">
            <div
              className={`md:hidden w-[330px] h-[48px] mb-[70px] mx-11 rounded font-poppins flex justify-center items-center cursor-pointer text-white bg-[#006269] ${
                isFormValid
                  ? "bg-[#006269] text-white"
                  : "bg-[#006269] opacity-60"
              } `}
            >
              <button
                type="submit"
                disabled={!isFormValid}
                onClick={() => {
                  localStorage.setItem("formData", JSON.stringify(formData));
                }}
              >
                Submit & Continue
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Goeduform;
