"use client"

import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
const SimpleCarousel = () => {
  const language = [
    {
      imageSrc: "/Rectangle 26 (1).svg",
      heading: "AI-Powered Insights",
      para: "Leverage the power of AI to gain deep insights into the best college options for you. Our advanced algorithms consider multiple factors, providing accurate and reliable recommendations tailored to your unique profile.",
      num: "01"
    },
    {
      imageSrc: "/Rectangle 26 (2).svg",
      heading: "Comprehensive Support",
      para: "Save valuable time and money with our streamlined counseling process. Our AI technology eliminates the guesswork, helping you focus on the most promising opportunities without the need for extensive research or multiple consultations.",
      num: "02"
    },
    {
      imageSrc: "/Rectangle 26.svg",
      heading: "Time and Cost Efficiency",
      para: "Save valuable time and money with our streamlined counseling process. Our AI technology eliminates the guesswork, helping you focus on the most promising opportunities without the need for extensive research or multiple consultations.",
      num: "03"
    },
    {
      imageSrc: "/Rectangle 26 (3).png",
      heading: "User-Friendly Interface",
      para: "Navigate the college admissions process with ease using our intuitive platform. Designed with students in mind, our user-friendly interface ensures a seamless and stress-free experience, allowing you to concentrate on what truly matters: achieving your educational goals.",
      num: "04"
    },
  ];
  const sliderRef = useRef();
  const nextSlide = () => {
    sliderRef.current.slickNext();
    console.log(sliderRef.current);
  };
  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };
  const background = () => {
    sliderRef.style.background
  }
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  
    autoplay: false,
    autoplaySpeed: 2000,
    dots: false,
    centerMode: false,
    arrows: false,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.7,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.0,
          slidesToScroll: 1,
          arrows: false,
          infinite: true,
          speed: 500,
          arrows: false,
        }
      },
    ]
  };
  return (
    <div className="relative mb-16 md:h-[150vh] lg:h-[130vh]  h-[135vh]  lg:mb-0 ">
      <div className=" flex flex-col justify-start  md:px-[90px]">
        <div className=" md:w-full px-[21px] ">
          <div className="md:flex  md:w-full md:h-32  mb-[24px] md:justify-center md:mb-[65px] md:text-center">
            <div className="md:w-[400px] mt-10">
              <h2 className="lg:text-[56px]  md:text-[46px] text-[32px] font-prociono leading-tight">Features And Benefits</h2>
            </div>
          </div>
          <div className="md:flex md:text-center mb-[24px] md:h-[130px] md:mb-5  md:px-6">
            <p className="lg:text-lg md:text-lg  md:text-center   " >Discover the unique features and benefits that make Go Edu the preferred choice for college counseling. Our platform is designed to provide comprehensive support and personalized insights, ensuring a successful and stress-free college admissions process.</p>
          </div>

        </div>
        <Slider ref={sliderRef} {...settings}>
          {language.map((value, index) => (
            <div key={index} className="md:px-3 px-4 ">
              <div className="relative border pt-[40px]  md:px-[16px] px-[18px]  h-[375px] md:h-[370px] lg:h-[400px] border-black ">
                <div>
                  <h3 className="md:text-[20px] lg:text-[28px]  text-[20px] text-[#000000] mb-[16px] font-prociono leading-none">{value.heading}</h3>
                  <p className="md:text-[16px]   text-[16px] font-light  leading-none  text-[#000000]">{value.para}</p>
                </div>
                
                <div className=" absolute w-full flex flex-col md:top-[220px] lg:top-[260px] top-[230px]  ">
                  <Image className=" w-[150px] h-[127px] " src={value.imageSrc} alt={"Slide " + (index + 1)}  height={100} width={100}/>
                </div>
                <div className="absolute bottom-6 right-6 text-3xl font-prociono w-10 h-10 bg-[#006269]">
                  <span className="font-prociono text-white pl-1">{value.num}</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="absolute flex w-full justify-center">
        <div className="w-32 flex justify-evenly mt-[20px]">
          <button className="h-[45px] w-[45px] flex items-center justify-center bg-[#006269] transform border border-[#3E3E3E] rounded-xl translate-y-1/2" onClick={() => {
            prevSlide();
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.6em" viewBox="0 0 16 16">
              <path fill="white" fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
            </svg>
          </button>
          <button className="h-[45px] w-[45px] flex items-center justify-center bg-[#006269] transform border border-[#3E3E3E] rounded-xl translate-y-1/2" onClick={nextSlide}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.6em" viewBox="0 0 24 24">
              <g fill="none">
                <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                <path fill="white" d="m14.707 5.636l5.657 5.657a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 0 1-1.414-1.414l3.95-3.95H4a1 1 0 1 1 0-2h13.243l-3.95-3.95a1 1 0 1 1 1.414-1.414" />
              </g>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
export default SimpleCarousel;