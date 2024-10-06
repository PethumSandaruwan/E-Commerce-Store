import { create } from "zustand";
import toast from "react-hot-toast";
import axios from "../lib/axios";

const useProductStore=create({set}=>({
    Products:[],
loading:false,

setProducts:(products)=>set({products}),

createProduct:async (productData)=>{
    set({loading:true});
    try {
        
    } catch (error) {
        
    }
}
})),


