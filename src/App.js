import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Venues from './pages/Venues/Venues';
import Deals from './pages/Deals/Deals';
import Contact from './pages/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import { motion } from 'framer-motion';
import ListHome from './pages/ListHome/ListHome';

function App() {
  return (
    <div className="App">
    <motion.div initial={{y: -50}} animate={{y:0}}>
      <Navbar/>
    </motion.div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/venues' element={<Venues/>}/>
        <Route path='/deals' element={<Deals/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/list' element={<ListHome/>} />
      </Routes>
    </div>
  );
}

export default App;
