// // Header.js
// export default function Header() {
//     return (
//       <header className="p-4 bg-gray-900 text-white text-center">
//         <h1 className="text-xl font-bold">My Portfolio</h1>
//       </header>
//     );
//   }


// import React from 'react';
// import { motion } from 'framer-motion';

// const Header = () => {
//   return (
//     <motion.header 
//       initial={{ opacity: 0, y: -20 }} 
//       animate={{ opacity: 1, y: 0 }} 
//       transition={{ duration: 0.6 }}
//       className="fixed top-0 left-0 w-full bg-opacity-10 backdrop-blur-lg shadow-md text-white py-4 px-6 md:px-12 flex items-center justify-between z-50"
//     >
//       <h1 className="text-2xl font-bold tracking-wide">Emmanuel A. Ileogben</h1>
//     </motion.header>
//   );
// };

// export default Header;


'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -10 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 2.0, ease: 'easeInOut' }}
      className="sticky top-0 left-0 w-full bg-opacity-20 backdrop-blur-md shadow-md text-white py-3 px-6 md:px-12 flex items-center justify-between z-50"
    >
      <h1 className="text-l font-bold tracking-wide">Portfolio</h1>
    </motion.header>
  );
};

export default Header;


