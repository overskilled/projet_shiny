import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CollaborateursCard from "../components/CollaborateursCard";
import Hours from "../components/Hours";
import styles from "./css/ConfigurationDuPaiementAvec.module.css";

const ConfigurationDuPaiementAvec = () => {
  const navigate = useNavigate();

  const onNosServicesTextClick = useCallback(() => {
    navigate("/rservation-services");
  }, [navigate]);

  const onShinyLogoTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onBoutonConnexionContainerClick = useCallback(() => {
    navigate("/desktop-10");
  }, [navigate]);

  const onBoutonAjouterTablissementClick = useCallback(() => {
    navigate("/professinel-choice");
  }, [navigate]);

  const onJourEtHeureClick = useCallback(() => {
    navigate("/identification");
  }, [navigate]);

  return (
    <div className={styles.configurationDuPaiementAvec}>
      <Header
        connectionLabel="connexion"
        connectionId="/materialsymbolsperson.svg"
        showBoutonConnexion
        showRectangleDiv
        showBoutonAjouterTablissement
        rectangleDivVisible
        showAjouterVotreTablissement
        propTop="-1px"
        propCursor="pointer"
        propHeight="53.56%"
        propWidth="12.06%"
        propTop1="22.67%"
        propRight="1.54%"
        propBottom="23.78%"
        propLeft="86.4%"
        propHeight1="100%"
        propWidth1="100%"
        propTop2="0%"
        propRight1="0%"
        propBottom1="0%"
        propLeft1="0%"
        propHeight2="37.76%"
        propWidth2="44.18%"
        propTop3="33.4%"
        propLeft2="31.39%"
        propHeight3="62.24%"
        propWidth3="16.3%"
        propTop4="17.84%"
        propRight2="77.3%"
        propBottom2="19.92%"
        propLeft3="6.39%"
        propHeight4="53.56%"
        propWidth4="17.45%"
        propRight3="15.28%"
        propBottom3="23.78%"
        propHeight5="100%"
        propWidth5="100%"
        propTop5="0%"
        propRight4="0%"
        propBottom4="0%"
        propLeft4="0%"
        propHeight6="37.76%"
        propWidth6="79.51%"
        propTop6="33.4%"
        propLeft5="10.03%"
        onNosServicesTextClick={onNosServicesTextClick}
        onShinyLogoTextClick={onShinyLogoTextClick}
        onBoutonConnexionContainerClick={onBoutonConnexionContainerClick}
        onBoutonAjouterTablissementClick={onBoutonAjouterTablissementClick}
      />
      <Footer elginStCelinaTop="2212px" />
      <div className={styles.location}>
        <b className={styles.localisation}>Douala</b>
        <img className={styles.locationIcon} alt="" src="/location@2x.png" />
      </div>
      <div className={styles.avis}>
        <div className={styles.avis1}>{`4.0 ( 1000 avis) `}</div>
        <img className={styles.starIcon} alt="" src="/star@2x.png" />
      </div>
      <b className={styles.titreService}>{`Shiny Coiffure `}</b>
      <div className={styles.prestationSelect}>
        <div className={styles.cadre} />
        <div className={styles.enttePrestation}>
          <div className={styles.prestation}>Coupe Garçon - 14 ans</div>
          <div className={styles.supprimer}>supprimer</div>
          <div className={styles.avecQui}>Avec qui ?</div>
          <div className={styles.tempsPrix}>{`30 min `}</div>
          <div className={styles.tempsPrix1}> 8000 XAF</div>
        </div>
        <div className={styles.enttePrestation1}>
          <div className={styles.prestation}>Coupe fille</div>
          <div className={styles.supprimer}>supprimer</div>
          <div className={styles.avecQui}>Avec qui ?</div>
          <div className={styles.tempsPrix}>{`30 min `}</div>
          <div className={styles.tempsPrix1}> 8000 XAF</div>
        </div>
        <div className={styles.addPrestation}>
          <div className={styles.boutonAdd}>
            <div className={styles.barreDeRecherche} />
            <b className={styles.ajouterUnePrestation}>
              Ajouter une prestation à la suite
            </b>
            <img className={styles.addIcon} alt="" src="/add@2x.png" />
          </div>
        </div>
        <CollaborateursCard propTop="85px" propLeft="27px" />
        <CollaborateursCard propTop="581px" propLeft="31px" />
      </div>
      <div className={styles.configurationDuPaiementAvecChild} />
      <b className={styles.titreService1}>
        <ul className={styles.prestationSlectionne}>
          <li>Prestation sélectionnée</li>
        </ul>
      </b>
      <b className={styles.titreService2}>
        <ul className={styles.prestationSlectionne}>
          <li>Choix de la Date et l’heure</li>
        </ul>
      </b>
      <Hours
        rectangleDivTop="1481px"
        rectangleDivCursor="pointer"
        onJourEtHeureClick={onJourEtHeureClick}
      />
      <div className={styles.configurationDuPaiementAvecItem} />
    </div>
  );
};

export default ConfigurationDuPaiementAvec;
