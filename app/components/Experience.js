// 'use client';

// import React from 'react';

// const Experience = () => {
//   return (
//     <section id="experience" className="bg-gray-900 text-white py-12 px-6 md:px-12 lg:px-24">
//       <div className="max-w-3xl mx-auto text-center">
//         <h2 className="text-4xl font-extrabold text-blue-500 mb-4">My Experience</h2>
//         <p className="text-gray-400 text-lg leading-relaxed">
//           I am a passionate <strong className="text-yellow-600 mb-4">Software Engineer, Web Developer and Programmer</strong> dedicated to building secure and efficient digital solutions. 
//           With an increasing prowess in developing secure web applications, and crafting clean, optimized code, 
//           I thrive at the intersection of technology and AI solutions.
//         </p>
//         {/* <p className="text-gray-400 text-lg leading-relaxed mt-4">
//           My experience spans designing modern websites, analyzing cybersecurity threats, and implementing programming best practices 
//           to create robust and user-friendly applications. I am always eager to learn, adapt, and contribute to innovative tech solutions.
//         </p> */}
//       </div>
//     </section>
//   );
// };

// export default Experience;


'use client';

import React from 'react';

const Experience = () => {
  const experiences = [
    {
      year: '2025',
      role: 'Software Engineer',
      description: 'Dedicated to building secure and efficient digital solutions. Strong focus on AI solutions and modern web development.',
    },
    {
      year: '2025',
      role: 'Web Developer',
      description: 'Developing secure web applications with clean, optimized code. Gaining skill in frontend and backend technologies.',
    },
    {
      year: '2025',
      role: 'Programmer',
      description: 'Crafting clean, maintainable code while analyzing cybersecurity threats and implementing best practices.',
    },
  ];

  return (
    <section id="experience" className="bg-gray-100 text-gray-900 py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold text-blue-600 text-center mb-6">My Experience</h2>
        <div className="relative border-l-4 border-blue-500 pl-6">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-8 relative">
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2.5 top-2 border-2 border-white shadow-md"></div>
              <div className="ml-6">
                <h3 className="text-xl font-bold text-gray-800">{exp.year}</h3>
                <h4 className="text-2xl font-semibold text-blue-500">{exp.role}</h4>
                <p className="text-gray-700">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
