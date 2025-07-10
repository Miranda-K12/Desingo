
import InfoCard from "../../components/sharedComponents/infoCard/InfoCard";
import imageWeb from "../../assets/home/desktop/image-web-design-large.jpg";
import imageApp from "../../assets/home/desktop/image-app-design.jpg";
import imageGraphic from "../../assets/home/desktop/image-graphic-design.jpg";
import styles from "./Home.module.css";


 function Home() {
  return (
    <div className={styles.gridContainer}>
      <InfoCard title="Web Design" link="/web-design" backgroundImage={imageWeb} className={styles.webCard} />
      <InfoCard title="App Design" link="/app-design" backgroundImage={imageApp} className={styles.appCard} />
      <InfoCard title="Graphic Design" link="/graphic-design" backgroundImage={imageGraphic} className={styles.graphicCard} />
    </div>
  );
}

export default Home;