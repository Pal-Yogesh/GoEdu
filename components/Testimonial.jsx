"use client"
import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
const Testimonial = () => {
  const language = [
    {
      imageSrc: "/testimonial2.svg",
      para: "Goedu made my college application process so much easier! The AI-driven insights were spot-on, and the personalized guidance helped me find the perfect engineering college. The support from the counselors was invaluable, and I couldn't have done it without them. Thank you, Goedu!",
      num: "01",
      proff: "Engineering Student",
      name: "Raj Patel",
    },
    {
      imageSrc: "/testimonial3.svg",
      para: "Applying for business schools felt overwhelming until I found Goedu. Their comprehensive support and expert advice made everything manageable. The seamless process kept me organized and stress-free. I got into my dream business school, and I highly recommend Goedu to anyone looking for the best college counseling.",
      num: "02",
      proff: "Business Student",
      name: "Ananya Sharma",
    },
    {
      imageSrc: "/unsplash_8PcQnMCiXn0.jpg",
      para: "Goedu's AI-driven platform provided the most accurate college recommendations based on my interests and academic profile. The expert counselors gave me the confidence to ace my interviews and write compelling essays. I am now enrolled in one of the top computer science programs in the country. Goedu truly works!",
      num: "03",
      proff: "Business Student",
      name: "Ananya Sharma",
    },
    {
      imageSrc: "/testimonial4.svg",
      para: "As an arts student, finding the right college was crucial for my career. Goedu's personalized guidance and comprehensive support made all the difference. The platform's user-friendly interface made the whole process smooth and efficient. I am thrilled with my college choice, all thanks to Goedu!",
      num: "04",
      proff: "Computer Science Student",
      name: "Karthik Rao",
    },
  ];
  const sliderRef = useRef();
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2.7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    centerMode: false,
    arrows: false,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.7,
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
          slidesToShow: 1.1,
          slidesToScroll: 1,
          infinite: true,
          speed: 500,
          arrows: false,
          dots:true,
        }
      },
    ]
  };
  return (
    <div className="relative h-[135vh] mb-5  md:h-[115vh] lg:h-[90vh] md:mt-80 md:mb-20 lg:mt-10 lg:mb-2">
      <div className="md:px-[90px] ">
        <div className="w-full grid grid-rows justify-center text-center">
          <div>
            <h2 className=" lg:text-[24px] text-[20px] md:text-[20px] mb-[8px]  mt-[60px] md:mt-0 font-prociono">TESTIMONIALS</h2>
          </div>
          <div className="w-[355px] md:w-full flex text-center lg:w-[860px] md:px-7 ">
            <p className="lg:text-[48px] md:text-[40px] text-[24px]  md:text-center lg:text-center" >What our Customer says about us</p>
          </div>
        </div>
        <Slider ref={sliderRef} {...settings}>
          {language.map((value, index) => (
            <div key={index} className="lg:px-12 md:px-8 px-[16px] ml-8 md:ml-0 md:py-[40px] lg:py-[20px] py-[44px]">
              <div className="relative border w-full md:h-[420px] lg:h-[370px] h-[400px] rounded-md border-black">
                <div className="mb-4 py-[24px] px-[16px]  lg:p-[20px] md:p-[20px]">
                  <p className="text-[16px]  flex text-center">{value.para}</p>
                </div>
                <div className="absolute flex flex-col right-1 text-center w-full  md:top-[270px] lg:top-[220px] top-[250px] h-[200px]">
                  <div className="w-full flex justify-center">
                    <Image className="w-[80px] h-[75px]  rounded-[50%] mb-4" src={value.imageSrc} alt={"Slide" + (index + 1)} width={10} height={10}/>
                  </div>
                  <p className="text-black font-semibold text-[18px]">{value.name}</p>
                  <p className="text-[#292828] text-[14px]">{value.proff}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default Testimonial;