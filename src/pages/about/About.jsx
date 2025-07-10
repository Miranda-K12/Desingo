import React from "react";
import HeroSection from "../../components/sharedComponents/heroSection/HeroSection"

function About() {
  return <div>
     {/* HeroSection */}
      <HeroSection
        title="About Us"
        description="Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences."
        floatingImage="aboutFloating"
        variant="about"
      />
  </div>;
}

export default About;
