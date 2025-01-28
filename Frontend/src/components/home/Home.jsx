import React from "react";
import Blog from "./component/blog/Blog";
import Layout from "../client/layout/Layout";
import Contact from "./component/contact/Contact";
import HeroSection from "./component/hero-section/HeroSection";
import Speciality from "./component/speciality/Speciality.jsx";
import DoctorsTeam from "./component/team/DoctorsTeam";
import Testimonial from "./component/testimonial/Testimonial";

export default function Home() {
  return (
    <div>
      {/* <Navbars/> */}
      <Layout>
        <HeroSection />
        <Speciality />
        <DoctorsTeam />
        <Blog />
        <Testimonial />
        <Contact />
      </Layout>
      {/* <Footer/> */}
    </div>
  );
}
