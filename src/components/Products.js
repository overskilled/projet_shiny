import { useMemo } from "react";
import styles from "./css/Products.module.css";

const Products = ({
  productImageId,
  productDescription,
  propLeft,
  propAlignItems,
  propTop,
  propGap,
  propJustifyContent,
  propWidth,
}) => {
  const card06Style = useMemo(() => {
    return {
      left: propLeft,
      alignItems: propAlignItems,
      top: propTop,
    };
  }, [propLeft, propAlignItems, propTop]);

  const titleStyle = useMemo(() => {
    return {
      gap: propGap,
      justifyContent: propJustifyContent,
      width: propWidth,
    };
  }, [propGap, propJustifyContent, propWidth]);

  return (
    <div className={styles.card06} style={card06Style}>
      <img className={styles.imageIcon} alt="" src={productImageId} />
      <div className={styles.title} style={titleStyle}>
        <div className={styles.tageaCream}>{productDescription}</div>
        <div className={styles.starParent}>
          <img className={styles.starIcon} alt="" src="/star.svg" />
          <div className={styles.div}>4.8</div>
        </div>
      </div>
      <div className={styles.text}>
        <div className={styles.text1}>
          <div className={styles.fcfa}>10000FCFA</div>
          <div className={styles.text2}>
            <div className={styles.div1}>30%</div>
          </div>
        </div>
        <b className={styles.fcfa1}>70000FCFA</b>
      </div>
    </div>
  );
};

export default Products;
