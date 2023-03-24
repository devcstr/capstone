import React, { useState } from 'react'
import Hero from '../components/Hero'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'


function Home() {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen) 
    }

  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle} />
    <Navbar toggle={toggle}/>
    <Hero />
    <InfoSection {...homeObjOne} />
    <InfoSection {...homeObjTwo} />
    <Services />
    <InfoSection {...homeObjThree} />
    <Footer />
    </>
  )
}

export default Home