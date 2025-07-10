import styles from "./OfficeInfo.module.css";
import Button from "../button/Button";
function CountryCard({ imageSrc, title, buttonText }) {
  return (
    <div className={styles.cardWrapper}>
      <img src={imageSrc} alt={title} className={styles.CountryImage} />
      <h3 className={styles.cardTitle}>{title}</h3>
      <Button>{buttonText}</Button>
    </div>
  );
}
export default CountryCard;
