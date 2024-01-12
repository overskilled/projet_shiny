import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import styles from "./css/CustomerLogin.module.css";

const CustomerLogin = () => {
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
    <div className={styles.custpmerLogin}>
      <div className={styles.desktop10}>
        <img className={styles.desktop10Child} alt="" src="/rectangle-41.svg" />
        <b className={styles.vousAvezDjContainer}>
          <span>{`Vous avez déjà utilisez `}</span>
          <span className={styles.shiny}>Shiny</span>
          <span> ?</span>
        </b>
        <div className={styles.email}>Email *</div>
        <img className={styles.desktop10Item} alt="" src="/rectangle-42.svg" />
        <div className={styles.motDePasse}>Mot de passe *</div>
        <div className={styles.desktop10Inner} />
        <div className={styles.motDePasse1}>Mot de passe oublié ?</div>
        <div className={styles.rectangleDiv} />
        <div className={styles.seConnecter}>Se connecter</div>
        <img className={styles.lineIcon} alt="" />
        <div className={styles.lineDiv} />
        <div className={styles.ou}>Ou</div>
        <div className={styles.groupDiv}>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <div className={styles.seConnecterAvec}>
              Se connecter avec Google
            </div>
            <img
              className={styles.flatColorIconsgoogle}
              alt=""
              src="/flatcoloriconsgoogle.svg"
            />
          </div>
        </div>
        <div className={styles.desktop10Inner1}>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <div className={styles.seConnecterAvec1}>
              Se connecter avec Apple
            </div>
            <img
              className={styles.mingcuteappleFillIcon}
              alt=""
              src="/mingcuteapplefill.svg"
            />
          </div>
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.groupChild} />
          <div className={styles.seConnecterAvec}>
            Se connecter avec Facebook
          </div>
          <img
            className={styles.flatColorIconsgoogle}
            alt=""
            src="/logosfacebook.svg"
          />
        </div>
        <img className={styles.pathIcon} alt="" src="/path@2x.png" />
        <div className={styles.desktop10Child1} />
        <div className={styles.vector} />
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        <div className={styles.crerUnCompte}>Créer un compte</div>
        <Header
          connectionLabel="connexion"
          connectionId="/materialsymbolsperson.svg"
          showBoutonConnexion={false}
          showRectangleDiv
          showBoutonAjouterTablissement={false}
          rectangleDivVisible
          showAjouterVotreTablissement
          propTop="2px"
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
      </div>
    </div>
  );
};

export default CustomerLogin;
