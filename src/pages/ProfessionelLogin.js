import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import styles from "./css/ProfessionelLogin.module.css";

const ProfessionelLogin = () => {
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
    <div className={styles.professionelLogin}>
      <Header
        connectionLabel="connexion"
        connectionId="/materialsymbolsperson.svg"
        showBoutonConnexion={false}
        showRectangleDiv={false}
        showBoutonAjouterTablissement
        rectangleDivVisible={false}
        showAjouterVotreTablissement={false}
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
        propHeight4="0px"
        propWidth4="0px"
        propRight3="unset"
        propBottom3="unset"
        propHeight5="48.2px"
        propWidth5="251.3px"
        propTop5="unset"
        propRight4="unset"
        propBottom4="unset"
        propLeft4="unset"
        propHeight6="18.2px"
        propWidth6="199.8px"
        propTop6="unset"
        propLeft5="unset"
        onNosServicesTextClick={onNosServicesTextClick}
        onShinyLogoTextClick={onShinyLogoTextClick}
        onBoutonConnexionContainerClick={onBoutonConnexionContainerClick}
        onBoutonAjouterTablissementClick={onBoutonAjouterTablissementClick}
      />
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.nom}>Nom *</div>
        <div className={styles.groupItem} />
        <div className={styles.entrerVotreNom}>Entrer votre nom..</div>
        <div className={styles.vousTesUnContainer}>
          <p className={styles.vousTesUn}>
            Vous êtes un particulier exersant dans les domaine ?
          </p>
          <p className={styles.vousTesUn}>Un de nos experts vous recontacte</p>
        </div>
        <div className={styles.adresse}>Adresse *</div>
        <div className={styles.groupInner} />
        <div className={styles.tlphone}>Téléphone *</div>
        <div className={styles.rectangleGroup}>
          <div className={styles.rectangleDiv} />
          <div className={styles.lineDiv} />
        </div>
        <img
          className={styles.emojioneflagForCameroonIcon}
          alt=""
          src="/emojioneflagforcameroon.svg"
        />
        <img className={styles.polygonIcon} alt="" src="/polygon-1.svg" />
        <div className={styles.div}>
          <span>+237</span>
          <span className={styles.span}> 00000000</span>
        </div>
        <div className={styles.regionsVille}>Regions, ville</div>
        <div className={styles.spcialists}>Spécialistés *</div>
        <div className={styles.groupChild1} />
        <div className={styles.massage}>Massage</div>
        <div className={styles.groupChild2} />
        <img className={styles.eiplusIcon} alt="" src="/eiplus.svg" />
        <div className={styles.div1}>1</div>
        <img
          className={styles.gridiconsdropdown}
          alt=""
          src="/gridiconsdropdown.svg"
        />
        <div className={styles.email}>Email *</div>
        <div className={styles.groupChild3} />
        <div className={styles.entrerVotreEmail}>Entrer votre email..</div>
        <div className={styles.horiares}>Horiares *</div>
        <div className={styles.ouverture}>{`Ouverture `}</div>
        <div className={styles.fermeture}>Fermeture</div>
        <div className={styles.groupParent}>
          <div className={styles.rectangleContainer}>
            <div className={styles.groupChild4} />
            <div className={styles.groupChild5} />
          </div>
          <img
            className={styles.gridiconsdropdown1}
            alt=""
            src="/gridiconsdropdown.svg"
          />
          <img
            className={styles.gridiconsdropdown2}
            alt=""
            src="/gridiconsdropdown.svg"
          />
          <div className={styles.hh}>hh</div>
          <div className={styles.mm}>mm</div>
        </div>
        <div className={styles.groupContainer}>
          <div className={styles.rectangleContainer}>
            <div className={styles.groupChild4} />
            <div className={styles.groupChild5} />
          </div>
          <img
            className={styles.gridiconsdropdown1}
            alt=""
            src="/gridiconsdropdown.svg"
          />
          <img
            className={styles.gridiconsdropdown2}
            alt=""
            src="/gridiconsdropdown.svg"
          />
          <div className={styles.hh1}>hh</div>
          <div className={styles.mm}>mm</div>
        </div>
        <div className={styles.groupChild8} />
        <div className={styles.senregistrer}>S’enregistrer</div>
      </div>
      <b className={styles.librezVosJournesContainer}>
        <p
          className={styles.vousTesUn}
        >{`Libérez vos journées et développez votre business `}</p>
        <p className={styles.vousTesUn}>
          avec notre plateforme de réservation beauté.
        </p>
      </b>
      <b className={styles.vousEnAvezContainer}>
        <p className={styles.vousTesUn}>Vous en</p>
        <p className={styles.vousTesUn}>avez rêvé.</p>
      </b>
      <div className={styles.plusDe10MillesUtilisateurParent}>
        <b className={styles.sansEngagement}>
          Plus de 10 milles utilisateur / mois
        </b>
        <img
          className={styles.mdiprogressTickIcon}
          alt=""
          src="/mdiprogresstick.svg"
        />
      </div>
      <div className={styles.sansEngagementParent}>
        <b className={styles.sansEngagement}>Sans engagement</b>
        <img
          className={styles.mdiprogressTickIcon}
          alt=""
          src="/mdiprogresstick.svg"
        />
      </div>
      <div className={styles.sansCommissionParent}>
        <b className={styles.sansEngagement}>Sans commission</b>
        <img
          className={styles.mdiprogressTickIcon}
          alt=""
          src="/mdiprogresstick.svg"
        />
      </div>
    </div>
  );
};

export default ProfessionelLogin;
