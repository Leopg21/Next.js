// // Footer.js
// export default function Footer() {
//     return (
//       <footer className="p-4 bg-gray-800 text-white text-center">
//         <p>&copy; 2025 My Portfolio</p>
//       </footer>
//     );
//   }


import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-6 px-6 md:px-12 lg:px-24 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Branding */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-xl font-semibold tracking-wide">Emmanuel Aidelokhai Ileogben</h2>
          <p className="text-gray-400 text-sm">© 2025 All Rights Reserved.</p>
        </div>

        {/* Social Links */}
        <div className="flex gap-6">
          <a href="https://www.linkedin.com/in/emmanuel-a-ileogben-348363234" className="text-gray-400 hover:text-white transition duration-300">LinkedIn</a>
          <a href="https://github.com/Leopg21" className="text-gray-400 hover:text-white transition duration-300">GitHub</a>
          {/* <a href="#" className="text-gray-400 hover:text-white transition duration-300">Twitter</a> */}
        </div>
      </div>

      {/* Glassmorphism Effect */}
      <div className="absolute inset-100 bg-white bg-opacity-100 backdrop-blur-lg rounded-lg"></div>
    </footer>
  );
};

export default Footer;
