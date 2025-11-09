import { useState } from 'react'

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Recent hackathons (shown initially)
  const recentHackathons = [
    { name: 'HackMIT', logo: 'https://logo.clearbit.com/mit.edu', url: 'https://hackmit.org' },
    { name: 'HackHarvard', logo: 'https://logo.clearbit.com/harvard.edu', url: 'https://hackharvard.org' },
    { name: 'HackPrinceton', logo: 'https://logo.clearbit.com/princeton.edu', url: 'https://hackprinceton.com' },
    { name: 'HackNYU', logo: 'https://logo.clearbit.com/nyu.edu', url: 'https://hackny.org' },
    { name: 'HackDuke', logo: 'https://logo.clearbit.com/duke.edu', url: 'https://hackduke.org' },
    { name: 'HackUCLA', logo: 'https://logo.clearbit.com/ucla.edu', url: 'https://hackucla.com' },
    { name: 'HackBerkeley', logo: 'https://logo.clearbit.com/berkeley.edu', url: 'https://hackberkeley.com' },
    
  ]

  // All participated hackathons (shown in modal)
  const allHackathons = [
    { name: 'HackMIT', logo: 'https://logo.clearbit.com/mit.edu', url: 'https://hackmit.org' },
    { name: 'HackHarvard', logo: 'https://logo.clearbit.com/harvard.edu', url: 'https://hackharvard.org' },
    { name: 'HackPrinceton', logo: 'https://logo.clearbit.com/princeton.edu', url: 'https://hackprinceton.com' },
    { name: 'HackNYU', logo: 'https://logo.clearbit.com/nyu.edu', url: 'https://hackny.org' },
    { name: 'HackStanford', logo: 'https://logo.clearbit.com/stanford.edu', url: 'https://hack.stanford.edu' },
    { name: 'HackCaltech', logo: 'https://logo.clearbit.com/caltech.edu', url: 'https://hack.caltech.edu' },
    { name: 'HackYale', logo: 'https://logo.clearbit.com/yale.edu', url: 'https://hackyale.com' },
    { name: 'HackCornell', logo: 'https://logo.clearbit.com/cornell.edu', url: 'https://hackcornell.com' },
    { name: 'HackDuke', logo: 'https://logo.clearbit.com/duke.edu', url: 'https://hackduke.org' },
    { name: 'HackUCLA', logo: 'https://logo.clearbit.com/ucla.edu', url: 'https://hackucla.com' },
    { name: 'HackBerkeley', logo: 'https://logo.clearbit.com/berkeley.edu', url: 'https://hackberkeley.com' },
    { name: 'HackUSC', logo: 'https://logo.clearbit.com/usc.edu', url: 'https://hackusc.com' },
  ]

  return (
    <>
      <div className='w-full px-8 md:px-20 lg:px-40 py-6 bg-gradient-to-br from-white to-gray-50'>
        <div className='flex flex-col lg:flex-row justify-between items-start gap-12'>
        {/* About me */}
          <div className='flex flex-col gap-4 flex-1'>
            <h1 className='text-2xl text-lg font-bold text-gray-400 montserrat  group-hover:text-blue-600 transition-colors duration-300'>
              ABOUT ME
            </h1>
            <p className='text-md text-gray-600 leading-relaxed max-w-2xl'>
              Code ninja by day, graphic designer by night. Turning caffeine into cool projects and errors into learning opportunities. Let’s build something awesome (and debug it later)!
            </p>
          </div>

          {/* Recent Hackathons */}
          <div className='flex flex-col gap-4 flex-1 max-w-xl'>
            <div className='flex flex-row items-center justify-between gap-4'>
              <h1 className='text-lg font-bold text-gray-400 montserrat  group-hover:text-blue-600 transition-colors duration-300'>
                RECENT HACKATHONS
              </h1>
              <button
                onClick={() => setIsModalOpen(true)}
                className='px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-md flex items-center gap-2 group'
              >
                View More
                <svg 
                  className='w-4 h-4 group-hover:translate-x-1 transition-transform duration-300' 
                  fill='none' 
                  stroke='currentColor' 
                  viewBox='0 0 24 24'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                </svg>
              </button>
            </div>
            <div className='flex flex-row gap-4 flex-wrap'>
              {recentHackathons.map((hackathon, index) => (
                <a
                  key={index}
                  href={hackathon.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group relative bg-white h-14 w-14 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 overflow-hidden'
                >
                  <img
                    src={hackathon.logo}
                    alt={hackathon.name}
                    className='w-full h-full object-contain p-3 group-hover:scale-110 transition-transform duration-300'
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(hackathon.name)}&background=random&size=128`
                    }}
                  />
                  <div className='absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300 rounded-xl'></div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity duration-300'
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className='bg-white rounded-2xl shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden transform transition-all duration-300 scale-100'
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className='flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50'>
              <h2 className='text-2xl font-bold text-gray-800'>Participated Hackathons</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className='p-2 hover:bg-gray-200 rounded-lg transition-all duration-300 hover:scale-110 group'
                aria-label='Close modal'
              >
                <svg
                  className='w-6 h-6 text-gray-600 group-hover:text-gray-900 transition-colors duration-300'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className='p-6 overflow-y-auto max-h-[calc(90vh-100px)]'>
              <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
                {allHackathons.map((hackathon, index) => (
                  <a
                    key={index}
                    href={hackathon.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='group relative bg-white h-24 w-full rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 overflow-hidden border border-gray-100 hover:border-blue-300'
                  >
                    <img
                      src={hackathon.logo}
                      alt={hackathon.name}
                      className='w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-300'
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(hackathon.name)}&background=random&size=128`
                      }}
                    />
                    <div className='absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300 rounded-xl'></div>
                    <div className='absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                      <p className='text-white text-xs font-medium text-center truncate'>{hackathon.name}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
        </div>
    </div>
      )}
    </>
  )
}

export default About
