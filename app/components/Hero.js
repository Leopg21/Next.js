// // Hero.js
// export default function Hero() {
//     return (
//       <section className="p-8 bg-yellow-100 text-gray-900 text-center">
//         <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
//       </section>
//     );
//   }





import React from 'react';
import Image from 'next/image';
import Profile from '../../public/images/';

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center bg-gray-900 text-white px-6">
      {/* Profile Image */}
      <div className="relative w-40 h-40 md:w-48 md:h-48 mb-6 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg">
        <Image src="/images/" alt="Emmanuel A. Ileogben" width={192} height={192} className="object-cover" />
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold">
        Hello there, I'm <span className="text-blue-500">Emmanuel A. Ileogben</span>
      </h1>

      {/* Description */}
      <p className="text-lg md:text-xl mt-4 max-w-2xl text-gray-300 leading-relaxed">
        I'm an AI Software Engineer breaking into the 
        <span className="text-yellow-600 font-semibold"> Software Architecture</span>, 
        <span className="text-yellow-600 font-semibold"> System Optimization</span>, and 
        <span className="text-yellow-600 font-semibold"> Secure Application Development</span> space.  
        I love solving problems and building secure, user-friendly applications.
      </p>

      {/* CTA Button */}

      <a 
        href="#projects"
        className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-md text-lg font-medium 
        hover:bg-red-600 transition duration-300 shadow-lg">
        View My Work
      </a>
    </section>
  );
};

export default Hero;