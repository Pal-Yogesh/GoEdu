"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Popup = () => {
  const form = useRef();

  const [isFormVisible, setIsFormVisible] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClose = () => {
    setIsFormVisible(false);
  };

  if (!isFormVisible) {
    return null;
  }

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 10) {
      setFormData({ ...formData, mobile: value });
    }
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm("service_7aklwae", "template_rz1st8k", form.current, {
        publicKey: "2pUaiU9zWRFb5vMlr",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Submitted");
          // Reset form data after successful submission
          setFormData({
            name: "",
            email: "",
            phone: "",
            course: "",
            message: "",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed");
        }
      );
  };
  
  

  return (
    <div className="z-10  fixed inset-0 flex items-center justify-center    bg-black bg-opacity-50 font-poppins">
      <div
        className="md:hidden  cursor-pointer absolute top-[123px] right-[17px] shadow-xl rounded-full"
        onClick={handleClose}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 68 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="68" height="68" rx="34" fill="#006269" />
          <path
            d="M42.132 27.99C42.2753 27.8517 42.3897 27.6863 42.4684 27.5033C42.5471 27.3203 42.5885 27.1235 42.5904 26.9244C42.5922 26.7252 42.5543 26.5277 42.479 26.3433C42.4037 26.1589 42.2924 25.9914 42.1516 25.8505C42.0108 25.7096 41.8434 25.5981 41.6591 25.5226C41.4748 25.4471 41.2773 25.409 41.0781 25.4107C40.8789 25.4123 40.6821 25.4536 40.499 25.5321C40.316 25.6106 40.1504 25.7248 40.012 25.868L34 31.878L27.99 25.868C27.8527 25.7207 27.6871 25.6025 27.5031 25.5205C27.3191 25.4385 27.1204 25.3944 26.919 25.3909C26.7176 25.3873 26.5176 25.4244 26.3308 25.4998C26.144 25.5752 25.9744 25.6875 25.8319 25.83C25.6895 25.9724 25.5772 26.1421 25.5017 26.3288C25.4263 26.5156 25.3893 26.7157 25.3928 26.9171C25.3964 27.1185 25.4404 27.3171 25.5224 27.5011C25.6044 27.6851 25.7226 27.8507 25.87 27.988L31.876 34L25.866 40.01C25.601 40.2944 25.4568 40.6705 25.4636 41.0591C25.4705 41.4477 25.6279 41.8185 25.9028 42.0933C26.1776 42.3681 26.5483 42.5255 26.9369 42.5324C27.3256 42.5392 27.7016 42.395 27.986 42.13L34 36.12L40.01 42.132C40.2943 42.397 40.6704 42.5413 41.059 42.5344C41.4476 42.5275 41.8184 42.3701 42.0932 42.0953C42.3681 41.8205 42.5255 41.4497 42.5323 41.0611C42.5392 40.6725 42.395 40.2964 42.13 40.012L36.124 34L42.132 27.99Z"
            fill="#F8F8F8"
          />
        </svg>
      </div>

      <div className="bg-[#FFFFFF] w-[351px] h-[600px] md:w-[710px] md:h-[460px] lg:w-[950px] lg:h-[520px] rounded  border-8 border-[#CDC6DB30] ">
        <div className="  text-[#006269] ">
          <h1 className="text-[24px] md:text-[32px] lg:text-[40px] text-center font-semibold mt-4">
            Connect with our Experts
          </h1>

          <h1 className="text-[10px] md:text-[14px] lg:text-[18px] text-center">
            For further information, please fill in the form below. We will
            contact you as soon as possible.
          </h1>
        </div>

        <form ref={form} onSubmit={handleSubmit}>
          <div className="font-poppins space-y-5">
            <div className=" mx-4 mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name*"
                required
                className="  px-4 py-3 placeholder-[#969696] text-[16px] text-[#969696] border border-[#E1E3E2] font-poppins bg-[#F9F9F9] rounded-md"
                onChange={handleChange}
              />

              <input
                type="text"
                name="phonenumber"
                placeholder="Phone Number*"
                required
                className="  px-4 py-3 placeholder-[#969696] text-[16px] text-[#969696] border border-[#E1E3E2] font-poppins bg-[#F9F9F9] rounded-md"
                onChange={handlePhoneChange}
              />
              <input
                type="text"
                name="email"
                placeholder="Email*"
                required
                className="  px-4 py-3 placeholder-[#969696] text-[16px] text-[#969696] border border-[#E1E3E2] font-poppins bg-[#F9F9F9] rounded-md"
                onChange={handleChange}
              />

              <input
                type="text"
                name="preferredcourse"
                placeholder="Preffered Course"
                required
                className="w  px-4 py-3 placeholder-[#969696] text-[16px] text-[#969696] border border-[#E1E3E2] font-poppins bg-[#F9F9F9] rounded-md"
              />
            </div>

            <div className="mx-4 ">
              <textarea
                type="text"
                name="textmessage"
                placeholder="Message for our Counsellor (Atmost 250 words)"
                className="w-[302px] h-[120px]  md:w-[660px] md:h-[110px] lg:w-[903px] lg:h-[150px]  text-[#969696] px-3 py-2 placeholder-[#667085] text-[16px] border border-[#E7E7E7] bg-[#F9F9F9] rounded-md resize-none"
                maxLength={1500}
              ></textarea>
            </div>

            <div className="flex justify-end items-end mr-4">
              <button
                type="submit"
                className="w-[302px] h-[50px] md:w-[250px] md:h-[50px] bg-teal-700 text-white py-2 px-4 rounded hover:bg-teal-800 transition duration-300 "
              >
                Enquire Now
              </button>
            </div>
          </div>
        </form>

        <div
          className="hidden md:flex md:justify-center md:items-center md:pt-[2px] cursor-pointer"
          onClick={handleClose}
        >
          <svg
            width="48"
            height="48"
            viewBox="0 0 68 68"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="68" height="68" rx="34" fill="#006269" />
            <path
              d="M42.132 27.99C42.2753 27.8517 42.3897 27.6863 42.4684 27.5033C42.5471 27.3203 42.5885 27.1235 42.5904 26.9244C42.5922 26.7252 42.5543 26.5277 42.479 26.3433C42.4037 26.1589 42.2924 25.9914 42.1516 25.8505C42.0108 25.7096 41.8434 25.5981 41.6591 25.5226C41.4748 25.4471 41.2773 25.409 41.0781 25.4107C40.8789 25.4123 40.6821 25.4536 40.499 25.5321C40.316 25.6106 40.1504 25.7248 40.012 25.868L34 31.878L27.99 25.868C27.8527 25.7207 27.6871 25.6025 27.5031 25.5205C27.3191 25.4385 27.1204 25.3944 26.919 25.3909C26.7176 25.3873 26.5176 25.4244 26.3308 25.4998C26.144 25.5752 25.9744 25.6875 25.8319 25.83C25.6895 25.9724 25.5772 26.1421 25.5017 26.3288C25.4263 26.5156 25.3893 26.7157 25.3928 26.9171C25.3964 27.1185 25.4404 27.3171 25.5224 27.5011C25.6044 27.6851 25.7226 27.8507 25.87 27.988L31.876 34L25.866 40.01C25.601 40.2944 25.4568 40.6705 25.4636 41.0591C25.4705 41.4477 25.6279 41.8185 25.9028 42.0933C26.1776 42.3681 26.5483 42.5255 26.9369 42.5324C27.3256 42.5392 27.7016 42.395 27.986 42.13L34 36.12L40.01 42.132C40.2943 42.397 40.6704 42.5413 41.059 42.5344C41.4476 42.5275 41.8184 42.3701 42.0932 42.0953C42.3681 41.8205 42.5255 41.4497 42.5323 41.0611C42.5392 40.6725 42.395 40.2964 42.13 40.012L36.124 34L42.132 27.99Z"
              fill="#F8F8F8"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Popup;
