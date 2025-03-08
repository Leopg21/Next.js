// // import React from 'react';

// // const About = () => {
// //   return (
// //     <section className="bg-gray-900 text-white py-12 px-6 md:px-12 lg:px-24">
// //       <div className="max-w-3xl mx-auto text-center">
// //         <h1 className="text-4xl font-extrabold text-blue-500">Emmanuel A.I.</h1>
// //         <h2 className="text-xl text-gray-300 mt-2">
// //           AI Software Engineer (SWE)
// //         </h2>
// //         <p className="text-gray-400 mt-6 leading-relaxed">
// //           I am an AI Software Engineer and Web Developer enthusiastic about
// //           building smart, efficient, and user-friendly applications. With a growing expertise in
// //           Next.js, TypeScript, and AI integration, I craft innovative solutions for
// //           various industries. Let us collaborate to bring cutting-edge ideas to life!
// //         </p>
        
// //         <div className="mt-6">
// //           <h3 className="text-lg font-semibold text-blue-400">Skills</h3>
// //           <p className="text-gray-200 mt-2">
// //             Next.js, React, JavaScript, Android Development, HTML, Python, Tailwind CSS, Bootstrap
// //           </p>
// //         </div>

// //         <div className="mt-6">
// //           <h3 className="text-lg font-semibold text-blue-400">Contact</h3>
// //           <p className="text-gray-300 mt-2">aidelokhaiileogben@gmail.com</p>
// //           <p className="text-gray-300">0265779052</p>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default About;


// import React from 'react';
// import Image from 'next/image';

// const About = () => {
//   return (
//     <section className="bg-gray-900 text-white py-12 px-6 md:px-12 lg:px-24">
//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
//         {/* Left Side - Text */}
//         <div className="flex-1 text-center md:text-left">
//           <h1 className="text-4xl font-extrabold text-blue-500">Emmanuel A.I.</h1>
//           <h2 className="text-xl text-gray-300 mt-2">AI Software Engineer (SWE)</h2>
//           <p className="text-gray-400 mt-6 leading-relaxed">
//             I am an AI Software Engineer and Web Developer enthusiastic about
//             building smart, efficient, and user-friendly applications. With a growing expertise in
//             Next.js, TypeScript, and AI integration, I craft innovative solutions for
//             various industries. Let us collaborate to bring cutting-edge ideas to life!
//           </p>
          
//           <div className="mt-6">
//             <h3 className="text-lg font-semibold text-blue-400">Skills</h3>
//             <p className="text-gray-200 mt-2">
//               Next.js, React, JavaScript, Android Development, HTML, Python, Tailwind CSS, Bootstrap
//             </p>
//           </div>

//           <div className="mt-6">
//             <h3 className="text-lg font-semibold text-blue-400">Contact</h3>
//             <p className="text-gray-300 mt-2">aidelokhaiileogben@gmail.com</p>
//             <p className="text-gray-300">0265779052</p>
//           </div>

//           <a
//             href="#contact"
//             className="mt-6 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
//           >
//             Get in Touch
//           </a>
//         </div>

//         {/* Right Side - Image */}
//         <div className="flex-1 flex justify-center">
//           <Image
//             src="/profile.png"
//             alt="Profile Picture"
//             width={350}
//             height={350}
//             className="rounded-full shadow-lg border-4 border-blue-400"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

"use client";
import React from 'react';

const About = () => {
  const scrollToContact = (e) => {
    e.preventDefault();
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-blue-50 text-gray-900 py-12 px-6 md:px-12 lg:px-24 flex justify-end">
      <div className="max-w-3xl text-right">
        <h1 className="text-4xl font-extrabold text-blue-600">Emmanuel A.I.</h1>
        <h2 className="text-xl text-gray-700 mt-2">
          AI Software Engineer (SWE)
        </h2>
        <p className="text-gray-800 mt-6 leading-relaxed">
          I am an AI Software Engineer and Web Developer enthusiastic about
          building smart, efficient, and user-friendly applications. With a growing expertise in
          Next.js, TypeScript, and AI integration, I craft innovative solutions for
          various industries. Let us collaborate to bring cutting-edge ideas to life!
        </p>
        
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-blue-500">Skills</h3>
          <p className="text-gray-700 mt-2">
            Next.js, React, JavaScript, Android Development, HTML, Python, Tailwind CSS, Bootstrap
          </p>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold text-blue-500">Contact</h3>
          <p className="text-gray-700 mt-2">aidelokhaiileogben@gmail.com</p>
          <p className="text-gray-700">0265779052</p>
        </div>

        <div className="mt-8">
          <button
            onClick={scrollToContact}
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-pink-500 transition duration-300"
          >
            Let's Connect
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
