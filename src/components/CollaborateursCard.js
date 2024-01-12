import { useMemo } from "react";
import styles from "./css/CollaborateursCard.module.css";

const CollaborateursCard = ({ propTop, propLeft }) => {
  const collaborateursBoxStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div className={styles.collaborateursBox} style={collaborateursBoxStyle}>
      <div className={styles.collaborateursBoxChild} />
      <div className={styles.collaborateursBoxItem} />
      <div className={styles.collaborateursBoxInner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.collaborateursBoxChild1} />
      <div className={styles.collaborateursBoxChild2} />
      <div className={styles.collaborateursBoxChild3} />
      <div className={styles.collaborateursBoxChild4} />
      <b className={styles.nameCollab}>Steven</b>
      <b className={styles.nameCollab1}>Dilan</b>
      <b className={styles.nameCollab2}>Yvan</b>
      <b className={styles.nameCollab3}>Zeze</b>
      <b className={styles.nameCollab4}>Laurent</b>
      <b className={styles.nameCollab5}>Samuel</b>
      <b className={styles.nameCollab6}>Vladimir</b>
      <b className={styles.nameCollab7}>Pas de préférence</b>
      <div className={styles.initialGroup}>
        <div className={styles.cercleDePrsentation} />
        <b className={styles.initial}>S</b>
      </div>
      <div className={styles.initialGroup1}>
        <div className={styles.cercleDePrsentation} />
        <b className={styles.initial}>D</b>
      </div>
      <div className={styles.initialGroup2}>
        <div className={styles.cercleDePrsentation} />
        <b className={styles.initial}>Y</b>
      </div>
      <div className={styles.initialGroup3}>
        <div className={styles.cercleDePrsentation} />
        <b className={styles.initial}>Y</b>
      </div>
      <div className={styles.initialGroup4}>
        <div className={styles.cercleDePrsentation} />
        <b className={styles.initial}>Y</b>
      </div>
      <div className={styles.initialGroup5}>
        <div className={styles.cercleDePrsentation} />
        <b className={styles.initial}>Y</b>
      </div>
      <div className={styles.initialGroup6}>
        <div className={styles.cercleDePrsentation} />
        <b className={styles.initial}>Z</b>
      </div>
      <img
        className={styles.initialGroupIcon}
        alt=""
        src="/initial-group.svg"
      />
      <div className={styles.ellipseDiv} />
      <div className={styles.collaborateursBoxChild5} />
      <div className={styles.collaborateursBoxChild6} />
      <div className={styles.collaborateursBoxChild7} />
      <div className={styles.collaborateursBoxChild8} />
      <div className={styles.collaborateursBoxChild9} />
      <div className={styles.collaborateursBoxChild10} />
      <div className={styles.collaborateursBoxChild11} />
      <div className={styles.collaborateursBoxChild12} />
      <div className={styles.collaborateursBoxChild13} />
    </div>
  );
};

export default CollaborateursCard;
