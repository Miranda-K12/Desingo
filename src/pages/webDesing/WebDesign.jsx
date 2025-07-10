import React from "react";
import FeatureCard from "../../components/sharedComponents/featureCard/FeatureCard";
import HeroSection from "../../components/sharedComponents/heroSection/HeroSection";
import img1 from "../../assets/web-design/desktop/image-express.jpg";
import img2 from "../../assets/web-design/desktop/image-transfer.jpg";
import img3 from "../../assets/web-design/desktop/image-photon.jpg";
import img4 from "../../assets/web-design/desktop/image-builder.jpg";
import img5 from "../../assets/web-design/desktop/image-blogr.jpg";
import img6 from "../../assets/web-design/desktop/image-camp.jpg";
import styles from "./WebDesign.module.css";
import InfoCard from "../../components/sharedComponents/infoCard/InfoCard";
import imageApp from "../../assets/home/desktop/image-app-design.jpg";
import imageGraphic from "../../assets/home/desktop/image-graphic-design.jpg";

function WebDesign() {
  return (
    <>
      <div>
        <HeroSection
          title="Web Design"
          description="We build websites that serve as powerful marketing tools 
and bring memorable brand experiences."
          variant="web"
        />
      </div>
      <div className={styles.projects}>
        <FeatureCard
          title="EXPRESS"
          description="A multi-carrier shipping website for ecommerce businesses"
          image={img1}
        />
        <FeatureCard
          title="TRANSFER"
          description="Site for low-cost money transfers and sending money within seconds"
          image={img2}
        />
        <FeatureCard
          title="PHOTON"
          description="A state-of-the-art music player with high-resolution audio and DSP effects"
          image={img3}
        />
        <FeatureCard
          title="BUILDER"
          description="Connects users with local contractors based on their location"
          image={img4}
        />
        <FeatureCard
          title="BLOGR"
          description="Blogr is a platform for creating an online blog or publication"
          image={img5}
        />
        <FeatureCard
          title="CAMP"
          description="Get expert training in coding, data, design, and digital marketing"
          image={img6}
        />
      </div>
      <div className={styles.gridContainer}>
        <InfoCard
          title="App Design"
          link="/app-design"
          backgroundImage={imageApp}
          className={styles.appCard}
        />
        <InfoCard
          title="Graphic Design"
          link="/graphic-design"
          backgroundImage={imageGraphic}
          className={styles.graphicCard}
        />
      </div>
    </>
  );
}

export default WebDesign;
