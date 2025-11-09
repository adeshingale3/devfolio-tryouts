import { FolderGit2, Medal, Trophy } from 'lucide-react'

const Achievements = () => {
  return (
    <div className='px-40 py-8'>
      <div className='bg-white rounded-xl shadow-md p-6 flex flex-col gap-3'>
        <h1 className='text-lg font-bold text-gray-400 montserrat '>DEVFOLIO STATS</h1>
        <div className='flex flex-row gap-4 justify-between px-2'>
          {/* 1 */}
          <div className='flex flex-row justify-between items-center w-70 h-22 bg-gray-100 rounded-xl px-3'>
            <div className='w-17 h-17 bg-orange-100 flex items-center justify-center rounded-xl'>
              <FolderGit2 color='orange' />
            </div>

            <div className='flex flex-col items-start text-sm font-bold mr-20'>
              <h2 className='text-lg montserrat text-gray-600'>3</h2>
              <h2 className='text-md text-gray-400 montserrat '>PROJECTS</h2>
            </div>
          </div>

          {/* 2 */}
          <div className='flex flex-row justify-between items-center w-70 h-22 bg-gray-100 rounded-xl px-3'>
            <div className='w-17 h-17 bg-orange-200 flex items-center justify-center rounded-xl'>
              <Medal />
            </div>

            <div className='flex flex-col items-start text-sm font-bold mr-30'>
              <h2 className='text-lg montserrat text-gray-600'>2</h2>
              <h2 className='text-md text-gray-400 montserrat '>Prizes</h2>
            </div>
          </div>

          {/* 3 */}
          <div className='flex flex-row justify-between items-center w-70 h-22 bg-gray-100 rounded-xl px-3'>
            <div className='w-17 h-17 bg-gray-300 flex items-center justify-center rounded-xl'>
              <Trophy color='black' />
            </div>

            <div className='flex flex-col items-start text-sm font-bold mr-20'>
              <h2 className='text-lg montserrat text-gray-600'>34</h2>
              <h2 className='text-md text-gray-400 montserrat '>Hackathons</h2>
            </div>
          </div>

          {/* 1 */}
          <div className='flex flex-row justify-between items-center w-70 h-22 bg-gray-100 rounded-xl px-3'>
            <div className='w-17 h-17 bg-gray-300 flex items-center justify-center rounded-xl'>
              <Trophy color='black' />
            </div>

            <div className='flex flex-col items-start text-sm font-bold mr-10'>
              <h2 className='text-lg montserrat text-gray-600'>0</h2>
              <h2 className='text-md text-gray-400 montserrat '>Hackathons Org.</h2>
            </div>
          </div>


        </div>

      </div>
    </div>
  )
}

export default Achievements