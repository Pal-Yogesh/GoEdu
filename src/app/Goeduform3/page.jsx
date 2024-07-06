import React from 'react'
import Goeduform3 from '../../../components/Goeduform3'
import Formnav from '../../../components/Formnav'
import Footer from '../../../components/Footer'
import Link from 'next/link'
const page = () => {
  return (
    <div>
      <Formnav />
      <Goeduform3 />
      <div className="bg-[#F9F9F9]">
        <Link href="/">
          <u className="cursor-pointer">
            <h1 className="text-[16px] text-[#006269] text-center font-medium">Back to home </h1>
          </u>
        </Link>
      </div>
      <Footer />
    </div>
  )
}

export default page