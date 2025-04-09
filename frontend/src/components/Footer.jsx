import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/* left section */}
        <div>
            <img className='mb-5 w-40 h-10' src={assets.logo} alt="" />
            <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus tempora cumque officiis similique consectetur odit fugit incidunt odio, sed laborum laudantium corrupti optio. Ipsam quis est quae porro dignissimos magnam?</p>
        </div>


        {/* center section */}
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy POlicy</li>
            </ul>
        </div>


        {/* right section */}
        <div>
            <p  className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>+21123456789</li>
                <li>sojaljain02@gmail.com</li>
            </ul>
        </div>
      </div>
      <div>
        {/*  copyright text */}
        <hr />
        <p className='py-5 text-sm text-center '>Copyright 2025@ MediLink - All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
