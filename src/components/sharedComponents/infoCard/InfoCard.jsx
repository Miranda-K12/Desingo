import { Link } from "react-router-dom";
import styles from "./InfoCard.module.css";
import arrow from "../../../assets/shared/desktop/icon-right-arrow.svg";

function InfoCard({ title, link, backgroundImage, className }) {
  return (
    <Link
      to={link}
      className={`${styles.blackcard} ${className}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.overlay}>
        <h2>{title}</h2>
        <p>
          View Projects
          <img src={arrow} alt="arrow" className={styles.arrow} />
        </p>
      </div>
    </Link>
  );
}

export default InfoCard;
