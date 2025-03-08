// // Navbar.js
// export default function Navbar() {
//     return (
//       <nav className="p-4 bg-gray-700 text-white flex justify-between">
//         <h2 className="text-xl">Logo</h2>
//         <ul className="flex gap-4">
//           <li>Home</li>
//           <li>About</li>
//           <li>Projects</li>
//           <li>Contact</li>
//         </ul>
//       </nav>
//     );
//   }

// import Link from 'next/link';
// import styles from '../styles/Navbar.module.css';

// export default function Navbar() {
//   return (
//     <nav className={styles.nav}>
//       <ul>
//         <li><Link href="/">Home</Link></li>
//         <li><Link href="/about">About</Link></li>
//         <li><Link href="/contact">Contact</Link></li>
//       </ul>
//     </nav>
//   );
// }

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md shadow-md py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">
          MyPortfolio
        </Link>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          <li><Link href="/" className="hover:text-blue-400 transition duration-300">Home</Link></li>
          <li><Link href="/about" className="hover:text-blue-400 transition duration-300">About</Link></li>
          <li><Link href="/contact" className="hover:text-blue-400 transition duration-300">Contact</Link></li>
        </ul>

        {/* Hamburger Icon */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-16 left-0 w-full bg-gray-900 text-white py-6 shadow-lg"
          >
            <ul className="flex flex-col items-center space-y-6">
              <li><Link href="/" className="hover:text-blue-400 transition duration-300" onClick={() => setIsOpen(false)}>Home</Link></li>
              <li><Link href="/about" className="hover:text-blue-400 transition duration-300" onClick={() => setIsOpen(false)}>About</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition duration-300" onClick={() => setIsOpen(false)}>Contact</Link></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
