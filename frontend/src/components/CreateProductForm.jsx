import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { PlusCircle,Upload,Loader } from 'lucide-react';

const catergories=["jean","t-shirt","shoe","glasses","jacket","suit","bag"];

const CreateProductForm = () => {
  const [newProduct,setNewProduct]=useState({
    name:"",
    description:"",
    price:"",
    category:"",
    image:"",
  });

 const loading=false;

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(newProduct);
  }
  const handleImageChange=(e)=>{
    const file=e.target.files[0];
    if(file){
      const reader=new FileReader();
      reader.onloadend=()=>{
        setNewProduct({...newProduct,image:reader.result})
      }
      reader.readAsDataURL(file);
    }
  }
  
  
  
    return (
   <motion.div
   className="bg-gray-800 shadow-lg rounded-lg p-8 mb-8 max-w-xl mx-auto"
   initial={{opacity:0,y:20}}
   animate={{opacity:1,y:0}}
   transition={{duration:0.8}}
   >
    <h2 className='text-2xl font-semibold mb-6 text-emerald-300'>
        Create New Product 
    </h2>
    <form  onSubmit={handleSubmit}className='space-y-4'>
        <div>
            <lable htmlFor='name' className='block text-sm font-medium text-gray-300'>
                Product Name 
            </lable>
            <input
            type='text'
            id='name'
            name='name'
            value={newProduct.name}
            onChange={(e)=>setNewProduct({...newProduct,name:e.target.value})}
            className='mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none 
            focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500'
            required
            />
        </div>
        <div>
            <lable htmlFor='name' className='block text-sm font-medium text-gray-300'>
                Description
            </lable>
            <input
            type='text'
            id='description'
            name='description'
            value={newProduct.description}
            onChange={(e)=>setNewProduct({...newProduct,description:e.target.value})}
            className='mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-8 px-3 text-white focus:outline-none 
            focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500'
            required
            />
        </div>
        <div>
            <lable htmlFor='name' className='block text-sm font-medium text-gray-300'>
                Price
            </lable>
            <input
            type='number'
            id='price'
            name='price'
            value={newProduct.price}
            onChange={(e)=>setNewProduct({...newProduct,price:e.target.value})}
            step='0.01'
            className='mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none 
            focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500'
            required
            />
        </div>
        <div>
            <lable htmlFor='name' className='block text-sm font-medium text-gray-300'>
                Category
            </lable>
            <select
            id='category'
            name='category'
            value={newProduct.category}
            onChange={(e)=>setNewProduct({...newProduct,category:e.target.value})}
            step='0.01'
            className='mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none 
            focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500'
            required
            >
              <option value=''>Select a category</option>
              {catergories.map((category)=>(
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
              </select>
        </div>
        <div className='mt-1 flex items-center'>
          <input type='file' id='image'  className='sr-only' accept='image/*'
          onChange={handleImageChange}
          />
          <label
          htmlFor='image'
          className='cursor-pointer bg-gray-700 py-2 px-3 border border-gray-600 rounded-md shadow-sm text-sm
          leading-4 font-medium text-gray-300 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offse focus:ring-emerald-500'
              >
                <Upload className='h-5 w-5 inline-block mr-2'/>
                Upload Image
              </label>
              {newProduct.image && <span className='ml-3 text-sm text-gray-400'>Image Uploaded</span>}
        </div>
        <button
        type='submit'
        className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm
        font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2
        focus-ring-offset-2 focus:ring-emerald-500 disabled:opacity-50'
        disabled={loading}
        >
          {loading?(
            <>
            <Loader className='mr2 h-5 w-5 animate-spin' aria-hidden='true'/>
            Loading...
            </>
          ):(
            <>
            <PlusCircle className='mr-2 h-5 w-5'/>
            Create Product 
            </>
          )
          }
        </button>

    </form>
   </motion.div>
  )
}

export default CreateProductForm
