import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
      <div>
        <img src={assets.logo} className='mb-5 w-32' alt='footer' />
        <p className='w-full md:w-2/3 text-gray-600'>
        At Forever Clothing, we blend timeless style with modern trends, offering high-quality, sustainable fashion that empowers your individuality. Our commitment to exceptional service ensures a memorable shopping experience, making each piece a reflection of elegance and confidence.</p>
      </div>
      <div>
        <p className='text-xl font-medium mb-5'>COMPANY</p>
        <ul className='flex flex-col gap-1 text-gray-600'>
                <Link to={'/'}><li>Home</li></Link>
                <Link to={'/about'}><li>About us</li></Link>
                <Link to={'/contact'}><li>Contact Us</li></Link>
                <Link to={'/collection'}><li>Collection </li></Link>
                
        </ul>
      </div>
      <div>
        <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
        <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+1-212-456-7896</li>
            <li>info@forever.com</li>
        </ul>
      </div>
      <div>
        <hr />
        <p className='py-5 text-sm text-center'> Copyright 2024@ forever.com - All right reserved.</p>
      </div>
    </div>
  )
}

export default Footer
