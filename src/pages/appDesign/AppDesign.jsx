
import React from "react";
import HeroSection from "../../components/sharedComponents/heroSection/HeroSection";

import FeatureCard from '../../components/sharedComponents/featureCard/FeatureCard';

import image1 from "../../assets/app-design/desktop/image-airfilter.jpg";
import image2 from "../../assets/app-design/desktop/image-eyecam.jpg";
import image3 from "../../assets/app-design/desktop/image-faceit.jpg";
import image4 from "../../assets/app-design/desktop/image-todo.jpg";
import image5 from "../../assets/app-design/desktop/image-loopstudios.jpg";

import styles from "./AppDesign.module.css";
import InfoCard from "../../components/sharedComponents/infoCard/InfoCard";

import imageWeb from "../../assets/home/desktop/image-web-design-large.jpg";
import imageGraphic from "../../assets/home/desktop/image-graphic-design.jpg";



function AppDesign() {
  return (
    <>
    <div>
      <HeroSection
        title="App Design"
        description="Our mobile designs bring intuitive digital solutions
 to your customers right at their fingertips."
        variant="app"
      />
    </div>
    <div className={styles.projects2}>
      
      <FeatureCard title="AIRFILTER" description="Solving the problem of poor indoor air quality by filtering the air" image={image1} />
      <FeatureCard title="EYECAM" description="Product that lets you edit your favorite photos and videos at any time" image={image2}  />
      <FeatureCard title="FACEIT" description="Get to meet your favorite internet superstar with the faceit app" image={image3} />
      <FeatureCard title="TODO" description="A todo app that features cloud sync with light and dark mode" image={image4} />
      <FeatureCard title="LOOPSTUDIOS" description="A VR experience app made for Loopstudios" image={image5} />
      
    </div>
    <div className={styles.gridContainer}>

      <InfoCard title="Web Design" link="/web-design" backgroundImage={imageWeb} className={styles.webCard} />
      <InfoCard title="Graphic Design" link="/graphic-design" backgroundImage={imageGraphic} className={styles.graphicCard} />
    </div>
    </>
  );
}
export default AppDesign;


