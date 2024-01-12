import { useMemo } from "react";
import styles from "./css/Services.module.css";

const Services = ({
  illustration,
  placeMarker,
  time,
  planner,
  propLeft,
  propTop,
}) => {
  const services1Style = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  return (
    <div className={styles.services} style={services1Style}>
      <img className={styles.cadreIcon} alt="" src="/cadre.svg" />
      <img className={styles.illustrationIcon} alt="" src={illustration} />
      <b className={styles.titreService}>Coiffeur</b>
      <div className={styles.boutonSelect}>
        <div className={styles.barreDeRecherche} />
        <b className={styles.slectionner}>Sélectionner</b>
      </div>
      <div className={styles.location}>
        <b className={styles.localisation}>Douala</b>
        <img className={styles.placeMarkerIcon} alt="" src={placeMarker} />
      </div>
      <div className={styles.heure}>
        <b className={styles.heure1}>12h - 20h</b>
        <img className={styles.timeIcon} alt="" src={time} />
      </div>
      <div className={styles.date}>
        <b className={styles.date1}>7j/7</b>
        <img className={styles.plannerIcon} alt="" src={planner} />
      </div>
      <div className={styles.xaf}>50 000 XAF</div>
    </div>
  );
};

export default Services;
