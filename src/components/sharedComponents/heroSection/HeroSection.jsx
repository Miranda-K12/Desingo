import styles from "./HeroSection.module.css";

const HeroSection = ({
  title,
  description,
  floatingImage = null,
  buttonText = null,
  variant = "", // "home", "about", "web", "app", "graphic"
}) => {
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
        {buttonText && <button className={styles.button}>{buttonText}</button>}
      </div>
    </section>
  );
};

export default HeroSection;
