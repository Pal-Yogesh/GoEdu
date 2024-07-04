import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const Formnav = () => {
  return (
    
        <div className=" bg-[#006269] h-[90px] flex justify-center items-center">
          <Link href="/">
        <Image
          className="mx-16 cursor-pointer"
          src="/goEdu 1.svg"
          alt="go edu logo"
          width={90}
          height={90}
        />
          </Link>
 
      </div>
   
  )
}

export default Formnav;