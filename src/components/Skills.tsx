import React from 'react'
import { FaReact } from 'react-icons/fa';
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from 'react-icons/si';

const Skills = () => {
  const TechIcon = ({ children, name }: { children: React.ReactNode; name: string }) => (
    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 p-2 sm:p-3" title={name}>
      <div className="w-full h-full">{children}</div>
    </div>
  );

  const techStack = [
    { icon: <FaReact size={22} />, name: 'React' },
    { icon: <RiTailwindCssFill size={22} />, name: 'Tailwind CSS' },
    { icon: <RiNextjsFill size={22} />, name: 'Next.js' },
    { icon: <SiTypescript size={22} />, name: 'TypeScript' },
  ];

  return (
    <div className="px-4 sm:px-10 lg:px-40">
      <div className="relative w-full overflow-hidden py-4 my-6 -mb-2 rounded-xl">
        {/* For desktop: animated marquee */}
        <div className="hidden sm:flex animate-scroll gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex gap-4">
              {techStack.map((tech, index) => (
                <div
                  key={`${i}-${index}`}
                  className="flex flex-row gap-2 items-center justify-center bg-gray-100 px-4 py-2 rounded-lg hover:scale-105 transition-all duration-300"
                >
                  <TechIcon name={tech.name}>{tech.icon}</TechIcon>
                  <h1 className="text-sm font-medium text-gray-700 whitespace-nowrap">{tech.name}</h1>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* For mobile: static grid layout */}
        
      </div>
    </div>
  )
}

export default Skills;
