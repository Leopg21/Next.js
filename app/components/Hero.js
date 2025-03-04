import React from 'react';
import Image from 'next/image';
import Profile from '../../public/images/16.jpeg';

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center bg-gray-900 text-white px-6">
      {/* Profile Image */}
      <div className="relative w-40 h-40 md:w-48 md:h-48 mb-6 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg">
        {/* spell-checker: disable-next-line */}
        <Image src="/images/16.jpeg" alt="Emmanuel A. Ileogben" width={182} height={182} className="object-cover" />
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold">
        {/* spell-checker: disable-next-line */}
        Hello there, I am <span className="text-blue-500">Emmanuel Ileogben</span>
      </h1>

      {/* Description */}
      <p className="text-lg md:text-xl mt-4 max-w-2xl text-gray-300 leading-relaxed">
        I am an AI Software Engineer breaking into the 
        <span className="text-yellow-600 font-semibold"> Software Architecture</span>, 
        <span className="text-yellow-600 font-semibold"> System Optimization</span>, and 
        <span className="text-yellow-600 font-semibold"> Secure Application Development</span> space.  
        I love solving problems and building secure, user-friendly applications.
      </p>

      {/* CTA Button */}
      {/* <a 
        href="#projects"
        className="mt-6 px-6 py-3 bg-pink-500 text-white rounded-md text-lg font-medium 
        hover:bg-pink-600 transition duration-300 shadow-lg"
      >
        View My Work
      </a> */}

    </section>
  );
};

export default Hero;
