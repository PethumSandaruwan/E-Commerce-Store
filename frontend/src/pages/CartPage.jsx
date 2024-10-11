import React from 'react'
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';

import { useCartStore } from '../stores/useCartStore'
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import PeopleAlsoBought from '../components/PeopleAlsoBought';
import OrderSummary from '../components/OrderSummary';

const CartPage = () => {
    const {cart}=useCartStore();

  return (
    <div className='py-8 md:py-16'>
        <div className='mx-auto ,max-w-screen-xl px-4 2xl:px-0'>
            <div className='mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8'>
            <motion.div
            className='mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl'
            initial={{opacity:0,x:-20}}
            animate={{opacity:1,x:0}}
            transition={{duration:0.5,delay:0.2}}
            >
                {cart.length===0?(
                    <EmptyCartUI/>
                ):(
                    <div className='space-y-6'>
                        {cart.map((item)=>(
                            <CartItem key={item._id} item={item}/>

                            
                        ))}
                    </div>
                
                )}
                {cart.length>0 && <PeopleAlsoBought/>}
            </motion.div>
            {cart.length>0&&(
              <motion.div
              className='mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full'
              initial={{opacity:0,x:20}}
              animate={{opacity:1,x:0}}
              transition={{duration:0.5,delay:0.4}}
              
              >
               
               <OrderSummary/>

              </motion.div>
            )}


            </div>
        </div>
      
    </div>
  )
}

export default CartPage;

const EmptyCartUI = () => (
    <motion.div
      className="flex flex-col items-center justify-center py-16 space-y-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ShoppingCart className="w-24 h-24 text-gray-300" />
      <h3 className="text-2xl font-semibold">Your Cart Is Empty</h3>
      <p className="text-gray-400">
        Looks Like You {"Haven't"} Added Anything To Your Cart Yet.
      </p>
      <Link
        className="px-6 py-2 mt-4 text-white transition-colors rounded-md bg-emerald-500 hover:bg-emerald-600"
        to={"/"}
      >
        Star Shopping
      </Link>
    </motion.div>
  );
