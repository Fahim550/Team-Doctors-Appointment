import React from 'react'
import HeroSection from './component/hero-section/HeroSection'
import Navbars from '../shared/navbar/Navbars'
import Services from './component/services/Services'
import Testimonial from './component/testimonial/Testimonial'
import DoctorsTeam from './component/team/DoctorsTeam'
import Contact from './component/contact/Contact'
import Footer from '../shared/footer/Footer'
import Layout from '../client/layout/Layout'

export default function Home() {
  
  return (
    <div>
        {/* <Navbars/> */}
        <Layout>
        <HeroSection/>
        <Services/>
        <Testimonial/>
        <DoctorsTeam/>
        <Contact/>
        </Layout>
        {/* <Footer/> */}
    </div>
  )
}
