
import React from "react";
import styles from "./Home.module.css";
import HeroSection from "../../components/sharedComponents/heroSection/HeroSection";
function Home() {
  return (
    <div>
      <HeroSection
        title="Award-winning custom designs and digital branding solutions"
        description="With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services."
        buttonText="Learn More"
        variant="home"
      />
    </div>
  );
}

export default Home;

