import React from "react";
import styles from "./About.module.css";
import Button from "../../components/sharedComponents/button/Button";
import CanadaImage from "../../assets/contact/desktop/Canada.png";
import UkImage from "../../assets/contact/desktop/uk.png";
import AustraliaImage from "../../assets/contact/desktop/Australia.png";

import HeroSection from "../../components/sharedComponents/heroSection/HeroSection";
import CountryCard from "../../components/sharedComponents/officeInfo/OfficeInfo";
import BrandsSrory from "../../components/sharedComponents/brandStory/BrandStory";
// images for BrandsSrory component
import bgImage from "../../assets/about/desktop/brand-cover.png";
import floatImg1 from "../../assets/about/desktop/brand1.jpg";
import floatImg2 from "../../assets/about/desktop/brand2.png";

function About() {
  return (
    <div>
      {/* HeroSection */}
      <HeroSection
        title="About Us"
        description="Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences."
        floatingImage="aboutFloating"
        variant="about"
      />

      <BrandsSrory
        title="World-class talent"
        description="We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.
Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand's story and mission."
        backgroundImage={bgImage}
        floatingImage={floatImg1}
        imagePosition="left"
      />

      <div className={styles.countryList}>
        <CountryCard
          imageSrc={CanadaImage}
          title="Canada"
          buttonText="See Location"
        />
        <CountryCard
          imageSrc={AustraliaImage}
          title="Australia"
          buttonText="See Location"
        />
        <CountryCard
          imageSrc={UkImage}
          title="United Kingdom"
          buttonText="See Location"
        />
      </div>
      <BrandsSrory
        title="World-class talent"
        description="We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.
Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand's story and mission."
        backgroundImage={bgImage}
        floatingImage={floatImg2}
        imagePosition="right"
      />
    </div>
  );
}

export default About;
