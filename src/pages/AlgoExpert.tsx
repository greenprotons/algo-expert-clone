import React from 'react'
import AllAlgoSteps from '../components/AlgoExpertSteps/AllAlgoSteps'
import DataStrutureCourse from '../components/DataStrutureCourse'
import EngineerSliderList from '../components/EngineerSliderList'
import Footer from '../components/Footer'
import Hero from '../components/Hero/Hero'
import InterviewTable from '../components/InterviewTable'
import LanguageList from '../components/LanguageList'
import MainNavigation from '../components/MainNavigation'
import NotationLanguage from '../components/NotationLanguage'
import Outcomes from '../components/Outcomes'
import PracticeEnvironment from '../components/PracticeEnvironment'
import SpanningCategoriesList from '../components/SpanningCategoriesList'
import VideoOverView from '../components/VideoOverView'

const AlgoExpert = () => {
  return (
    <>
        <MainNavigation />
        <Hero/>  
        <AllAlgoSteps/> 
        <InterviewTable/>
        <Outcomes/>
        <EngineerSliderList/>
        <SpanningCategoriesList/>
        <VideoOverView/>
        <DataStrutureCourse/>
        <LanguageList/>
        <PracticeEnvironment/>
        <NotationLanguage/>
        <Footer/>
    </>
  )
}

export default AlgoExpert