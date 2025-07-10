import React from "react";
import styles from "./Home.module.css";
import HeroSection from "../../components/sharedComponents/heroSection/HeroSection";
import InfoCard from "../../components/sharedComponents/infoCard/InfoCard";
import imageWeb from "../../assets/home/desktop/image-web-design-large.jpg";
import imageApp from "../../assets/home/desktop/image-app-design.jpg";
import imageGraphic from "../../assets/home/desktop/image-graphic-design.jpg";
import CompanyValue from "../../components/sharedComponents/companyValue/CompanyValue";
import CompanyValueData from "../../components/sharedComponents/companyValue/CompanyValueData";

function Home() {
  return (
    <>
      <div>
        <HeroSection
          title="Award-winning custom designs and digital branding solutions"
          description="With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services."
          buttonText="Learn More"
          variant="home"
        />
      </div>
      <div className={styles.gridContainer}>
        <InfoCard
          title="Web Design"
          link="/web-design"
          backgroundImage={imageWeb}
          className={styles.webCard}
        />
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
      <section className={styles.CompanyValueContainer}>
        {CompanyValueData.map(({ image, title, description }) => (
          <CompanyValue
            key={title}
            image={image}
            title={title}
            description={description}
          />
        ))}
      </section>
    </>
  );
}

export default Home;
