import { Github, Globe, Linkedin, Share } from 'lucide-react';
import React from 'react'

// Tech Icons as SVG Components
const TechIcon = ({ children, name }: { children: React.ReactNode; name: string }) => (
    <div
        className="flex-shrink-0 w-12 h-12 p-3"
        title={name}
    >
        <div className="w-full h-full">
            {children}
        </div>
    </div>
)

const ReactIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="12" cy="12" r="2" fill="#61DAFB" />
        <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1" fill="none" />
        <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(-60 12 12)" />
    </svg>
)

const TailwindIcon = () => (
    <svg viewBox="0 0 24 24" fill="#06B6D4" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35C13.39 10.78 14.8 12 18 12c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C16.61 7.22 15.2 6 12 6zm-6 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35C7.39 16.78 8.8 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.61 13.22 9.2 12 6 12z" />
    </svg>
)

const NodeIcon = () => (
    <svg viewBox="0 0 24 24" fill="#339933" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,19.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.570,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.265-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.838-0.584-3.011-1.742c-0.02-0.14-0.14-0.242-0.282-0.242h-1.137c-0.143,0-0.273,0.106-0.291,0.253 c-0.188,2.317,1.129,3.934,4.721,3.934C17.501,17.007,19.099,15.807,19.099,13.993z" />
    </svg>
)

const TypeScriptIcon = () => (
    <svg viewBox="0 0 24 24" fill="#3178C6" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 4.687 4.687 0 0 1-1.512-.493v-2.63a5.28 5.28 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 6.416 6.416 0 0 0-1-.432c-.412-.172-.765-.368-1.057-.586a3.772 3.772 0 0 1-.716-.716 2.095 2.095 0 0 1-.404-1.156c0-.514.123-.943.369-1.287.246-.344.58-.624 1.004-.84a4.494 4.494 0 0 1 1.47-.517 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
    </svg>
)

const JavaScriptIcon = () => (
    <svg viewBox="0 0 24 24" fill="#F7DF1E" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
    </svg>
)

const PythonIcon = () => (
    <svg viewBox="0 0 24 24" fill="#3776AB" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M14.85 0c-.787 1.31-1.926 1.755-3.856 1.755-1.98 0-3.07-.445-3.856-1.755C6.35.445 5.21 0 3.28 0 1.35 0 .21.445-.576 1.755v2.66h7.17v.888H.006C-.6 5.31.21 6.22 1.755 6.665L.57 9.59c-.36.787-.36 1.755 0 2.66l1.185 2.925c-.787.445-1.35 1.31-1.755 2.22v2.66C1.35 23.555 2.49 24 4.42 24c1.98 0 3.07-.445 3.856-1.755.787 1.31 1.926 1.755 3.856 1.755 1.98 0 3.07-.445 3.856-1.755.787 1.31 1.926 1.755 3.856 1.755 1.93 0 3.07-.445 3.856-1.755V18.85c-.36-.787-.968-1.35-1.755-1.755l1.185-2.925c.36-.787.36-1.755 0-2.66L22.275 6.665c.787-.445 1.35-1.31 1.755-2.22V1.755C23.245.445 22.105 0 20.175 0c-1.98 0-3.07.445-3.856 1.755C15.532.445 14.393 0 12.463 0h-2.38zm-.57 1.185h2.38c1.35 0 2.22.36 2.66 1.185.445.787.445 1.755 0 2.66-.445.787-1.31 1.185-2.66 1.185h-2.38c-1.35 0-2.22-.36-2.66-1.185-.445-.787-.445-1.755 0-2.66.445-.787 1.31-1.185 2.66-1.185zm-9.48 15.75c.445.787 1.31 1.185 2.66 1.185h2.38c1.35 0 2.22-.36 2.66-1.185.445-.787.445-1.755 0-2.66-.445-.787-1.31-1.185-2.66-1.185h-2.38c-1.35 0-2.22.36-2.66 1.185-.445.787-.445 1.755 0 2.66z" />
    </svg>
)

const GitHubIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
)

const LinkedInIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
)

const ShareIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
)

const ExternalLinkIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
)

const Profile = () => {
    const techStack = [
        { icon: <ReactIcon />, name: 'React' },
        { icon: <TailwindIcon />, name: 'Tailwind CSS' },
        { icon: <NodeIcon />, name: 'Node.js' },
        { icon: <TypeScriptIcon />, name: 'TypeScript' },
        { icon: <JavaScriptIcon />, name: 'JavaScript' },
        // { icon: <PythonIcon />, name: 'Python' },
    ]

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Adesh - Devfolio Profile',
                    text: 'Check out my Devfolio profile!',
                    url: window.location.href,
                })
            } catch (err) {
                console.log('Error sharing:', err)
            }
        } else {
            // Fallback: copy to clipboard
            navigator.clipboard.writeText(window.location.href)
            alert('Link copied to clipboard!')
        }
    }

    return (
        <div className='w-full px-8 md:px-20 lg:px-40 py-8 bg-white'>
            <div className='flex flex-col lg:flex-row justify-between items-center gap-8'>
                {/* Profile Info */}
                <div className='flex flex-row items-center gap-4 group'>
                    <div className='relative'>
                        <img
                            className='w-20 h-20 rounded-full ring-4 ring-white shadow-lg group-hover:ring-blue-200 transition-all duration-300 group-hover:scale-105'
                            src='https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fusers%2Fb7e8d98e741f48eea51cab6b859695d1%2Favatar-f1185bde-bb1b-44ca-b5e1-243e01e8cbbf.jpeg&w=360&q=75'
                            alt="Profile"
                        />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h1 className='text-2xl font-bold text-gray-800 montserrat'>Adesh Ingale</h1>
                        <h2 className='text-sm text-gray-600 montserrat'>@Adeshx</h2>
                    </div>
                </div>

                {/* Skills - Horizontal Scrolling */}
                <div className="relative w-[50%] overflow-hidden">
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



                {/* Social Links & Share */}
                <div className='flex flex-row gap-4 items-center'>
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white rounded-full shadow-md hover:shadow-xl transition-all duration-100 hover:border-3 hover:border-blue-400 transition-all group text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                        title="GitHub"
                    >
                        <Github size={20} />
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white rounded-full shadow-md hover:border-3 hover:border-blue-400 transition-all group text-blue-600"
                        title="LinkedIn"
                    >
                        <Linkedin size={20} />
                    </a>
                    <a
                        href="https://portfolio.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white rounded-full shadow-md hover:border-3 hover:border-blue-400 transition-all group text-gray-700 hover:text-gray-900 hover:bg-gray-50 flex items-center gap-2"
                        title="Portfolio"
                    >
                        <Globe size={20}/>
                    </a>
                    <button
                        onClick={handleShare}
                        className="p-3 bg-white text-white rounded-full shadow-md hover:border-3 hover:border-blue-400 transition-all duration-300 group flex items-center gap-2"
                        title="Share"
                    >
                        <Share color='black' size={20} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Profile