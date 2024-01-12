import { useMemo } from "react";
import styles from "./css/Hours.module.css";

const Hours = ({
  rectangleDivTop,
  rectangleDivCursor,
  divCursor,
  onJourEtHeureClick,
  onHeureContainerClick,
}) => {
  const jourEtHeureStyle = useMemo(() => {
    return {
      top: rectangleDivTop,
      cursor: rectangleDivCursor,
    };
  }, [rectangleDivTop, rectangleDivCursor]);

  const heureStyle = useMemo(() => {
    return {
      cursor: divCursor,
    };
  }, [divCursor]);

  return (
    <div
      className={styles.jourEtHeure}
      onClick={onJourEtHeureClick}
      style={jourEtHeureStyle}
    >
      <div className={styles.cadre} />
      <img className={styles.backIcon} alt="" src="/back@2x.png" />
      <img className={styles.forwardIcon} alt="" src="/forward@2x.png" />
      <div className={styles.dateJour}>
        <div className={styles.jour}>Vendredi</div>
        <div className={styles.date}>12 Jan.</div>
      </div>
      <div className={styles.dateJour1}>
        <div className={styles.jour}>Samedi</div>
        <div className={styles.date}>13 Jan.</div>
      </div>
      <div className={styles.dateJour2}>
        <div className={styles.jour}>Dimanche</div>
        <div className={styles.date}>14 Jan.</div>
      </div>
      <div className={styles.dateJour3}>
        <div className={styles.jour}>Lundi</div>
        <div className={styles.date}>15 Jan.</div>
      </div>
      <div className={styles.dateJour4}>
        <div className={styles.jour}>Mardi</div>
        <div className={styles.date}>16 Jan.</div>
      </div>
      <div className={styles.dateJour5}>
        <div className={styles.jour}>Mercredi</div>
        <div className={styles.date}>17 Jan.</div>
      </div>
      <div className={styles.dateJour6}>
        <div className={styles.jour}>Jeudi</div>
        <div className={styles.date}>18 Jan.</div>
      </div>
      <div className={styles.colonneHeure}>
        <div
          className={styles.heure}
          style={heureStyle}
          onClick={onHeureContainerClick}
        >
          <div className={styles.heureChild} />
          <div className={styles.div}>11 : 00</div>
        </div>
        <div className={styles.heure1}>
          <div className={styles.heureChild} />
          <div className={styles.div}>14 : 00</div>
        </div>
        <div className={styles.heure2}>
          <div className={styles.heureChild} />
          <div className={styles.div}>16 : 30</div>
        </div>
        <div className={styles.heure3}>
          <div className={styles.heureChild} />
          <div className={styles.div}>12 : 00</div>
        </div>
        <div className={styles.heure4}>
          <div className={styles.heureChild} />
          <div className={styles.div}>14 : 30</div>
        </div>
        <div className={styles.heure5}>
          <div className={styles.heureChild} />
          <div className={styles.div}>17 : 00</div>
        </div>
        <div className={styles.heure6}>
          <div className={styles.heureChild} />
          <div className={styles.div}>12 : 30</div>
        </div>
        <div className={styles.heure7}>
          <div className={styles.heureChild} />
          <div className={styles.div}>15 : 00</div>
        </div>
        <div className={styles.heure8}>
          <div className={styles.heureChild} />
          <div className={styles.div}>17 : 30</div>
        </div>
        <div className={styles.heure9}>
          <div className={styles.heureChild} />
          <div className={styles.div}>13 : 00</div>
        </div>
        <div className={styles.heure10}>
          <div className={styles.heureChild} />
          <div className={styles.div}>15 : 30</div>
        </div>
        <div className={styles.heure11}>
          <div className={styles.heureChild} />
          <div className={styles.div}>18 : 00</div>
        </div>
        <div className={styles.heure12}>
          <div className={styles.heureChild} />
          <div className={styles.div}>13 : 30</div>
        </div>
        <div className={styles.heure13}>
          <div className={styles.heureChild} />
          <div className={styles.div}>16 : 00</div>
        </div>
        <div className={styles.heure14}>
          <div className={styles.heureChild} />
          <div className={styles.div}>18 : 30</div>
        </div>
      </div>
      <div className={styles.colonneHeure1}>
        <div className={styles.heure}>
          <div className={styles.heureChild} />
          <div className={styles.div}>11 : 00</div>
        </div>
        <div className={styles.heure1}>
          <div className={styles.heureChild} />
          <div className={styles.div}>14 : 00</div>
        </div>
        <div className={styles.heure2}>
          <div className={styles.heureChild} />
          <div className={styles.div}>16 : 30</div>
        </div>
        <div className={styles.heure3}>
          <div className={styles.heureChild} />
          <div className={styles.div}>12 : 00</div>
        </div>
        <div className={styles.heure4}>
          <div className={styles.heureChild} />
          <div className={styles.div}>14 : 30</div>
        </div>
        <div className={styles.heure5}>
          <div className={styles.heureChild} />
          <div className={styles.div}>17 : 00</div>
        </div>
        <div className={styles.heure6}>
          <div className={styles.heureChild} />
          <div className={styles.div}>12 : 30</div>
        </div>
        <div className={styles.heure7}>
          <div className={styles.heureChild} />
          <div className={styles.div}>15 : 00</div>
        </div>
        <div className={styles.heure8}>
          <div className={styles.heureChild} />
          <div className={styles.div}>17 : 30</div>
        </div>
        <div className={styles.heure9}>
          <div className={styles.heureChild} />
          <div className={styles.div}>13 : 00</div>
        </div>
        <div className={styles.heure10}>
          <div className={styles.heureChild} />
          <div className={styles.div}>15 : 30</div>
        </div>
        <div className={styles.heure11}>
          <div className={styles.heureChild} />
          <div className={styles.div}>18 : 00</div>
        </div>
        <div className={styles.heure12}>
          <div className={styles.heureChild} />
          <div className={styles.div}>13 : 30</div>
        </div>
        <div className={styles.heure13}>
          <div className={styles.heureChild} />
          <div className={styles.div}>16 : 00</div>
        </div>
        <div className={styles.heure14}>
          <div className={styles.heureChild} />
          <div className={styles.div}>18 : 30</div>
        </div>
      </div>
      <div className={styles.colonneHeure2}>
        <div className={styles.heure}>
          <div className={styles.heureChild} />
          <div className={styles.div}>11 : 00</div>
        </div>
        <div className={styles.heure1}>
          <div className={styles.heureChild} />
          <div className={styles.div}>14 : 00</div>
        </div>
        <div className={styles.heure2}>
          <div className={styles.heureChild} />
          <div className={styles.div}>16 : 30</div>
        </div>
        <div className={styles.heure3}>
          <div className={styles.heureChild} />
          <div className={styles.div}>12 : 00</div>
        </div>
        <div className={styles.heure4}>
          <div className={styles.heureChild} />
          <div className={styles.div}>14 : 30</div>
        </div>
        <div className={styles.heure5}>
          <div className={styles.heureChild} />
          <div className={styles.div}>17 : 00</div>
        </div>
        <div className={styles.heure6}>
          <div className={styles.heureChild} />
          <div className={styles.div}>12 : 30</div>
        </div>
        <div className={styles.heure7}>
          <div className={styles.heureChild} />
          <div className={styles.div}>15 : 00</div>
        </div>
        <div className={styles.heure8}>
          <div className={styles.heureChild} />
          <div className={styles.div}>17 : 30</div>
        </div>
        <div className={styles.heure9}>
          <div className={styles.heureChild} />
          <div className={styles.div}>13 : 00</div>
        </div>
        <div className={styles.heure10}>
          <div className={styles.heureChild} />
          <div className={styles.div}>15 : 30</div>
        </div>
        <div className={styles.heure11}>
          <div className={styles.heureChild} />
          <div className={styles.div}>18 : 00</div>
        </div>
        <div className={styles.heure12}>
          <div className={styles.heureChild} />
          <div className={styles.div}>13 : 30</div>
        </div>
        <div className={styles.heure13}>
          <div className={styles.heureChild} />
          <div className={styles.div}>16 : 00</div>
        </div>
        <div className={styles.heure14}>
          <div className={styles.heureChild} />
          <div className={styles.div}>18 : 30</div>
        </div>
      </div>
      <div className={styles.colonneHeure3}>
        <div className={styles.heure}>
          <div className={styles.heureChild} />
          <div className={styles.div}>11 : 00</div>
        </div>
        <div className={styles.heure1}>
          <div className={styles.heureChild} />
          <div className={styles.div}>14 : 00</div>
        </div>
        <div className={styles.heure2}>
          <div className={styles.heureChild} />
          <div className={styles.div}>16 : 30</div>
        </div>
        <div className={styles.heure3}>
          <div className={styles.heureChild} />
          <div className={styles.div}>12 : 00</div>
        </div>
        <div className={styles.heure4}>
          <div className={styles.heureChild} />
          <div className={styles.div}>14 : 30</div>
        </div>
        <div className={styles.heure5}>
          <div className={styles.heureChild} />
          <div className={styles.div}>17 : 00</div>
        </div>
        <div className={styles.heure6}>
          <div className={styles.heureChild} />
          <div className={styles.div}>12 : 30</div>
        </div>
        <div className={styles.heure7}>
          <div className={styles.heureChild} />
          <div className={styles.div}>15 : 00</div>
        </div>
        <div className={styles.heure8}>
          <div className={styles.heureChild} />
          <div className={styles.div}>17 : 30</div>
        </div>
        <div className={styles.heure9}>
          <div className={styles.heureChild} />
          <div className={styles.div}>13 : 00</div>
        </div>
        <div className={styles.heure10}>
          <div className={styles.heureChild} />
          <div className={styles.div}>15 : 30</div>
        </div>
        <div className={styles.heure11}>
          <div className={styles.heureChild} />
          <div className={styles.div}>18 : 00</div>
        </div>
        <div className={styles.heure12}>
          <div className={styles.heureChild} />
          <div className={styles.div}>13 : 30</div>
        </div>
        <div className={styles.heure13}>
          <div className={styles.heureChild} />
          <div className={styles.div}>16 : 00</div>
        </div>
        <div className={styles.heure14}>
          <div className={styles.heureChild} />
          <div className={styles.div}>18 : 30</div>
        </div>
      </div>
      <div className={styles.colonneHeure4}>
        <div className={styles.heure}>
          <div className={styles.heureChild} />
          <div className={styles.div}>11 : 00</div>
        </div>
        <div className={styles.heure1}>
          <div className={styles.heureChild} />
          <div className={styles.div}>14 : 00</div>
        </div>
        <div className={styles.heure2}>
          <div className={styles.heureChild} />
          <div className={styles.div}>16 : 30</div>
        </div>
        <div className={styles.heure3}>
          <div className={styles.heureChild} />
          <div className={styles.div}>12 : 00</div>
        </div>
        <div className={styles.heure4}>
          <div className={styles.heureChild} />
          <div className={styles.div}>14 : 30</div>
        </div>
        <div className={styles.heure5}>
          <div className={styles.heureChild} />
          <div className={styles.div}>17 : 00</div>
        </div>
        <div className={styles.heure6}>
          <div className={styles.heureChild} />
          <div className={styles.div}>12 : 30</div>
        </div>
        <div className={styles.heure7}>
          <div className={styles.heureChild} />
          <div className={styles.div}>15 : 00</div>
        </div>
        <div className={styles.heure8}>
          <div className={styles.heureChild} />
          <div className={styles.div}>17 : 30</div>
        </div>
        <div className={styles.heure9}>
          <div className={styles.heureChild} />
          <div className={styles.div}>13 : 00</div>
        </div>
        <div className={styles.heure10}>
          <div className={styles.heureChild} />
          <div className={styles.div}>15 : 30</div>
        </div>
        <div className={styles.heure11}>
          <div className={styles.heureChild} />
          <div className={styles.div}>18 : 00</div>
        </div>
        <div className={styles.heure12}>
          <div className={styles.heureChild} />
          <div className={styles.div}>13 : 30</div>
        </div>
        <div className={styles.heure13}>
          <div className={styles.heureChild} />
          <div className={styles.div}>16 : 00</div>
        </div>
        <div className={styles.heure14}>
          <div className={styles.heureChild} />
          <div className={styles.div}>18 : 30</div>
        </div>
      </div>
      <div className={styles.colonneHeure5}>
        <div className={styles.heure}>
          <div className={styles.heureChild} />
          <div className={styles.div}>11 : 00</div>
        </div>
        <div className={styles.heure1}>
          <div className={styles.heureChild} />
          <div className={styles.div}>14 : 00</div>
        </div>
        <div className={styles.heure2}>
          <div className={styles.heureChild} />
          <div className={styles.div}>16 : 30</div>
        </div>
        <div className={styles.heure3}>
          <div className={styles.heureChild} />
          <div className={styles.div}>12 : 00</div>
        </div>
        <div className={styles.heure4}>
          <div className={styles.heureChild} />
          <div className={styles.div}>14 : 30</div>
        </div>
        <div className={styles.heure5}>
          <div className={styles.heureChild} />
          <div className={styles.div}>17 : 00</div>
        </div>
        <div className={styles.heure6}>
          <div className={styles.heureChild} />
          <div className={styles.div}>12 : 30</div>
        </div>
        <div className={styles.heure7}>
          <div className={styles.heureChild} />
          <div className={styles.div}>15 : 00</div>
        </div>
        <div className={styles.heure8}>
          <div className={styles.heureChild} />
          <div className={styles.div}>17 : 30</div>
        </div>
        <div className={styles.heure9}>
          <div className={styles.heureChild} />
          <div className={styles.div}>13 : 00</div>
        </div>
        <div className={styles.heure10}>
          <div className={styles.heureChild} />
          <div className={styles.div}>15 : 30</div>
        </div>
        <div className={styles.heure11}>
          <div className={styles.heureChild} />
          <div className={styles.div}>18 : 00</div>
        </div>
        <div className={styles.heure12}>
          <div className={styles.heureChild} />
          <div className={styles.div}>13 : 30</div>
        </div>
        <div className={styles.heure13}>
          <div className={styles.heureChild} />
          <div className={styles.div}>16 : 00</div>
        </div>
        <div className={styles.heure14}>
          <div className={styles.heureChild} />
          <div className={styles.div}>18 : 30</div>
        </div>
      </div>
    </div>
  );
};

export default Hours;
