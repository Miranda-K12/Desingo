import styles from "./BrandStory.module.css";

function BrandsSrory({
  title,
  description,
  backgroundImage,
  floatingImage,
  imagePosition = "right",
}) {
  const bgImage = {
    backgroundImage: `url(${backgroundImage})`,
  };

  const isLeft = imagePosition === "left";

  // რესპონსივზე order-ის დასარეგულირებლად
  const responsiveReorderClass = styles.responsiveImageFirst;

  return (
    <section
      className={`${styles.brandsSrory} ${
        !isLeft ? responsiveReorderClass : ""
      }`}
      style={bgImage}
    >
      <img
        src={floatingImage}
        alt={title}
        className={`${styles.floatingImage} ${
          isLeft ? styles.order1 : styles.order2
        }`}
      />
      <div
        className={`${styles.textContent} ${
          isLeft ? styles.order2 : styles.order1
        }`}
      >
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </section>
  );
}

export default BrandsSrory;
