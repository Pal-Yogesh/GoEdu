import React from "react";
import Goeduform from "../../../components/Goeduform";
import Formnav from "../../../components/Formnav";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Link from "next/link";
const page = () => {
  return (
    <>
      <Formnav />
      <Goeduform />
      <div className="bg-[#F9F9F9]">
        <Link href="/">
          <u className="cursor-pointer">
            <h1 className="text-[16px] text-[#006269] text-center font-medium">Back to home </h1>
          </u>
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default page;
