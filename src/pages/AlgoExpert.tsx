import React from 'react'
import AllAlgoSteps from '../components/AlgoExpertSteps/AllAlgoSteps'
import Footer from '../components/Footer'
import Hero from '../components/Hero/Hero'
import InterviewTable from '../components/InterviewTable'
import MainNavigation from '../components/MainNavigation'
import Outcomes from '../components/Outcomes'

const AlgoExpert = () => {
  return (
    <>
        <MainNavigation />
        <Hero/>  
        <AllAlgoSteps/> 
        <InterviewTable/>
        <Outcomes/>
        <Footer/>
    </>
  )
}

export default AlgoExpert