import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {ShopContext} from '../context/ShopContext'
import { useContext } from 'react';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';


function Product() {

  const {productId} = useParams();

  const {products, currency, addToCart} = useContext(ShopContext)

  const [producData, setProductData] = useState(false);

  const [image,setImage] = useState('');

  const [size, setSize] = useState('');

  const fetchProductData = async () =>{
    products.map((item)=>{
      if(item._id === productId){
        setProductData(item)
        setImage(item.image[0])
        // console.log(item)
        return null;
      }
    })
  }

  useEffect(()=>{
    fetchProductData();
  },[productId, products]) 

  return producData ? (

    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      
        {/* Product Data */}

        <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

          {/* Product Images */}

          <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>

                <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
                  {
                    producData.image.map((item,index)=>(
                      <img onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt='' />
                    ))
                  }
                </div>

                <div className='w-full sm:w-[80%]'>
                <img className='w-full h-auto' src={image} alt='' />
                </div>

          </div>

          {/* Product Info */}

          <div className='flex-1'>

            <h1 className='font-medium text-2xl mt-2'>{producData.name}</h1>
            <div className='flex items-center gap-1 mt-2'>

              <img src={assets.star_icon} className='w-3 5' alt='' />
              <img src={assets.star_icon} className='w-3 5' alt='' />
              <img src={assets.star_icon} className='w-3 5' alt='' />
              <img src={assets.star_icon} className='w-3 5' alt='' />
              <img src={assets.star_dull_icon} className='w-3 5' alt='' />
              <p className='pl-2'>(122)</p>

            </div>
            <p className='mt-5 text-3xl font-medium'>{currency}{producData.price}</p>
            <p className='mt-5 text-gray-500 md:w-4/5'>{producData.description}</p>

            <div className='flex flex-col gap-4 my-8'>
                  <p>Select Size</p>
                  <div className='flex gap-2'>
                    {producData.sizes.map((item)=>(
                      <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`} key={item}>
                          {item}
                      </button>
                    ))}
                  </div>
            </div>
            <button onClick={()=>addToCart(producData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>
              ADD TO CART
            </button>
            <hr className='mt-8 sm:w-4/5' />
            <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
              <p>100% Original Product</p>
              <p>Cash on delivery is available on this project.</p>
              <p>Easy reture and exhange within 7 days</p>

            </div>

          </div>

        </div>

        {/* Review & Description */}
        <div className='mt-20'>

          <div className='flex'>
                    <b className='border px-5 py-3 text-sm'>Description</b>
                    <p className='border px-5 py-3 text-sm' > Reviews (112)</p>
          </div>
          <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>

            <p>
            Shop with confidence knowing you’ll find exclusive deals, easy returns, and exceptional customer service. Discover the perfect fit and style that reflects your unique fashion sense.
            </p>
            <p>
            Explore our latest collection of trendy and timeless clothing, designed to elevate your wardrobe. Enjoy a variety of styles, from casual essentials to elegant outfits, all crafted with quality fabrics.
            </p>

          </div>

        </div>

        {/* Related Product */}
        <RelatedProducts category={producData.category} subCategory={producData.subCategory} />

    </div>

  ) : <div className='opacity-0'>

  </div>
}

export default Product
