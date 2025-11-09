import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Profile from './components/Profile'
import About from './components/About'
import Achievements from './components/Achievements'
import GihubContribution from './components/GihubContribution'

const App = () => {
  return (
    <div className='bg-gray-100'>
      <Navbar />
      <Banner />
      <Profile />
      <About />
      <Achievements />
      <GihubContribution />

    </div>
  )
}

export default App