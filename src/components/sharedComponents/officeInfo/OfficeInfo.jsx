import styles from "./OfficeInfo.module.css";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";

function CountryCard({ imageSrc, title, buttonText }) {
  const navigate = useNavigate();

  return (
    <div className={styles.cardWrapper}>
      <img src={imageSrc} alt={title} className={styles.CountryImage} />
      <h3 className={styles.cardTitle}>{title}</h3>
      <Button onClick={() => navigate("/locations")}>{buttonText}</Button>
    </div>
  );
}
export default CountryCard;
