import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./css/Identification.module.css";

const Identification = () => {
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

  const onPrestationText1Click = useCallback(() => {
    navigate("/-service-choisi");
  }, [navigate]);

  const onModifierTextClick = useCallback(() => {
    navigate("/configuration-du-paiement");
  }, [navigate]);

  const onCrerCompteContainerClick = useCallback(() => {
    navigate("/custpmer-login");
  }, [navigate]);

  const onCrerCompteContainer1Click = useCallback(() => {
    navigate("/identification-russie");
  }, [navigate]);

  return (
    <div className={styles.identification}>
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
      <Footer elginStCelinaTop="1433px" />
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
        <div className={styles.modifier} onClick={onPrestationText1Click}>
          supprimer
        </div>
        <div className={styles.tempsPrix}>{`30 min `}</div>
        <div className={styles.tempsPrix1}> 8000 XAF</div>
        <div className={styles.prestationSelectChild} />
      </div>
      <div className={styles.dateEtHeureSelect}>
        <div className={styles.cadre} />
        <div className={styles.date}>Vendredi 12 Janvier</div>
        <div className={styles.heure}>à 11 : 00</div>
        <div className={styles.modifier} onClick={onModifierTextClick}>
          modifier
        </div>
        <img
          className={styles.dateEtHeureSelectChild}
          alt=""
          src="/ellipse-18.svg"
        />
      </div>
      <div className={styles.identification1}>
        <div className={styles.cadre2} />
        <b className={styles.titreService1}>Je suis Nouveau sur Shiny ?</b>
        <b className={styles.titreService2}>Je déjà utilisé Shiny ?</b>
        <div className={styles.crerCompte} onClick={onCrerCompteContainerClick}>
          <div className={styles.cerUnCompte} />
          <div className={styles.titreService3}>Créer mon compte</div>
        </div>
        <div
          className={styles.crerCompte1}
          onClick={onCrerCompteContainer1Click}
        >
          <div className={styles.cerUnCompte1} />
          <b className={styles.titreService3}>Se Connecter</b>
        </div>
        <div className={styles.orBarre}>
          <b className={styles.or}>OU</b>
          <div className={styles.orBarreChild} />
          <div className={styles.orBarreItem} />
        </div>
      </div>
      <div className={styles.identificationChild} />
      <b className={styles.titreService5}>
        <ul className={styles.prestationSlectionne}>
          <li>Prestation sélectionnée</li>
        </ul>
      </b>
      <b className={styles.titreService6}>
        <ul className={styles.prestationSlectionne}>
          <li>Date et l’heure sélectionnées</li>
        </ul>
      </b>
      <b className={styles.titreService7}>
        <ul className={styles.prestationSlectionne}>
          <li>Identification</li>
        </ul>
      </b>
    </div>
  );
};

export default Identification;
