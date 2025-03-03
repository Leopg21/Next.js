import React from 'react';

const About = () => {
  return (
    <section className="bg-gray-900 text-white py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-blue-500">Emmanuel A.I.</h1>
        <h2 className="text-xl text-gray-300 mt-2">
          AI Software Engineer (SWE)
        </h2>
        <p className="text-gray-400 mt-6 leading-relaxed">
          I am an AI Software Engineer and Web Developer enthusiastic about
          building smart, efficient, and user-friendly applications. With a growing expertise in
          Next.js, TypeScript, and AI integration, I craft innovative solutions for
          various industries. Let's collaborate to bring cutting-edge ideas to life!
        </p>
        
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-blue-400">Skills</h3>
          <p className="text-gray-200 mt-2">
            Next.js, React, JavaScript, Android Development, HTML, Python, Tailwind CSS, Bootstrap
          </p>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold text-blue-400">Contact</h3>
          <p className="text-gray-300 mt-2">aidelokhaiileogben@gmail.com</p>
          <p className="text-gray-300">0265779052</p>
        </div>
      </div>
    </section>
  );
};

export default About;
