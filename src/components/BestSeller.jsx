import React, {useContext, useEffect, useState} from 'react'
import {ShopContext} from '../context/ShopContext'
import Title from "./Title"
import ProductItem from './ProductItem';

function BestSeller() {

    const {products} = useContext(ShopContext);

    const [bestSeller, setBestSeller] = useState([]);

    useEffect(()=>{
        setBestSeller(products.slice(0,5));
    },[])

    return (
        <div className='my-10'>
            <div className='text-center text-3xl py-8'>
                <Title text1={'BEST'} text2={'SELLERS'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                Discover our bestsellers, handpicked for their exceptional style and popularity. These top-rated favorites have captured the hearts of our customers, offering you the best in quality and trendsetting fashion. Shop now to see why these pieces are the most loved and must-have items in our collection.
                </p>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {bestSeller.map((item, index) => (
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                ))}
            </div>
        </div>
    );
}

export default BestSeller;


