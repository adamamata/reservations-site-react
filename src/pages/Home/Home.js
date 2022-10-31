import React from 'react'
import { motion } from 'framer-motion';
import Searchbar from '../../components/Searchbar/Searchbar';

function Home() {
    return (
      <motion.div 
      className='Home'
      initial={{y:50}}
      animate={{y:0}}
      >
        <h1>Find the perfect venue.</h1>
        <Searchbar/>
      </motion.div> 
    )
}

export default Home