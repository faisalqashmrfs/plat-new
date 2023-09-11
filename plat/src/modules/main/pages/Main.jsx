import React from 'react'
import  './MainStyle.css';
import Hero from '../components/Hero';
import TapCatig from '../components/TapCatig';
import Instructor from '../components/Instructor';
import ClassEducation from '../components/ClassEducation';



function Main () {
  return (
    <>
    <Hero />
    <TapCatig />
    <Instructor />
    <ClassEducation />
    </>
  )
}

export default Main;