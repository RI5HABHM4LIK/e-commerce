import React from 'react'
import Title from '../components/Title'
import {assets} from "../assets/assets"
import NewsletterBox from '../components/NewsletterBox'

function About() {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={"ABOUT"} text2={" Us"} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Welcome to Forever Clothing, your ultimate destination for timeless fashion. Founded with a passion for style and quality, we believe that fashion should be accessible to everyone. Our curated collections blend contemporary trends with classic designs, ensuring that each piece in our store is as unique and enduring as you are.</p>
          <p>At Forever Clothing, we prioritize not only the look but also the feel of our garments. That's why we use the finest materials and sustainable practices to create clothing that is both comfortable and environmentally responsible. Whether you're looking for everyday essentials or standout pieces, our commitment to quality and style ensures that you'll find something perfect for every occasion.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>At Forever Clothing, our mission is to empower individuals through fashion by offering timeless, high-quality clothing that transcends trends. We are dedicated to creating a sustainable fashion future, where style meets responsibility. Our goal is to provide our customers with garments that not only look great but also feel great, made with care for the environment and the people who wear them.</p>
        </div>
      </div>
      <div className='text-3xl py-4'>
        <Title text1={"WHY"} text2={" CHOOSE US"} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Ensuring excellence in every stitch, we deliver unmatched quality with every piece.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Shopping made simple, with effortless convenience at every step.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Delivering personalized support and exceptional care, every step of the way.</p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default About
