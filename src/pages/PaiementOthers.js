import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PaymentMethods from "../components/PaymentMethods";
import styles from "./css/PaiementOthers.module.css";

const PaiementOthers = () => {
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

  const onPaymentText1Click = useCallback(() => {
    navigate("/paiement");
  }, [navigate]);

  return (
    <div className={styles.paiementOthers}>
      <Header
        connectionLabel="Nom_user"
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
      <div className={styles.steps}>
        <div className={styles.payment} onClick={onPaymentText1Click}>
          Payment
        </div>
        <img
          className={styles.chevronRight1Icon}
          alt=""
          src="/chevronright-1.svg"
        />
        <div className={styles.others}>Others</div>
      </div>
      <PaymentMethods />
    </div>
  );
};

export default PaiementOthers;
