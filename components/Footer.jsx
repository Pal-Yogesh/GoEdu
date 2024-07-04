import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="h-[72px] w-full sm:h-[60px] sm:mt-16 bg-[#006269] flex justify-center items-center">
        <footer>
          <h1 className="text-[#FFFFFF] ">copyright@ {currentYear}</h1>
        </footer>
      </div>
    </>
  );
};

export default Footer;


