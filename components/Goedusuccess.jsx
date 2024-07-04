"use client";

import Image from "next/image";
import Link from "next/link";

const Goedusuccess = () => {
  return (
    <div className=" flex  items-center justify-center mt-10  bg-opacity-50 font-poppins">
      <div className=" mt-10 mb-10 sm:mb-0   rounded-2xl w-[300px] h-[400px] sm:p-6 sm:rounded-2xl sm:w-[700px] bg-[#006269]  sm:h-auto ">
        <div className="mt-8 flex justify-center">
          <Image src="/congrats.png" alt="congrats" width={152} height={120} />
        </div>

        <div className="mt-4 text-center text-lg text-white ">
          <p>
            Congratulations on embarking on the first step <br /> toward a
            bright future!
          </p>
        </div>

        <div className="max-w-[324px] sm:hidden mt-4 text-center text-[12px] text-white">
          <p>Our Team will connect with you shortly.</p>
        </div>
        <div className="hidden sm:block mt-4 text-center text-[12px] text-white">
          <p>Our Team will connect with you at your preferred time.</p>
        </div>

        <div className="mt-14 flex justify-center text-[16px] ">
          <Link href="/">
          <button
            type="button"
            className="px-5 p-2  bg-white text-[#006269] text-[12px]    rounded-md  transition-colors duration-300"
            >
            Back To Home
          </button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Goedusuccess;
