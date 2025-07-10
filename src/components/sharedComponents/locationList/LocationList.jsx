import React from "react";
import styles from "./LocationList.module.css";
function LocationCard({
  title,
  location,
  contact,
  reverse = false,
  imageSources = {},
}) {
  const { default: defaultImg, tablet } = imageSources;

  return (
    <section
      className={`${styles.splitSection} ${reverse ? styles.reverse : ""}`}
    >
      <div className={styles.locationText}>
        <div className={styles.textWrapper}>
          <h2 className={styles.subHeader}>{title}</h2>
          <div className={styles.locationInfo}>
            <div className={styles.addressInfo}>{location}</div>
            <div className={styles.contactDetails}>{contact}</div>
          </div>
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <picture className={styles.image}>
          {tablet && <source media="(max-width: 1024px)" srcSet={tablet} />}
          {defaultImg ? <img src={defaultImg} alt={title} /> : null}
        </picture>
      </div>
    </section>
  );
}
export default LocationCard;

