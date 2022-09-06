import React from 'react'
import { motion } from 'framer-motion';

function Home() {
  return (
    <motion.div 
    className='Home'
    initial={{y:50}}
    animate={{y:0}}
    >
      <h1>Find Your Holiday Home</h1>
    </motion.div> 
  )
}

export default Home