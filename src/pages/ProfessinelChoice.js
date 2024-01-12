import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import styles from "./css/ProfessinelChoice.module.css";

const ProfessinelChoice = () => {
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

  const onGroupContainerClick = useCallback(() => {
    navigate("/professionel-login");
  }, [navigate]);

  return (
    <div className={styles.professinelChoice}>
      <div className={styles.institute}>
        <img
          className={styles.instituteChild}
          alt=""
          src="/rectangle-50@2x.png"
        />
        <div className={styles.uneInstitute}>Un Institut</div>
      </div>
      <div className={styles.personnelWrapper} onClick={onGroupContainerClick}>
        <div className={styles.personnel}>
          <img
            className={styles.instituteChild}
            alt=""
            src="/rectangle-50@2x.png"
          />
          <div className={styles.uneInstitute1}>Un Professionel</div>
        </div>
      </div>
      <b className={styles.vousTes}>Vous êtes ?</b>
      <Header
        connectionLabel="connexion"
        connectionId="/materialsymbolsperson.svg"
        showBoutonConnexion={false}
        showRectangleDiv={false}
        showBoutonAjouterTablissement={false}
        rectangleDivVisible
        showAjouterVotreTablissement
        propTop="0px"
        propCursor="pointer"
        propHeight="33.33%"
        propWidth="8.34%"
        propTop1="32.11%"
        propRight="4.49%"
        propBottom="34.56%"
        propLeft="87.17%"
        propHeight1="160.67%"
        propWidth1="144.55%"
        propTop2="-28.67%"
        propRight1="-35.3%"
        propBottom1="-32%"
        propLeft1="-9.24%"
        propHeight2="60.67%"
        propWidth2="63.86%"
        propTop3="25%"
        propLeft2="36.14%"
        propHeight3="100%"
        propWidth3="23.56%"
        propTop4="0%"
        propRight2="76.44%"
        propBottom2="0%"
        propLeft3="0%"
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
    </div>
  );
};

export default ProfessinelChoice;
