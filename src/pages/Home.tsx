import React from 'react'
import Hero from '../components/Hero'
import Featured from '../components/Featured'
import TrustedBy from '../components/TrustedBy'
import NewsLetter from '../components/NewsLetter'
import Stats from '../components/Stats'

const Home:React.FC = () => {
  return (
    <div className="home w-full h-[100vh] bg-black">
        <Hero/>
        <Stats/>
        <Featured/>
        <TrustedBy/>
        <NewsLetter/>
    </div>
  )
}

export default Home