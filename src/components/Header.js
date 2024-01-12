import { useMemo } from "react";
import styles from "./css/Header.module.css";

const Header = ({
  connectionLabel,
  connectionId,
  showBoutonConnexion,
  showRectangleDiv,
  showBoutonAjouterTablissement,
  rectangleDivVisible,
  showAjouterVotreTablissement,
  propTop,
  propCursor,
  propHeight,
  propWidth,
  propTop1,
  propRight,
  propBottom,
  propLeft,
  propHeight1,
  propWidth1,
  propTop2,
  propRight1,
  propBottom1,
  propLeft1,
  propHeight2,
  propWidth2,
  propTop3,
  propLeft2,
  propHeight3,
  propWidth3,
  propTop4,
  propRight2,
  propBottom2,
  propLeft3,
  propHeight4,
  propWidth4,
  propRight3,
  propBottom3,
  propHeight5,
  propWidth5,
  propTop5,
  propRight4,
  propBottom4,
  propLeft4,
  propHeight6,
  propWidth6,
  propTop6,
  propLeft5,
  onNosServicesTextClick,
  onShinyLogoTextClick,
  onBoutonConnexionContainerClick,
  onBoutonAjouterTablissementClick,
}) => {
  const headerStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const shinyLogoStyle = useMemo(() => {
    return {
      cursor: propCursor,
    };
  }, [propCursor]);

  const boutonConnexionStyle = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
      top: propTop1,
      right: propRight,
      bottom: propBottom,
      left: propLeft,
    };
  }, [propHeight, propWidth, propTop1, propRight, propBottom, propLeft]);

  const rectangleDiv3Style = useMemo(() => {
    return {
      height: propHeight1,
      width: propWidth1,
      top: propTop2,
      right: propRight1,
      bottom: propBottom1,
      left: propLeft1,
    };
  }, [propHeight1, propWidth1, propTop2, propRight1, propBottom1, propLeft1]);

  const connexionStyle = useMemo(() => {
    return {
      height: propHeight2,
      width: propWidth2,
      top: propTop3,
      left: propLeft2,
    };
  }, [propHeight2, propWidth2, propTop3, propLeft2]);

  const materialSymbolspersonIconStyle = useMemo(() => {
    return {
      height: propHeight3,
      width: propWidth3,
      top: propTop4,
      right: propRight2,
      bottom: propBottom2,
      left: propLeft3,
    };
  }, [propHeight3, propWidth3, propTop4, propRight2, propBottom2, propLeft3]);

  const boutonAjouterTablissementStyle = useMemo(() => {
    return {
      height: propHeight4,
      width: propWidth4,
      right: propRight3,
      bottom: propBottom3,
    };
  }, [propHeight4, propWidth4, propRight3, propBottom3]);

  const rectangleDiv4Style = useMemo(() => {
    return {
      height: propHeight5,
      width: propWidth5,
      top: propTop5,
      right: propRight4,
      bottom: propBottom4,
      left: propLeft4,
    };
  }, [propHeight5, propWidth5, propTop5, propRight4, propBottom4, propLeft4]);

  const ajouterVotreTablissementStyle = useMemo(() => {
    return {
      height: propHeight6,
      width: propWidth6,
      top: propTop6,
      left: propLeft5,
    };
  }, [propHeight6, propWidth6, propTop6, propLeft5]);

  return (
    <div className={styles.header} style={headerStyle}>
      <div className={styles.headerChild} />
      <div className={styles.menu}>
        <b className={styles.nosServices} onClick={onNosServicesTextClick}>
          Nos services
        </b>
        <b className={styles.barbier}>Barbier</b>
        <b className={styles.coiffeur}>Coiffeur</b>
        <b className={styles.institutDeBeaut}>Institut de beauté</b>
        <b className={styles.institutDeMassage}>Institut de massage</b>
      </div>
      <div
        className={styles.shinyLogo}
        style={shinyLogoStyle}
        onClick={onShinyLogoTextClick}
      >
        Shiny
      </div>
      {showBoutonConnexion && (
        <div
          className={styles.boutonConnexion}
          onClick={onBoutonConnexionContainerClick}
          style={boutonConnexionStyle}
        >
          {showRectangleDiv && (
            <div
              className={styles.boutonConnexionChild}
              style={rectangleDiv3Style}
            />
          )}
          <b className={styles.connexion} style={connexionStyle}>
            {connectionLabel}
          </b>
          <img
            className={styles.materialSymbolspersonIcon}
            alt=""
            src={connectionId}
            style={materialSymbolspersonIconStyle}
          />
        </div>
      )}
      {showBoutonAjouterTablissement && (
        <div
          className={styles.boutonAjouterTablissement}
          onClick={onBoutonAjouterTablissementClick}
          style={boutonAjouterTablissementStyle}
        >
          {rectangleDivVisible && (
            <div
              className={styles.boutonConnexionChild}
              style={rectangleDiv4Style}
            />
          )}
          {showAjouterVotreTablissement && (
            <b
              className={styles.ajouterVotreTablissement}
              style={ajouterVotreTablissementStyle}
            >{`Ajouter votre établissement `}</b>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
