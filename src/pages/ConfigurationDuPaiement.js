import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hours from "../components/Hours";
import styles from "./css/ConfigurationDuPaiement.module.css";

const ConfigurationDuPaiement = () => {
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

  const onHeureContainerClick = useCallback(() => {
    navigate("/identification");
  }, [navigate]);

  const onAddPrestationContainerClick = useCallback(() => {
    navigate("/configuration-du-paiement-avec-ajout-de-prestation");
  }, [navigate]);

  return (
    <div className={styles.configurationDuPaiement}>
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
      <Footer elginStCelinaTop="1768px" />
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
        <div className={styles.prestation}>Coupe Garçon - 14 ans</div>
        <div className={styles.prestation1}>supprimer</div>
        <div className={styles.prestation2}>Avec qui ?</div>
        <div className={styles.tempsPrix}>{`30 min `}</div>
        <div className={styles.tempsPrix1}> 8000 XAF</div>
        <div
          className={styles.addPrestation}
          onClick={onAddPrestationContainerClick}
        >
          <div className={styles.barreDeRecherche} />
          <b className={styles.ajouterUnePrestation}>
            Ajouter une prestation à la suite
          </b>
          <img className={styles.addIcon} alt="" src="/add@2x.png" />
        </div>
        <div className={styles.prestationSelectChild} />
        <div className={styles.collaborateursBox}>
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
        </div>
      </div>
      <div className={styles.configurationDuPaiementChild} />
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
      <div className={styles.configurationDuPaiementItem} />
      <div className={styles.configurationDuPaiementInner} />
      <div className={styles.ellipseDiv} />
      <div className={styles.configurationDuPaiementChild1} />
      <div className={styles.configurationDuPaiementChild2} />
      <div className={styles.configurationDuPaiementChild3} />
      <div className={styles.configurationDuPaiementChild4} />
      <div className={styles.configurationDuPaiementChild5} />
      <div className={styles.configurationDuPaiementChild6} />
      <Hours
        rectangleDivTop="984px"
        rectangleDivCursor="unset"
        divCursor="pointer"
        onHeureContainerClick={onHeureContainerClick}
      />
    </div>
  );
};

export default ConfigurationDuPaiement;
