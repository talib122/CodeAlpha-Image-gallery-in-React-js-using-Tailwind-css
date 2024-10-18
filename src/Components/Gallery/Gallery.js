import React, { useEffect, useState } from 'react'
import d1 from '../../images/d1.jpeg';
import d2 from '../../images/d2.jpeg';
import d3 from '../../images/d3.jpeg';
import d4 from '../../images/d4.jpeg';
import d5 from '../../images/d5.jpeg';
import d6 from '../../images/d6.jpeg';
import d7 from '../../images/d7.jpeg';
import d8 from '../../images/d8.jpeg';
import d9 from '../../images/d9.jpeg';
import d10 from '../../images/d10.jpeg';
import d11 from '../../images/d11.jpeg';
import d12 from '../../images/d12.jpeg';
import d13 from '../../images/d13.jpeg';
import d14 from '../../images/d14.jpeg';
import d15 from '../../images/d15.jpeg';
import c1 from '../../images/c1.jpeg';
import c2 from '../../images/c2.jpeg';
import c3 from '../../images/c3.jpeg';
import c4 from '../../images/c4.jpeg';
import c5 from '../../images/c5.jpeg';
import c6 from '../../images/c6.jpeg';
import c7 from '../../images/c7.jpeg';
import c8 from '../../images/c8.jpeg';
import c9 from '../../images/c9.jpeg';
import c10 from '../../images/c10.jpeg';
import c11 from '../../images/c11.jpeg'
import c12 from '../../images/c12.jpeg';
import c13 from '../../images/c13.jpeg';
import c14 from '../../images/c14.jpeg';
import c15 from '../../images/c15.jpeg';
import e1 from '../../images/e1.jpeg';
import e2 from '../../images/e2.jpeg';
import e3 from '../../images/e3.jpeg';
import e4 from '../../images/e4.jpeg';
import e5 from '../../images/e5.jpeg';
import e6 from '../../images/e6.jpeg';
import e7 from '../../images/e7.jpeg';
import e8 from '../../images/e8.jpeg';
import b1 from '../../images/b1.jpeg';
import b2 from '../../images/b2.jpeg';
import b3 from '../../images/b3.jpeg';
import b4 from '../../images/b4.jpeg';
import b5 from '../../images/b5.jpeg';
import b6 from '../../images/b6.jpeg';
import b7 from '../../images/b7.jpeg';
import b8 from '../../images/b8.jpeg';

const product=[
    {id:1,image:d1,category:"dog"},
    {id:2,image:d2,category:"dog"},
    {id:3,image:d3,category:"dog"},
    {id:4,image:d4,category:"dog"},
    {id:5,image:d5,category:"dog"},
    {id:6,image:d6,category:"dog"},
    {id:7,image:d7,category:"dog"},
    {id:8,image:d8,category:"dog"},
    {id:9,image:d9,category:"dog"},
    {id:10,image:d10,category:"dog"},
    {id:11,image:d11,category:"dog"},
    {id:12,image:d12,category:"dog"},
    {id:13,image:d13,category:"dog"},
    {id:14,image:d14,category:"dog"},
    {id:15,image:d15,category:"dog"},
    {id:16,image:c1,category:"cat"},
    {id:17,image:c2,category:"cat"},
    {id:18,image:c3,category:"cat"},
    {id:19,image:c4,category:"cat"},
    {id:20,image:c5,category:"cat"},
    {id:21,image:c6,category:"cat"},
    {id:22,image:c7,category:"cat"},
    {id:23,image:c8,category:"cat"},
    {id:24,image:c9,category:"cat"},
    {id:25,image:c10,category:"cat"},
    {id:26,image:c11,category:"cat"},
    {id:27,image:c12,category:"cat"},
    {id:28,image:c13,category:"cat"},
    {id:29,image:c14,category:"cat"},
    {id:30,image:c15,category:"cat"},
    {id:31,image:e1,category:"elephant"},
    {id:32,image:e2,category:"elephant"},
    {id:33,image:e3,category:"elephant"},
    {id:34,image:e4,category:"elephant"},
    {id:35,image:e5,category:"elephant"},
    {id:36,image:e6,category:"elephant"},
    {id:37,image:e7,category:"elephant"},
    {id:38,image:e8,category:"elephant"},
    {id:39,image:b1,category:"boy"},
    {id:40,image:b2,category:"boy"},
    {id:41,image:b3,category:"boy"},
    {id:42,image:b4,category:"boy"},
    {id:43,image:b5,category:"boy"},
    {id:44,image:b6,category:"boy"},
    {id:45,image:b7,category:"boy"},
    {id:46,image:b8,category:"boy"},

]
const Gallery = ({selectedCategory}) => {
  const[pic,setPic]=useState(product);
  const[openedImage,isOpenedImage]=useState(false);
  const[selectedImage,isSelectedImage]=useState(null);
  useEffect(()=>{
    if (selectedCategory=="All") {
      setPic(product);
    }
  else{
    const filterItem=product.filter((current)=>{
      return current.category===selectedCategory;
    })
    setPic(filterItem);
  }
},[selectedCategory]);
const openModel=(image)=>{
  isSelectedImage(image);
  isOpenedImage(true);
}
const closeModel=()=>{
  isOpenedImage(false);
  isSelectedImage(null);
} 
  return (
 <>
 <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 bg-slate-300'>

      {pic.map((pro)=>(
         <img key={pro.id} src={pro.image} onClick={()=>openModel(pro.image)} className='border-black border-2 w-[340px] h-[190px] hover:translate-y-2 hover:scale-105 transition-transform duration-300'/>        
      ))}
    </div>
  {openedImage && (
    <div className='flex top-0 iems-center justify-center h-full fixed  bg-black w-full'>
    <img src={selectedImage} alt="Selected" />
    <button onClick={closeModel} className='absolute top-4 right-8 text-white text-2xl'>X</button>
    </div>
  )}
  </>
);
};
export default Gallery
