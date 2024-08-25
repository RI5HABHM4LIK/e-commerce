import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

function Collection() {

  const { products, search, showSearch } = useContext(ShopContext);

  const [showFilter, setShowFilter] = useState(false);

  const [filerProducts, setFilerProducts] = useState([]);

  const [category, setCategory] = useState([]);

  const [subCategory, setSubCategory] = useState([]);

  const [sortType, setSortType] = useState('relavent')

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev=>prev.filter(item => item !== e.target.value ))
    } else {
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const toogleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev=>prev.filter(item => item !== e.target.value ))
    } else {
      setSubCategory(prev => [...prev, e.target.value])
    }
  }

  const applyFiler = () => {
    let productsCopy = products.slice();

    if(category.length > 0){
      productsCopy = productsCopy.filter(item => category.includes(item.category))
    }

    if(subCategory.length > 0){
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
    }

    if(showSearch && search){
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    setFilerProducts(productsCopy)
  }

  const sortProduct = () => {
    let fpCopy = filerProducts.slice();

    switch(sortType){
      case "low-high":
        setFilerProducts(fpCopy.sort((a,b)=>(a.price - b.price)));
        break;
      case "high-low":
        setFilerProducts(fpCopy.sort((a,b)=>(b.price - a.price)))
        break;
      default:
        applyFiler();
        break;
    }
  }

  useEffect(()=>{
    applyFiler();
  },[category,subCategory,search,showSearch])

  useEffect(()=>{
    sortProduct()
  },[sortType])

  
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">

      {/* Filter Options */}
      <div className='min-w-60'>
        <p 
         className="my-2 text-xl flex items-center cursor-pointer gap-2" 
          onClick={() => setShowFilter(!showFilter)}
        >
          FILTERS
          <img src={assets.dropdown_icon} className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ""}`} />
        </p>
        
        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <div className='flex gap-2'>
              <label className='flex gap-2'>
                <input className='w-3' type='checkbox' value="Men" onChange={toggleCategory} />
                Men
              </label>
              <label className='flex gap-2'>
                <input className='w-3' type='checkbox' value="Women" onChange={toggleCategory} />
                Women
              </label>
              <label className='flex gap-2'>
                <input className='w-3' type='checkbox' value="Kids" onChange={toggleCategory} />
                Kids
              </label>
            </div>
          </div>
        </div>

        {/* SubCategory Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <div className='flex gap-2'>
              <label className='flex gap-2'>
                <input className='w-3' type='checkbox' value="Topwear" onChange={toogleSubCategory} />
                Topwear
              </label>
              <label className='flex gap-2'>
                <input className='w-3' type='checkbox' value="Bottomwear" onChange={toogleSubCategory}/>
                Bottomwear
              </label>
              <label className='flex gap-2'>
                <input className='w-3' type='checkbox' value="Winterwear" onChange={toogleSubCategory}/>
                Winterwear
              </label>
            </div>
          </div>
        </div>
      </div>
    {/* Right Side */}
    <div className='flex-1 '>
      <div className='flex justify-between text-base s:text-2xl mb-4'>
        <Title text1={"ALL"} text2={"COLLECTIONS"} />
        {/* Product Sort */}
        <select className='border-2 borger-gray=300 text-sm px-20' onChange={(e)=>setSortType(e.target.value)}>

          <option value="relavent">Sort by Relavent</option>
          <option value="low-high">Sort by Low to High</option>
          <option value="high-low">Sort by Hight to Low</option>

        </select>

      </div>
      {/* Map Products */}
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
        {
          filerProducts.map((item,index)=>(
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
          ))
        }
      </div>
    </div>
    </div>
  );
}

export default Collection;
