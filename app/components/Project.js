// import React from "react";

// const projects = [
//   {
//     title: "Portfolio Website",
//     description:
//       "A personal portfolio built with Next.js, showcasing my projects and skills.",
//     tech: ["Next.js", "Tailwind CSS", "Vercel"],

//     link: "https://emmanuelai.vercel.app",
//     image: "/portfolio-preview.png",
//   },
//   {
//     title: "Portfolio Website",
//     description:
//       "A personal portfolio built with HTML, showcasing my projects and skills.",
//     tech: ["HTML", "CSS", "Bootstrap", "Vercel"],

//     link: "https://emmanuelileogben.vercel.app",
//     image: "/secure-login-preview.png",
//   },

// ];
// export default function Projects() {
//   return (
//     <section id="projects" className="py-20 bg-dark text-white">
//     <div className="text-center mb-12">
//       <h2 className="text-4xl font-bold text-pink">Projects</h2>
//       <p className="text-lg mt-2">
//         Here are some of the projects I&lsquo;ve worked on.
//       </p>
//     </div>

//     <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//       {projects.map((project, index) => (
//         <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
//           <img
//             src={project.image}
//             alt={project.title}
//             className="rounded-lg mb-4"
//           />
//           <h3 className="text-2xl font-semibold">{project.title}</h3>
//           <p className="text-gray-400 mt-2">{project.description}</p>
//           <div className="mt-3">
//             {project.tech.map((tech, i) => (
//               <span
//                 key={i}
//                 className="bg-pink text-white px-2 py-1 rounded text-sm mr-2"
//               >
//                 {tech}
//               </span>
//             ))}
//           </div>
//           <a
//             href={project.link}
//             target="_blank"
//             className="mt-4 inline-block text-pink hover:underline"
//           >
//             View Project →
//           </a>
//         </div>
//       ))}
//     </div>
//   </section>
//   )
// }


import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio built with Next.js, showcasing my projects and skills.",
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
    link: "https://emmanuelai.vercel.app",
    image: "/images/nextjs_site_image.png",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio built with HTML, showcasing my projects and skills.",
    tech: ["HTML", "CSS", "Bootstrap", "Vercel"],
    link: "https://emmanuelileogben.vercel.app",
    image: "/images/html_site_image.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900 text-white px-8 md:px-16 lg:px-32">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-400">Projects</h2>
        <p className="text-lg mt-2 text-gray-300">
          Here are some of the projects I&lsquo;ve worked on.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
            <p className="text-gray-400 mt-2">{project.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              className="mt-4 inline-block text-blue-400 hover:underline font-semibold"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
