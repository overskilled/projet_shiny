import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import SearchBarContainer from "../components/SearchBarContainer";
import Footer from "../components/Footer";
import Service from "../components/Service";
import styles from "./css/RservationServices.module.css";

const RservationServices = () => {
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

  const onBoutonSelectContainerClick = useCallback(() => {
    navigate("/-service-choisi");
  }, [navigate]);

  const onBoutonSelectContainer1Click = useCallback(() => {
    navigate("/-service-choisi");
  }, [navigate]);

  const onBoutonSelectContainer2Click = useCallback(() => {
    navigate("/-service-choisi");
  }, [navigate]);

  const onBoutonSelectContainer3Click = useCallback(() => {
    navigate("/-service-choisi");
  }, [navigate]);

  return (
    <div className={styles.rservationServices}>
      <Header
        connectionLabel="connexion"
        connectionId="/materialsymbolsperson.svg"
        showBoutonConnexion
        showRectangleDiv
        showBoutonAjouterTablissement
        rectangleDivVisible
        showAjouterVotreTablissement
        propTop="0px"
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
      <b className={styles.nosServices}>Nos services</b>
      <div className={styles.veillezVotreBeautContainer}>
        <p className={styles.veillezVotreBeaut}>
          "Éveillez votre beauté intérieure et extérieure avec nos services
          bien-être d'exception, pour une expérience sensorielle qui révèle la
          meilleure version de vous-même."
        </p>
        <p className={styles.veillezVotreBeaut}>&nbsp;</p>
      </div>
      <SearchBarContainer />
      <div className={styles.barreDeRecherche}>
        <div className={styles.searchBarre} />
      </div>
      <Footer elginStCelinaTop="2803px" />
      <div className={styles.filtre}>
        <div className={styles.filtre1}>Filtre</div>
        <img className={styles.sortDownIcon} alt="" src="/sort-down@2x.png" />
        <img className={styles.tuneIcon} alt="" src="/tune@2x.png" />
      </div>
      <Service
        propTop="438px"
        propLeft="28px"
        propCursor="pointer"
        propWidth="173px"
        onBoutonSelectContainerClick={onBoutonSelectContainerClick}
      />
      <Service
        propTop="1336px"
        propLeft="28px"
        propCursor="pointer"
        propWidth="173px"
        onBoutonSelectContainerClick={onBoutonSelectContainer1Click}
      />
      <Service
        propTop="887px"
        propLeft="34px"
        propCursor="pointer"
        propWidth="167px"
        onBoutonSelectContainerClick={onBoutonSelectContainer2Click}
      />
      <Service
        propTop="1785px"
        propLeft="34px"
        propCursor="pointer"
        propWidth="167px"
        onBoutonSelectContainerClick={onBoutonSelectContainer3Click}
      />
      <Service
        propTop="2234px"
        propLeft="40px"
        propCursor="unset"
        propWidth="167px"
      />
    </div>
  );
};

export default RservationServices;
