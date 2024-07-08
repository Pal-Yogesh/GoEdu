"use client";

import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const testimonials = [
  {
    imageSrc: "/testimonials1.jpeg",
    para: "Goedu made my college application process so much easier! The AI-driven insights were spot-on, and the personalized guidance helped me find the perfect engineering college. The support from the counselors was invaluable, and I couldn't have done it without them. Thank you, Goedu!",
    num: "01",
    proff: "Engineering Student",
    name: "Parul",
  },
  {
    imageSrc: "/testimonial3.svg",
    para: "Applying for business schools felt overwhelming until I found Goedu. Their comprehensive support and expert advice made everything manageable. The seamless process kept me organized. I got into my dream business school, and I highly recommend Goedu to anyone looking for the best college counseling.",
    num: "02",
    proff: "Business Student",
    
    name: "Raj Patel",
  },
  {
    imageSrc: "/testimonials2.jpeg",
    para: "Goedu's AI-driven platform provided the most accurate college recommendations based on my interests and academic profile. The expert counselors gave me the confidence to ace my interviews. I am now enrolled in one of the top computer science programs in the country. Goedu truly works!",
    num: "03",
    proff: "Computer Science Student",
    name: "Priyangini",
  },
  {
    imageSrc: "/testimonials3.jpeg",
    para: "As an arts student, finding the right college was crucial for my career. Goedu's personalized guidance and comprehensive support made all the difference. The platform's user-friendly interface made the whole process smooth and efficient. I am thrilled with my college choice, all thanks to Goedu!",
    num: "04",
    proff: "Arts Student",
    name: "Shivam Panwar",
  },
];

const Testimonials = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <div>
        <div className="bg-[#F4FCFC] pt-10 lg:pt-16  pb-10">
          <div>
            <h1 className="text-[24px] text-[#000000] text-center">
              TESTIMONIALS
            </h1>

            <h1 className="text-[30px] md:text-[48px] text-[#000000] text-center">
              What our Customer says about us
            </h1>
          </div>

          <div className="pl-10">
            <Carousel
              swipeable={true}
              responsive={responsive}
              ssr={true}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={2000}
              keyBoardControl={true}
              customTransition="transform 1000ms ease-in"
              transitionDuration={1000}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
              pauseOnHover={false}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-[80%] h-[450px] md:w-[360px] md:h-[455px] border border-black mt-8 px-4"
                >
                  <h1 className="text-[14px] md:text-[16px] text-[#010101] text-center pt-4 md:pt-12">
                    {testimonial.para}
                  </h1>
                  <h1 className="pt-4 text-center">⭐⭐⭐⭐⭐</h1>
                  <div className="pt-4 flex justify-center items-center ">
                    <Image
                    className="rounded-full h-[55px] w-[55px]"
                      src={testimonial.imageSrc}
                      width={55}
                      height={55}
                      alt="client"
                    />
                  </div>
                  <h1 className="mt-3 text-center text-[18px] text-[#010101]">
                    {testimonial.name}
                  </h1>
                  <h1 className="mt-2 text-center text-[14px] text-[#01010160]">
                    {testimonial.proff}
                  </h1>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
