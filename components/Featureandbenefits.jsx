// "use client";

// import Image from "next/image";
// import React, { useState } from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

// const Features = [
//   {
//     imageSrc: "/Rectangle 26 (1).svg",
//     heading: "AI-Powered Insights",
//     para: "Leverage the power of AI to gain deep insights into the best college options for you. Our advanced algorithms consider multiple factors, providing accurate and reliable recommendations tailored to your unique profile.",
//     num: "01"
//   },
//   {
//     imageSrc: "/Rectangle 26 (2).svg",
//     heading: "Comprehensive Support",
//     para: "Save valuable time and money with our streamlined counseling process. Our AI technology eliminates the guesswork, helping you focus on the most promising opportunities without the need for extensive research or multiple consultations.",
//     num: "02"
//   },
//   {
//     imageSrc: "/Rectangle 26.svg",
//     heading: "Time and Cost Efficiency",
//     para: "Save valuable time and money with our streamlined counseling process. Our AI technology eliminates the guesswork, helping you focus on the most promising opportunities without the need for extensive research or multiple consultations.",
//     num: "03"
//   },
//   {
//     imageSrc: "/Rectangle 26 (3).png",
//     heading: "User-Friendly Interface",
//     para: "Navigate the college admissions process with ease using our intuitive platform. Designed with students in mind, our user-friendly interface ensures a seamless and stress-free experience, allowing you to concentrate on what truly matters: achieving your educational goals.",
//     num: "04"
//   },
// ];

// const Featureandbenefits = () => {

//     const responsive = {
//         superLargeDesktop: {
//           breakpoint: { max: 4000, min: 3000 },
//           items: 5,
//         },
//         desktop: {
//           breakpoint: { max: 3000, min: 1200 },
//           items: 3,
//         },
//         tablet: {
//           breakpoint: { max: 1024, min: 768 },
//           items: 2,
//         },
//         mobile: {
//           breakpoint: { max: 464, min: 0 },
//           items: 1,
//         },
//       };

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [iconClicked, setIconClicked] = useState(false);

//   const handlePrevClick = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex((prevIndex) => prevIndex - 1);
//     }
//   };

//   const handleNextClick = () => {
//     setCurrentIndex((prevIndex) => {
//       const nextIndex = prevIndex + 1;
//       if (nextIndex < Features.length - 2) {
//         setIconClicked(true);
//         return nextIndex;
//       } else {
//         return prevIndex;
//       }
//     });
//   };

//   return (
//     <>
//       <div className="bg-[#F4FCFC] pb-10">
//         <div>
//           <h1 className="font-prociono text-[56px] text-[#010101] text-center">
//             Features and Benefits
//           </h1>
//           <h1 className="mt-4 text-[18px] text-[#111111] text-center">
//             Discover the unique features and benefits that make Go Edu the
//             preferred choice for college counseling. Our platform is designed
//             to provide comprehensive support and personalized insights,
//             ensuring a successful and stress-free college admissions process.
//           </h1>

//           <div className="flex justify-center items-center mt-8 gap-8 overflow-hidden">
//           <Carousel
//               swipeable={true}
//               responsive={responsive}
//               ssr={true}
//               infinite={true}
//               autoPlay={true}
//               autoPlaySpeed={2000}
//               keyBoardControl={true}
//               customTransition="transform 1000ms ease-in"
//               transitionDuration={1000}
//               containerClass="carousel-container"
//               removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
//               pauseOnHover={false}
//             >
//             {Features.slice(currentIndex, currentIndex + 3).map((feature, index) => (
//               <div key={index} className="w-[358px] h-[447px] border border-black px-4">
//                 <h1 className="pt-5 font-prociono text-[28px] text-[#000000]">
//                   {feature.heading}
//                 </h1>
//                 <h1 className="pt-3 text-[18px] text-[#000000]">
//                   {feature.para}
//                 </h1>
//                 <div className="pt-5 flex justify-between">
//                   <Image
//                     src={feature.imageSrc}
//                     width={168}
//                     height={137}
//                     alt="image"
//                   />
//                   <h1 className="pt-[120px]">{feature.num}</h1>
//                 </div>
//               </div>
//             ))}
//             </Carousel>

//           </div>

//           <div className="flex justify-center items-center gap-3 mt-8">
//             {!iconClicked ? (
//               <Image
//                 className="rounded-lg cursor-pointer"
//                 src="/lefticon.svg"
//                 height={38}
//                 width={38}
//                 alt="lefticon"
//                 onClick={handlePrevClick}
//               />
//             ) : (
//               <Image
//                 src="/left2.svg"
//                 alt="icon"
//                 width={38}
//                 height={38}
//                 className="cursor-pointer"
//                 onClick={handlePrevClick}
//               />
//             )}
//             <Image
//               className="cursor-pointer"
//               src="/righticon.svg"
//               height={38}
//               width={38}
//               alt="righticon"
//               onClick={handleNextClick}
//             />
//           </div>

//         </div>
//       </div>
//     </>
//   );
// };

// export default Featureandbenefits;





"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Features = [
  {
    imageSrc: "/Rectangle 26 (1).svg",
    heading: "AI-Powered Insights",
    para: "Leverage the power of AI to gain deep insights into the best college options for you. Our advanced algorithms consider multiple factors, providing accurate and reliable recommendations tailored to your unique profile.",
    num: "01",
  },
  {
    imageSrc: "/Rectangle 26 (2).svg",
    heading: "Comprehensive Support",
    para: "Save valuable time and money with our streamlined counseling process. Our AI technology eliminates the guesswork, helping you focus on the most promising opportunities without the need for extensive research or multiple consultations.",
    num: "02",
  },
  {
    imageSrc: "/Rectangle 26.svg",
    heading: "Time and Cost Efficiency",
    para: "Save valuable time and money with our streamlined counseling process. Our AI technology eliminates the guesswork, helping you focus on the most promising opportunities without the need for extensive research or multiple consultations.",
    num: "03",
  },
  {
    imageSrc: "/Rectangle 26 (3).png",
    heading: "User-Friendly Interface",
    para: "Navigate the college admissions process with ease using our platform. Designed with students in mind, our user-friendly interface ensures a seamless and stress-free experience, allowing you to concentrate on what truly matters: achieving your educational goals.",
    num: "04",
  },
];

const Featureandbenefits = () => {
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

  const [currentIndex, setCurrentIndex] = useState(0);
  const [iconClicked, setIconClicked] = useState(false);

  const carouselRef = useRef(null);

  const handlePrevClick = () => {
    carouselRef.current.previous();
  };

  const handleNextClick = () => {
    carouselRef.current.next();
    setIconClicked(true);
  };

  return (
    <div className="bg-[#F4FCFC] pb-10  lg:pb-20">
      <div>
        <h1 className="font-prociono pt-10 text-[28px] lg:text-[56px] text-[#010101] text-center">
          Features and Benefits
        </h1>
        <h1 className="mt-4 text-[14px] w-[90%] mx-3 px-6  md:text-[18px] text-[#111111] md:text-center">
          Discover the unique features and benefits that make Go Edu the
          preferred choice for college counseling. Our platform is designed to
          provide comprehensive support and personalized insights, ensuring a
          successful and stress-free college admissions process.
        </h1>

        <div className="mt-8 pl-9  md:pl-10">
          <Carousel
            ref={carouselRef}
            swipeable={true}
            responsive={responsive}
            ssr={true}
            // infinite={true}
            // autoPlay={true}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            customTransition="transform 750ms ease-in"
            transitionDuration={1000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
            pauseOnHover={false}
            beforeChange={(nextSlide) => setCurrentIndex(nextSlide)}
          >
            {Features.map((feature, index) => (
              <div
                key={index}
                className="w-[90%] md:w-[358px] h-[447px] border border-black md:px-4 bg-white"
              >
                <h1 className="md:w-[340px] md:h-[34px] pt-5 px-3 font-prociono text-[24px] md:text-[28px] text-[#000000]">
                  {feature.heading}
                </h1>
                <h1 className="md:w-[310px] h-[154px] px-3 pt-3 md:pt-9 text-[14px] md:text-[18px] text-[#000000]">
                  {feature.para}
                </h1>
                <div className="w-[70%] h-[120px] md:w-[300px] md:h-[150px] flex  pt-16 px-3 md:pt-24  ">
                  <Image
                    className="md:w-[160px] h-[140px]"
                    src={feature.imageSrc}
                    width={150}
                    height={100}
                    alt="image"
                  />
                  <div className="pt-20 pl-7 md:pl-28">
                    <div className="font-prociono bg-[#006269] w-[50px] h-[40px] text-white text-center py-2">
                      {feature.num}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>

        <div className=" flex justify-center items-center pt-10  md:pt-20 lg:pr-20 gap-2">
          {!iconClicked ? (
            <Image
              className="rounded-lg cursor-pointer"
              src="/lefticon.svg"
              height={38}
              width={38}
              alt="lefticon"
              onClick={handlePrevClick}
            />
          ) : (
            <Image
              src="/left2.svg"
              alt="icon"
              width={38}
              height={38}
              className="cursor-pointer"
              onClick={handlePrevClick}
            />
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
      </div>
    </div>
  );
};

export default Featureandbenefits;



