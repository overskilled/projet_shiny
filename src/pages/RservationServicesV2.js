import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import SearchBarContainer from "../components/SearchBarContainer";
import Services from "../components/Services";
import Footer from "../components/Footer";
import styles from "./css/RservationServicesV2.module.css";

const RservationServicesV2 = () => {
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

  return (
    <div className={styles.rservationServicesV2}>
      <Header
        connectionLabel="connexion"
        connectionId="/materialsymbolsperson.svg"
        showBoutonConnexion
        showRectangleDiv
        showBoutonAjouterTablissement
        rectangleDivVisible
        showAjouterVotreTablissement
        propTop="6px"
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
      <Services
        illustration="/illustration@2x.png"
        placeMarker="/place-marker@2x.png"
        time="/time@2x.png"
        planner="/planner@2x.png"
        propLeft="46.5px"
        propTop="460px"
      />
      <Services
        illustration="/illustration@2x.png"
        placeMarker="/place-marker@2x.png"
        time="/time@2x.png"
        planner="/planner@2x.png"
        propLeft="43.5px"
        propTop="1612px"
      />
      <Services
        illustration="/illustration@2x.png"
        placeMarker="/place-marker@2x.png"
        time="/time@2x.png"
        planner="/planner@2x.png"
        propLeft="46px"
        propTop="1036px"
      />
      <Services
        illustration="/illustration@2x.png"
        placeMarker="/place-marker@2x.png"
        time="/time@2x.png"
        planner="/planner@2x.png"
        propLeft="43px"
        propTop="2188px"
      />
      <Services
        illustration="/illustration@2x.png"
        placeMarker="/place-marker@2x.png"
        time="/time@2x.png"
        planner="/planner@2x.png"
        propLeft="542px"
        propTop="460px"
      />
      <Services
        illustration="/illustration@2x.png"
        placeMarker="/place-marker@2x.png"
        time="/time@2x.png"
        planner="/planner@2x.png"
        propLeft="539px"
        propTop="1612px"
      />
      <Services
        illustration="/illustration@2x.png"
        placeMarker="/place-marker@2x.png"
        time="/time@2x.png"
        planner="/planner@2x.png"
        propLeft="541.5px"
        propTop="1036px"
      />
      <Services
        illustration="/illustration@2x.png"
        placeMarker="/place-marker@2x.png"
        time="/time@2x.png"
        planner="/planner@2x.png"
        propLeft="538.5px"
        propTop="2188px"
      />
      <Services
        illustration="/illustration@2x.png"
        placeMarker="/place-marker@2x.png"
        time="/time@2x.png"
        planner="/planner@2x.png"
        propLeft="1036px"
        propTop="460px"
      />
      <Services
        illustration="/illustration@2x.png"
        placeMarker="/place-marker@2x.png"
        time="/time@2x.png"
        planner="/planner@2x.png"
        propLeft="1033px"
        propTop="1612px"
      />
      <Services
        illustration="/illustration@2x.png"
        placeMarker="/place-marker@2x.png"
        time="/time@2x.png"
        planner="/planner@2x.png"
        propLeft="1035.5px"
        propTop="1036px"
      />
      <Services
        illustration="/illustration@2x.png"
        placeMarker="/place-marker@2x.png"
        time="/time@2x.png"
        planner="/planner@2x.png"
        propLeft="1032.5px"
        propTop="2188px"
      />
      <Footer elginStCelinaTop="2803px" />
      <div className={styles.filtre}>
        <div className={styles.filtre1}>Filtre</div>
        <img className={styles.funnelIcon} alt="" src="/funnel@2x.png" />
        <img className={styles.sortDownIcon} alt="" src="/sort-down@2x.png" />
      </div>
    </div>
  );
};

export default RservationServicesV2;
