
import React from "react";

import Navbar from "components/Navbar.js";
import Header from "components/Header.js";
import Footer from "components/Footer.js";

import SectionCarousel from "views/sections/SectionCarousel.js";
import SectionNucleoIcons from "views/sections/SectionNucleoIcons.js";
import Contact from "./sections/Contact";
import MySkills from "./sections/MySkills";

function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <Navbar />
      <Header />
      <div className="main">
        <SectionCarousel />
        <SectionNucleoIcons />
        <MySkills />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default Index;
