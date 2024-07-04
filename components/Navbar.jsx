// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const Navbar = () => {
//   return (
//     <>
//     {/* mobile */}
//       <div className=" md:hidden  bg-[#006269] h-[60px] flex justify-center items-center">
//         <Image
//           className="mx-16 "
//           src="/goEdu 1.svg"
//           alt="go edu logo"
//           width={60}
//           height={36}
//         />
//       </div>

  
     
      
    


// {/* laptop */}

//       <div className="hidden lg:flex lg:justify-between lg:items-center h-[90px] bg-[#006269]">
//         <Image
//           className="mx-16 "
//           src="/goEdu 1.svg"
//           alt="go edu logo"
//           width={88}
//           height={53}
//         />
//         <div
//           className="flex justify-center items-center   "
//           id="navbar-default"
//         >
//           <ul className="flex  space-x-20 mr-12 text-xl">
//             <li className="text-[24px] text-[#FFFFFF]">
              
//               <Link href="#heroid" >About</Link>
//             </li>
//             <li className="text-[24px] text-[#FFFFFF]"> 
//               <Link href="#howweworkid" >How We Work</Link>
//             </li>
//             <li className="text-[24px] text-[#FFFFFF]">
//               <Link href="#featuresid" >Features</Link>
//             </li>
//           </ul>
//           <div className="border border-[#FFFFFF] rounded mx-20 flex">
//             <button className="text-[15px] text-[#FFFFFF] my-3 mx-3 ">
//               <Link href="/AiForm">Take This First Step </Link>
//             </button>
//             <Image
//               src="/arrow.svg"
//               alt="arrow"
//               width={15}
//               height={14}
//               className="mx-3"
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;


"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      {/* mobile */}
      <div className="md:hidden bg-[#006269] h-[60px] flex justify-center items-center">
        <Image
          className="mx-16"
          src="/goEdu 1.svg"
          alt="go edu logo"
          width={60}
          height={36}
        />
      </div>

      {/* tab */}
      <div className="hidden md:flex lg:hidden md:justify-between md:items-center h-[60px] bg-[#006269]">
        <Image
          className="mx-16"
          src="/goEdu 1.svg"
          alt="go edu logo"
          width={60}
          height={36}
        />
        <ul className="flex space-x-6 mr-6 text-lg">
          <li className="text-[18px] text-[#FFFFFF]">
            <Link href="#heroid">About</Link>
          </li>
          <li className="text-[18px] text-[#FFFFFF]">
            <Link href="#howweworkid">How We Work</Link>
          </li>
          <li className="text-[18px] text-[#FFFFFF]">
          <Link href="#featuresid">Features</Link>
          </li>
        </ul>
      </div>

      {/* laptop */}
      <div className="hidden lg:flex lg:justify-between lg:items-center h-[90px] bg-[#006269]">
        <Image
          className="mx-16"
          src="/goEdu 1.svg"
          alt="go edu logo"
          width={88}
          height={53}
        />
        <div className="flex justify-center items-center" id="navbar-default">
          <ul className="flex space-x-20 mr-12 text-xl">
            <li className="text-[24px] text-[#FFFFFF]">
              <Link href="#heroid">About</Link>
            </li>
            <li className="text-[24px] text-[#FFFFFF]">
              <Link href="#howweworkid">How We Work</Link>
            </li>
            <li className="text-[24px] text-[#FFFFFF]">
              <Link href="#featuresid">Features</Link>
            </li>
          </ul>
          <div className="border border-[#FFFFFF] rounded mx-20 flex">
            <button className="text-[15px] text-[#FFFFFF] my-3 mx-3">
              <Link href="/AiForm">Take This First Step</Link>
            </button>
            <Image
              src="/arrow.svg"
              alt="arrow"
              width={15}
              height={14}
              className="mx-3"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
