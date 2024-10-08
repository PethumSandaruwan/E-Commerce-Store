import React, { useEffect } from 'react'
import { useProductStore } from '../stores/useProductStore'

const CategoryPage = () => {
    const{fetchProductsByCategory,products}=useProductStore()
    useEffect(()=>{
        fetchProductsByCategory("shoes")
    },[fetchProductsByCategory]);
    console.log("products",products)
  return (
    <div>
      
    </div>
  )
}

export default CategoryPage
