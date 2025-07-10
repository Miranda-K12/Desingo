import styles from "./CompanyValue.module.css"

function CompanyValue({ image, title, description }) {
  return (
    <article className={`${styles.CompanyValueArticle}`}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.textContent}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </article>
  );
}

export default CompanyValue;