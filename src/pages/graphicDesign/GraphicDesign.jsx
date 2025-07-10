import React from 'react'
import FeatureCard from '../../components/sharedComponents/featureCard/FeatureCard';

import imag1 from "../../assets/graphic-design/desktop/image-change.jpg";
import imag2 from "../../assets/graphic-design/desktop/image-boxed-water.jpg";
import imag3 from "../../assets/graphic-design/desktop/image-science.jpg";

import styles from "./GraphicDesign.module.css";
import InfoCard from "../../components/sharedComponents/infoCard/InfoCard";
import imageWeb from "../../assets/home/desktop/image-web-design-large.jpg";
import imageApp from "../../assets/home/desktop/image-app-design.jpg";


function GraphicDesign() {
  return (
    <>
    <div className={styles.projects3}>
      
      <FeatureCard title="TIM BROWN" description="A book cover designed for Tim Brown’s new release, ‘Change’" image={imag1} />
      <FeatureCard title="BOXED WATER" description="A simple packaging concept made for Boxed Water" image={imag2}  />
      <FeatureCard title="SCIENCE!" description="A poster made in collaboration with the Federal Art Project" image={imag3} />

      
    </div>
     <div className={styles.gridContainer}>
      <InfoCard title="Web Design" link="/web-design" backgroundImage={imageWeb} className={styles.webCard} />
      <InfoCard title="App Design" link="/app-design" backgroundImage={imageApp} className={styles.appCard} />
      
    </div>
    </>
  );
}
export default GraphicDesign;