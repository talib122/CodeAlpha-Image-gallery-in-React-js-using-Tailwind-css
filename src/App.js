import { useState } from 'react';
import './App.css';
import Gallery from './Components/Gallery/Gallery';

function App() {
  const[selectedCategory,setSelectedCategory]=useState("All");
  const FilterItem=(category)=>{
 setSelectedCategory(category);
  }
  return (
    <div>
      <div className='flex items-center justify-center '><h1 className='text-5xl md:text-6xl bg-gradient-to-r from-pink-400 to-blue-800 bg-clip-text text-transparent mt-[40px] mb-[10px]'>Gallery</h1></div>
      <hr className='border-t-2 w-[250px] md:w-[500px] mx-auto border-gray-400 mb-[40px]'/>
      <div className='flex justify-center gap-4 md:gap-6 mb-[40px]'>
        <button onClick={()=>FilterItem("dog")} className='px-2 md:px-4 py-2  border-2 border-red-500 rounded-2xl bg-gradient-to-r from-pink-400 to-blue-600 text-white text-[20px]'>Dog</button>
        <button onClick={()=>FilterItem("cat")} className='px-2 md:px-4 py-2  border-2 border-red-500 rounded-2xl bg-gradient-to-r from-pink-400 to-blue-600 text-white text-[20px]'>Cat</button>
        <button onClick={()=>FilterItem("elephant")} className='px-2 md:px-4 py-2  border-2 border-red-500 rounded-2xl bg-gradient-to-r from-pink-400 to-blue-600 text-white text-[20px]'>Elephant</button>
        <button onClick={()=>FilterItem("boy")} className='px-2 md:px-4 py-2  border-2 border-red-500 rounded-2xl bg-gradient-to-r from-pink-400 to-blue-600 text-white text-[20px]'>Boy</button>
        <button onClick={()=>FilterItem("All")} className='px-2 md:px-4 py-2  border-2 border-red-500 rounded-2xl bg-gradient-to-r from-pink-400 to-blue-600 text-white text-[20px]'>All</button>
      </div>
      <Gallery selectedCategory={selectedCategory}/>
    </div>
  );
}

export default App;
