import React from 'react'
import AllAlgoSteps from '../components/AlgoExpertSteps/AllAlgoSteps'
import Footer from '../components/Footer'
import Hero from '../components/Hero/Hero'
import MainNavigation from '../components/MainNavigation'

const AlgoExpert = () => {
  return (
    <>
        <MainNavigation />
        <Hero/>  
        <AllAlgoSteps/> 
        <Footer/>
    </>
  )
}

export default AlgoExpert