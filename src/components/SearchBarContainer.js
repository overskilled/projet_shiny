import styles from "./css/SearchBarContainer.module.css";

const SearchBarContainer = () => {
  return (
    <div className={styles.barreDeRecherche}>
      <div className={styles.searchBarre} />
      <img
        className={styles.boutonSearchIcon}
        alt=""
        src="/bouton-search.svg"
      />
      <div className={styles.instituteSearch}>
        <div className={styles.barreDeRecherche1} />
        <div className={styles.specialisteInstitute}>
          Specialiste, Institute ...
        </div>
      </div>
      <div className={styles.locationSearch}>
        <div className={styles.barreDeRecherche2} />
        <div className={styles.location}>{`Location `}</div>
      </div>
    </div>
  );
};

export default SearchBarContainer;
