// import { Github, Globe, Linkedin, Share } from 'lucide-react';

// const TechIcon = ({ children, name }: { children: React.ReactNode; name: string }) => (
//   <div className="flex-shrink-0 w-12 h-12 p-3" title={name}>
//     <div className="w-full h-full">{children}</div>
//   </div>
// );

// const ReactIcon = () => (
//   <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
//     <circle cx="12" cy="12" r="2" fill="#61DAFB" />
//     <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1" fill="none" />
//     <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(60 12 12)" />
//     <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(-60 12 12)" />
//   </svg>
// );

// const TailwindIcon = () => (
//   <svg viewBox="0 0 24 24" fill="#06B6D4" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
//     <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35C13.39 10.78 14.8 12 18 12c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C16.61 7.22 15.2 6 12 6zm-6 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35C7.39 16.78 8.8 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.61 13.22 9.2 12 6 12z" />
//   </svg>
// );

// const NodeIcon = () => (
//   <svg viewBox="0 0 24 24" fill="#339933" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
//     <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 
//     c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 
//     c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 
//     L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 
//     c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 
//     c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,19.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 
//     c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.570,0.329,0.924,0.944,0.924,1.603 
//     v10.15c0,0.659-0.354,1.265-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z"/>
//   </svg>
// );

// const TypeScriptIcon = () => (
//   <svg viewBox="0 0 24 24" fill="#3178C6" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
//     <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 
//     23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 
//     5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 
//     0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 
//     1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 
//     1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 
//     4.687 4.687 0 0 1-1.512-.493v-2.63a5.28 5.28 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 6.416 6.416 0 0 0-1-.432c-.412-.172-.765-.368-1.057-.586a3.772 3.772 0 0 1-.716-.716 2.095 2.095 0 0 1-.404-1.156c0-.514.123-.943.369-1.287.246-.344.58-.624 1.004-.84a4.494 4.494 0 0 1 1.47-.517 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
//   </svg>
// );

// const Profile = () => {
//   const techStack = [
//     { icon: <ReactIcon />, name: "React" },
//     { icon: <TailwindIcon />, name: "Tailwind CSS" },
//     { icon: <NodeIcon />, name: "Node.js" },
//     { icon: <TypeScriptIcon />, name: "TypeScript" },
//   ];

//   const handleShare = async () => {
//     if (navigator.share) {
//       try {
//         await navigator.share({
//           title: "Adesh - Devfolio Profile",
//           text: "Check out my Devfolio profile!",
//           url: window.location.href,
//         });
//       } catch (err) {
//         console.log("Error sharing:", err);
//       }
//     } else {
//       navigator.clipboard.writeText(window.location.href);
//       alert("Link copied to clipboard!");
//     }
//   };

//   return (
//     <div className="w-full px-8 md:px-20 lg:px-40 py-8 bg-white">
//       <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
//         {/* Profile Info */}
//         <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
//           <img
//             className="w-28 h-28 sm:w-20 sm:h-20 rounded-full ring-4 ring-white shadow-lg transition-all duration-300 hover:scale-105"
//             src="https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fusers%2Fb7e8d98e741f48eea51cab6b859695d1%2Favatar-f1185bde-bb1b-44ca-b5e1-243e01e8cbbf.jpeg&w=360&q=75"
//             alt="Profile"
//           />
//           <div className="flex flex-col gap-1">
//             <h1 className="text-2xl font-bold text-gray-800 montserrat">Adesh Ingale</h1>
//             <h2 className="text-sm text-gray-600 montserrat">@Adeshx</h2>
//           </div>
//         </div>

//         {/* Skills - Hidden on Mobile */}
//         <div className="hidden sm:block relative w-[50%] overflow-hidden">
//           <div className="flex animate-scroll gap-6">
//             {[...Array(3)].map((_, i) => (
//               <div key={i} className="flex gap-6">
//                 {techStack.map((tech, index) => (
//                   <TechIcon key={`${i}-${index}`} name={tech.name}>
//                     {tech.icon}
//                   </TechIcon>
//                 ))}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Social Links */}
//         <div className="flex flex-row gap-3 items-center justify-center sm:justify-end flex-wrap">
//           <a
//             href="https://github.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="p-2 sm:p-3 bg-white rounded-full shadow-md hover:border-2 hover:border-blue-400 transition-all group text-gray-700 hover:text-gray-900 hover:bg-gray-50"
//             title="GitHub"
//           >
//             <Github size={18} />
//           </a>
//           <a
//             href="https://linkedin.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="p-2 sm:p-3 bg-white rounded-full shadow-md hover:border-2 hover:border-blue-400 transition-all group text-blue-600"
//             title="LinkedIn"
//           >
//             <Linkedin size={18} />
//           </a>
//           <a
//             href="https://portfolio.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="p-2 sm:p-3 bg-white rounded-full shadow-md hover:border-2 hover:border-blue-400 transition-all group text-gray-700 hover:text-gray-900 hover:bg-gray-50"
//             title="Portfolio"
//           >
//             <Globe size={18} />
//           </a>
//           <button
//             onClick={handleShare}
//             className="p-2 sm:p-3 bg-white rounded-full shadow-md hover:border-2 hover:border-blue-400 transition-all group"
//             title="Share"
//           >
//             <Share color="black" size={18} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;



import { Github, Globe, Linkedin, Share } from 'lucide-react';

const TechIcon = ({ children, name }: { children: React.ReactNode; name: string }) => (
  <div className="flex-shrink-0 w-12 h-12 p-3" title={name}>
    <div className="w-full h-full">{children}</div>
  </div>
);

const ReactIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="12" cy="12" r="2" fill="#61DAFB" />
    <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1" fill="none" />
    <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(-60 12 12)" />
  </svg>
);

const TailwindIcon = () => (
  <svg viewBox="0 0 24 24" fill="#06B6D4" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35C13.39 10.78 14.8 12 18 12c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C16.61 7.22 15.2 6 12 6zm-6 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35C7.39 16.78 8.8 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.61 13.22 9.2 12 6 12z" />
  </svg>
);

const NodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="#339933" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737..." />
  </svg>
);

const TypeScriptIcon = () => (
  <svg viewBox="0 0 24 24" fill="#3178C6" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75..." />
  </svg>
);

const Profile = () => {
  const techStack = [
    { icon: <ReactIcon />, name: 'React' },
    { icon: <TailwindIcon />, name: 'Tailwind CSS' },
    { icon: <NodeIcon />, name: 'Node.js' },
    { icon: <TypeScriptIcon />, name: 'TypeScript' },
  ];

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Adesh - Devfolio Profile',
          text: 'Check out my Devfolio profile!',
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="w-full px-0 sm:px-0 lg:px-40 bg-white">
      {/* TOP SECTION */}
      <div className="flex flex-col lg:flex-row items-center gap-8 pt-4">
        {/* Left Section (Profile Info + Socials for Mobile) */}
        <div className="flex flex-row gap-4 justify-between items-center gap-26">
          {/* Profile Image */}
          <div className='flex flex-col sm:flex-col md:flex-row items-start sm:items-start md:items-center gap-4'>
            <img
            className="w-24 h-24 rounded-full ring-4 ring-white shadow-lg transition-all duration-300 hover:scale-105"
            src="https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fusers%2Fb7e8d98e741f48eea51cab6b859695d1%2Favatar-f1185bde-bb1b-44ca-b5e1-243e01e8cbbf.jpeg&w=360&q=75"
            alt="Profile"
          />

          {/* Name + Username */}
          <div className="flex flex-col items-start sm:items-start">
            <h1 className="text-lg sm:text-lg lg:text-2xl font-bold text-gray-800 montserrat">Adesh Ingale</h1>
            <h2 className="text-[12px] sm:text-[12px] lg:text-sm text-gray-600 montserrat">@Adeshx</h2>
          </div>
          </div>

          {/* Social Links (Row on mobile) */}
          <div className="flex flex-col gap-3 items-center flex-wrap sm:hidden">
            <div className=' flex flex-row'>
                <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full shadow-md hover:border-2 hover:border-blue-400 transition-all"
              title="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full shadow-md hover:border-2 hover:border-blue-400 transition-all text-blue-600"
              title="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            </div>
            <div className='flex flex-row'>
                <a
              href="https://portfolio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full shadow-md hover:border-2 hover:border-blue-400 transition-all"
              title="Portfolio"
            >
              <Globe size={18} />
            </a>
            <button
              onClick={handleShare}
              className="p-2 bg-white rounded-full shadow-md hover:border-2 hover:border-blue-400 transition-all"
              title="Share"
            >
              <Share size={18} color="black" />
            </button>
            </div>
            
          </div>
        </div>

        {/* Skills (Hidden on mobile) */}
        <div className="hidden sm:block relative w-[50%] overflow-hidden">
          <div className="flex animate-scroll gap-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex gap-6">
                {techStack.map((tech, index) => (
                  <TechIcon key={`${i}-${index}`} name={tech.name}>
                    {tech.icon}
                  </TechIcon>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Social Links (Visible only on desktop) */}
        <div className="hidden sm:flex flex-row gap-3 items-center justify-center flex-wrap">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 sm:p-3 bg-white rounded-full shadow-md hover:border-2 hover:border-blue-400 transition-all"
            title="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 sm:p-3 bg-white rounded-full shadow-md hover:border-2 hover:border-blue-400 transition-all text-blue-600"
            title="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://portfolio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 sm:p-3 bg-white rounded-full shadow-md hover:border-2 hover:border-blue-400 transition-all"
            title="Portfolio"
          >
            <Globe size={18} />
          </a>
          <button
            onClick={handleShare}
            className="p-2 sm:p-3 bg-white rounded-full shadow-md hover:border-2 hover:border-blue-400 transition-all"
            title="Share"
          >
            <Share size={18} color="black" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
