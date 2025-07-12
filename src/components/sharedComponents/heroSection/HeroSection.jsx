import styles from "./HeroSection.module.css";

const HeroSection = ({
  title,
  description,
  floatingImage = null,
  buttonText = null,
  variant = "", // "home", "about", "web", "app", "graphic"
  scrollTargetRef = null, // for scrolling on homepage
}) => {
  const handleScroll = () => {
    if (scrollTargetRef?.current) {
      scrollTargetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section
      className={`${styles.heroSection} ${variant ? styles[variant] : ""}`}
    >
      {floatingImage && (
        <div className={`${styles.floatingImage} ${styles[floatingImage]}`} />
      )}
      <div className={styles.textContent}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
        {buttonText && <button className={styles.button} onClick={handleScroll}>{buttonText}</button>}
      </div>
    </section>
  );
};

export default HeroSection;
