import { useMemo } from "react";
import styles from "./css/Service.module.css";

const Service = ({
  propTop,
  propLeft,
  propCursor,
  propWidth,
  onBoutonSelectContainerClick,
}) => {
  const servicesStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const boutonSelectStyle = useMemo(() => {
    return {
      cursor: propCursor,
    };
  }, [propCursor]);

  const prendreRDVStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={styles.services} style={servicesStyle}>
      <img className={styles.cadreIcon} alt="" src="/cadre.svg" />
      <img
        className={styles.illustrationIcon}
        alt=""
        src="/illustration@2x.png"
      />
      <b className={styles.titreService}>{`Shiny Coiffure `}</b>
      <div className={styles.info}>Plus d’informations</div>
      <div className={styles.dateMidi}>Matin</div>
      <div className={styles.dateAprem}>Après midi</div>
      <div
        className={styles.boutonSelect}
        onClick={onBoutonSelectContainerClick}
        style={boutonSelectStyle}
      >
        <div className={styles.barreDeRecherche} />
        <b className={styles.prendreRdv} style={prendreRDVStyle}>
          Prendre RDV
        </b>
      </div>
      <div className={styles.emploieDuTemps}>
        <div className={styles.day}>
          <div className={styles.barreDeRecherche1} />
          <b className={styles.lun}>Lun</b>
        </div>
        <div className={styles.day1}>
          <div className={styles.barreDeRecherche1} />
          <b className={styles.lun}>Mer</b>
        </div>
        <div className={styles.day2}>
          <div className={styles.barreDeRecherche3} />
          <b className={styles.lun}>Mar</b>
        </div>
        <div className={styles.day3}>
          <div className={styles.barreDeRecherche3} />
          <b className={styles.lun}>Mar</b>
        </div>
        <div className={styles.day4}>
          <div className={styles.barreDeRecherche3} />
          <b className={styles.lun}>Mer</b>
        </div>
        <div className={styles.day5}>
          <div className={styles.barreDeRecherche1} />
          <b className={styles.lun}>Lun</b>
        </div>
      </div>
      <div className={styles.location}>
        <b className={styles.localisation}>Douala</b>
        <img className={styles.locationIcon} alt="" src="/location@2x.png" />
      </div>
      <div className={styles.avis}>
        <div className={styles.avis1}>{`4.0 ( 1000 avis) `}</div>
        <img className={styles.starIcon} alt="" src="/star@2x.png" />
      </div>
    </div>
  );
};

export default Service;
