import React from 'react'
import { motion } from 'framer-motion'

const OrderSummary = () => {
  return (
    <motion.div
    className='space-y-4 rounded-lg border border-gray-700 bg-gray-800 p-4 shadow-sm sm:p-6'
    initial={{opacity:0,y:20}}
    animate={{opacity:1,y:0}}
    transition={{duration:0.5}}
    >
      
    </motion.div>
  )
}

export default OrderSummary
