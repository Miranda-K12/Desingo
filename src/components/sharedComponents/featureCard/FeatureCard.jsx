import react from "react";
import styles from "./FeatureCard.module.css";

function FeatureCard({ title, description, image }) {
  return (
    <div className={styles.cards}>
      <img src={image} alt={title} />
      <div className={styles.info}>
        <h3>{title}</h3>
        <p className="p">{description}</p>
      </div>
    </div>
  );
}

export default FeatureCard;
